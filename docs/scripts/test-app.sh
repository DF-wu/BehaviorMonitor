#!/bin/bash

# Behavior Monitor Application Testing Script
# This script performs comprehensive testing of the application
# including build verification, functionality testing, and deployment checks

set -e

# Color codes for output formatting
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Logging functions
log_info() {
    echo -e "${BLUE}ℹ️  INFO: $1${NC}"
}

log_success() {
    echo -e "${GREEN}✅ SUCCESS: $1${NC}"
}

log_warning() {
    echo -e "${YELLOW}⚠️  WARNING: $1${NC}"
}

log_error() {
    echo -e "${RED}❌ ERROR: $1${NC}"
}

# Test counters
TESTS_PASSED=0
TESTS_FAILED=0
TESTS_TOTAL=0

# Function to run a test and track results
run_test() {
    local test_name="$1"
    local test_command="$2"
    
    TESTS_TOTAL=$((TESTS_TOTAL + 1))
    log_info "Running test: $test_name"
    
    if eval "$test_command"; then
        log_success "$test_name"
        TESTS_PASSED=$((TESTS_PASSED + 1))
        return 0
    else
        log_error "$test_name"
        TESTS_FAILED=$((TESTS_FAILED + 1))
        return 1
    fi
}

# Function to check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to check if a port is in use
port_in_use() {
    lsof -i :"$1" >/dev/null 2>&1
}

# Function to wait for server to start
wait_for_server() {
    local url="$1"
    local timeout="$2"
    local counter=0
    
    log_info "Waiting for server at $url (timeout: ${timeout}s)"
    
    while [ $counter -lt $timeout ]; do
        if curl -s "$url" >/dev/null 2>&1; then
            log_success "Server is responding at $url"
            return 0
        fi
        sleep 1
        counter=$((counter + 1))
    done
    
    log_error "Server did not respond within ${timeout} seconds"
    return 1
}

echo "🎯 Behavior Monitor - Application Testing Suite"
echo "=============================================="

# Pre-flight checks
log_info "Performing pre-flight checks..."

run_test "Node.js is installed" "command_exists node"
run_test "npm is installed" "command_exists npm"
run_test "Git is installed" "command_exists git"

# Check Node.js version
if command_exists node; then
    NODE_VERSION=$(node --version)
    log_info "Node.js version: $NODE_VERSION"
    
    # Extract major version number
    NODE_MAJOR=$(echo "$NODE_VERSION" | sed 's/v\([0-9]*\).*/\1/')
    if [ "$NODE_MAJOR" -ge 18 ]; then
        log_success "Node.js version is compatible (>= 18)"
    else
        log_warning "Node.js version may be too old (< 18)"
    fi
fi

# Check if we're in the correct directory
if [ ! -f "package.json" ]; then
    log_error "package.json not found. Please run this script from the project root directory."
    exit 1
fi

# Verify project structure
log_info "Verifying project structure..."

run_test "src directory exists" "[ -d 'src' ]"
run_test "public directory exists" "[ -d 'public' ]"
run_test "Firebase config exists" "[ -f 'src/config/firebase.ts' ]"
run_test "Main App component exists" "[ -f 'src/App.tsx' ]"
run_test "Context provider exists" "[ -f 'src/context/AppContext.tsx' ]"

# Install dependencies
log_info "Installing dependencies..."
run_test "npm install" "npm install --silent"

# Run linting
log_info "Running code quality checks..."
run_test "ESLint check" "npm run lint"

# Build the application
log_info "Building the application..."
run_test "Production build" "npm run build"

# Verify build output
if [ -d "dist" ]; then
    log_success "Build directory created"
    
    run_test "index.html exists in build" "[ -f 'dist/index.html' ]"
    run_test "Assets directory exists" "[ -d 'dist/assets' ]"
    
    # Check build size
    BUILD_SIZE=$(du -sh dist | cut -f1)
    log_info "Build size: $BUILD_SIZE"
    
    # Count files in build
    FILE_COUNT=$(find dist -type f | wc -l)
    log_info "Files in build: $FILE_COUNT"
