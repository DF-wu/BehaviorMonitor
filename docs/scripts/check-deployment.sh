#!/bin/bash

# Behavior Monitor - Deployment Status Checker
# This script helps you monitor the GitHub Actions deployment status

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

echo "🎯 Behavior Monitor - Deployment Status Checker"
echo "=============================================="

# Get repository information
if git remote -v | grep -q "github.com"; then
    REPO_URL=$(git remote get-url origin)
    if [[ $REPO_URL == *"github.com"* ]]; then
        # Extract username and repo name from URL
        if [[ $REPO_URL == *".git" ]]; then
            REPO_PATH=$(echo $REPO_URL | sed 's/.*github.com[:/]\([^/]*\/[^.]*\).git/\1/')
        else
            REPO_PATH=$(echo $REPO_URL | sed 's/.*github.com[:/]\([^/]*\/[^/]*\)/\1/')
        fi
        
        USERNAME=$(echo $REPO_PATH | cut -d'/' -f1)
        REPO_NAME=$(echo $REPO_PATH | cut -d'/' -f2)
        
        log_info "Repository: $USERNAME/$REPO_NAME"
        
        # GitHub Pages URL
        PAGES_URL="https://$USERNAME.github.io/$REPO_NAME/"
        log_info "Expected GitHub Pages URL: $PAGES_URL"
        
        # GitHub Actions URL
        ACTIONS_URL="https://github.com/$REPO_PATH/actions"
        log_info "GitHub Actions URL: $ACTIONS_URL"
        
    else
        log_error "Not a GitHub repository"
        exit 1
    fi
else
    log_error "No GitHub remote found"
    exit 1
fi

echo ""
log_info "Checking deployment status..."

# Check if GitHub Actions workflow file exists
if [ -f ".github/workflows/deploy.yml" ]; then
    log_success "GitHub Actions workflow file found"
else
    log_error "GitHub Actions workflow file not found at .github/workflows/deploy.yml"
    exit 1
fi

# Check if the latest commit has been pushed
LATEST_COMMIT=$(git rev-parse HEAD)
REMOTE_COMMIT=$(git rev-parse origin/main 2>/dev/null || echo "unknown")

if [ "$LATEST_COMMIT" = "$REMOTE_COMMIT" ]; then
    log_success "Latest commit is pushed to GitHub"
else
    log_warning "Latest commit may not be pushed to GitHub"
    echo "  Local:  $LATEST_COMMIT"
    echo "  Remote: $REMOTE_COMMIT"
fi

echo ""
log_info "Testing GitHub Pages availability..."

# Test if GitHub Pages is accessible
if command -v curl >/dev/null 2>&1; then
    HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$PAGES_URL" || echo "000")
    
    case $HTTP_STATUS in
        200)
            log_success "GitHub Pages is live and accessible!"
            echo "  URL: $PAGES_URL"
            ;;
        404)
            log_warning "GitHub Pages returns 404 - may still be deploying"
            echo "  This is normal for new deployments"
            ;;
        000)
            log_warning "Cannot reach GitHub Pages - check internet connection"
            ;;
        *)
            log_warning "GitHub Pages returned HTTP $HTTP_STATUS"
            ;;
    esac
else
    log_warning "curl not available - cannot test GitHub Pages"
fi

echo ""
log_info "Next steps:"
echo "1. 🌐 Visit GitHub Actions: $ACTIONS_URL"
echo "2. 📊 Check workflow status (should show green checkmark when complete)"
echo "3. 🚀 Access your app: $PAGES_URL"
echo "4. ⚙️  If needed, check repository Settings → Pages"

echo ""
log_info "Useful commands:"
echo "  git status                    # Check local changes"
echo "  git push origin main          # Push changes to trigger build"
echo "  npm run build                 # Test build locally"
echo "  npm run preview               # Preview production build"

echo ""
echo "🎉 Auto-build setup is complete!"
echo "Your app will automatically deploy when you push to the main branch."

# Open URLs if on macOS
if [[ "$OSTYPE" == "darwin"* ]]; then
    read -p "Open GitHub Actions page in browser? (y/N): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        open "$ACTIONS_URL"
    fi
    
    read -p "Open GitHub Pages URL in browser? (y/N): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        open "$PAGES_URL"
    fi
fi