else
    log_error "Build directory not found"
    TESTS_FAILED=$((TESTS_FAILED + 1))
fi

# Test development server
log_info "Testing development server..."

# Kill any existing dev server
if port_in_use 5173; then
    log_warning "Port 5173 is in use, attempting to kill existing process"
    pkill -f "vite.*dev" || true
    sleep 2
fi

# Start dev server in background
log_info "Starting development server..."
npm run dev > /dev/null 2>&1 &
DEV_PID=$!

# Wait for dev server to start
if wait_for_server "http://localhost:5173" 30; then
    run_test "Development server responds" "curl -s http://localhost:5173 | grep -q 'Behavior Monitor'"
    
    # Test API endpoints (if available)
    run_test "Main page loads" "curl -s -o /dev/null -w '%{http_code}' http://localhost:5173 | grep -q '200'"
else
    log_error "Development server failed to start"
    TESTS_FAILED=$((TESTS_FAILED + 1))
fi

# Clean up dev server
if [ ! -z "$DEV_PID" ]; then
    kill $DEV_PID 2>/dev/null || true
    log_info "Development server stopped"
fi

# Test production preview
log_info "Testing production preview..."

# Kill any existing preview server
if port_in_use 4173; then
    log_warning "Port 4173 is in use, attempting to kill existing process"
    pkill -f "vite.*preview" || true
    sleep 2
fi

# Start preview server in background
log_info "Starting preview server..."
npm run preview > /dev/null 2>&1 &
PREVIEW_PID=$!

# Wait for preview server to start
if wait_for_server "http://localhost:4173/BehaviorMonitor/" 30; then
    run_test "Preview server responds" "curl -s http://localhost:4173/BehaviorMonitor/ | grep -q 'Behavior Monitor'"
    run_test "Production build loads correctly" "curl -s -o /dev/null -w '%{http_code}' http://localhost:4173/BehaviorMonitor/ | grep -q '200'"
else
    log_error "Preview server failed to start"
    TESTS_FAILED=$((TESTS_FAILED + 1))
fi

# Clean up preview server
if [ ! -z "$PREVIEW_PID" ]; then
    kill $PREVIEW_PID 2>/dev/null || true
    log_info "Preview server stopped"
fi

# Test Firebase configuration
log_info "Testing Firebase configuration..."

if grep -q "behaviormonitor-36a53" src/config/firebase.ts; then
    log_success "Firebase project ID found in configuration"
else
    log_warning "Firebase project ID not found or different"
fi

# Test deployment readiness
log_info "Checking deployment readiness..."

run_test "Deploy script exists" "[ -f 'deploy.sh' ]"
run_test "Deploy script is executable" "[ -x 'deploy.sh' ]"
run_test "GitHub Actions workflow exists" "[ -f '.github/workflows/deploy.yml' ]"
run_test "404 page exists" "[ -f 'public/404.html' ]"

# Check git status
if command_exists git && git rev-parse --git-dir > /dev/null 2>&1; then
    if [ -z "$(git status --porcelain)" ]; then
        log_success "Git working directory is clean"
    else
        log_warning "Git working directory has uncommitted changes"
        git status --short
    fi
else
    log_warning "Not a git repository or git not available"
fi

# Final report
echo ""
echo "🏁 Test Results Summary"
echo "======================"
echo "Total tests: $TESTS_TOTAL"
echo "Passed: $TESTS_PASSED"
echo "Failed: $TESTS_FAILED"

if [ $TESTS_FAILED -eq 0 ]; then
    log_success "All tests passed! 🎉"
    echo ""
    echo "✨ Your application is ready for deployment!"
    echo "📝 Next steps:"
    echo "   1. Commit your changes: git add . && git commit -m 'Ready for deployment'"
    echo "   2. Push to GitHub: git push origin main"
    echo "   3. Deploy: npm run deploy"
    echo ""
    exit 0
else
    log_error "$TESTS_FAILED test(s) failed"
    echo ""
    echo "🔧 Please fix the failing tests before deployment"
    exit 1
fi
