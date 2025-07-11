# Behavior Monitor - Deployment Guide

## 🚀 Quick Deployment

### Prerequisites
- Git repository on GitHub
- Node.js 18+ installed locally
- Firebase project configured

### One-Command Deployment
```bash
# Build and deploy to GitHub Pages
npm run deploy:gh-pages
```

## 📋 Step-by-Step Deployment

### 1. Prepare Your Repository

```bash
# Ensure all changes are committed
git add .
git commit -m "Ready for deployment"
git push origin main
```

### 2. Configure GitHub Pages

1. Go to your GitHub repository
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select "Deploy from a branch"
4. Choose **gh-pages** branch
5. Set folder to **/ (root)**
6. Click **Save**

### 3. Deploy the Application

#### Option A: Automated Deployment (Recommended)
```bash
# This will build and deploy automatically
npm run deploy:gh-pages
```

#### Option B: Manual Deployment
```bash
# Build the application
npm run build

# Deploy using the custom script
./deploy.sh
```

#### Option C: GitHub Actions (Automatic)
The repository includes a GitHub Actions workflow that automatically deploys when you push to the main branch.

### 4. Verify Deployment

After deployment, your application will be available at:
```
https://[your-username].github.io/BehaviorMonitor/
```

## 🔧 Configuration for Different Environments

### Development Environment
```bash
# Start development server
npm run dev
# Access at: http://localhost:5173
```

### Production Preview
```bash
# Build and preview production version
npm run build
npm run preview
# Access at: http://localhost:4173/BehaviorMonitor/
```

### Custom Domain Setup

If you want to use a custom domain:

1. Add a `CNAME` file to the `public` directory:
```bash
echo "yourdomain.com" > public/CNAME
```

2. Update `vite.config.ts`:
```typescript
base: process.env.NODE_ENV === 'production' ? '/' : '/',
```

3. Configure DNS settings with your domain provider

## 🔥 Firebase Configuration

### Firestore Setup

1. **Enable Firestore** in Firebase Console
2. **Deploy Security Rules**:
```bash
firebase deploy --only firestore:rules
```

3. **Create Indexes** (if needed):
```bash
firebase deploy --only firestore:indexes
```

### Cloud Functions Setup (Optional)

1. **Install Firebase CLI**:
```bash
npm install -g firebase-tools
firebase login
```

2. **Deploy Functions**:
```bash
cd functions
npm install
cd ..
firebase deploy --only functions
```

3. **Set Environment Variables**:
```bash
firebase functions:config:set admin.password="your-secure-password"
```

## 🔒 Security Configuration

### Firestore Security Rules

The current rules are configured for personal use. For production:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read access to score records for public view
    match /scoreRecords/{document} {
      allow read: if true;
      allow write: if request.auth != null; // Require authentication
    }
    
    // Restrict settings access
    match /settings/{document} {
      allow read: if true;
      allow write: if request.auth != null && 
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
  }
}
```

### Environment Variables

For sensitive configuration, use environment variables:

```bash
# .env.production
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_PROJECT_ID=your-project-id
```

## 📊 Monitoring and Analytics

### Firebase Analytics

Analytics are automatically enabled. View reports in Firebase Console:
- User engagement
- Page views
- Performance metrics

### Error Monitoring

Monitor application errors:
1. Check browser console for client-side errors
2. View Firebase Functions logs for server-side errors
3. Use Firebase Crashlytics for crash reporting

### Performance Monitoring

Track application performance:
```bash
# Analyze bundle size
npm run build
npx vite-bundle-analyzer dist
```

## 🔄 CI/CD Pipeline

### GitHub Actions Workflow

The included workflow (`.github/workflows/deploy.yml`) automatically:

1. **Triggers** on push to main branch
2. **Installs** dependencies
3. **Runs** linting and tests
4. **Builds** the application
5. **Deploys** to GitHub Pages

### Manual Workflow Trigger

You can also trigger deployment manually:
1. Go to **Actions** tab in GitHub
2. Select **Deploy to GitHub Pages**
3. Click **Run workflow**

## 🐛 Troubleshooting

### Common Issues

#### 1. Build Failures
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

#### 2. Deployment Errors
```bash
# Check GitHub Pages status
# Verify branch and folder settings
# Ensure CNAME file is correct (if using custom domain)
```

#### 3. Firebase Connection Issues
```bash
# Verify Firebase configuration
# Check Firestore security rules
# Ensure project is active
```

#### 4. 404 Errors on Refresh
The included `404.html` handles client-side routing. Ensure it's in the `public` directory.

### Debug Mode

Enable debug logging:
```javascript
// In browser console
localStorage.setItem('debug', 'true');
```

## 📈 Performance Optimization

### Bundle Size Optimization

Current bundle sizes are optimized with:
- Code splitting by vendor, UI library, and charts
- Tree shaking for unused code
- Minification and compression

### Further Optimizations

1. **Lazy Loading**:
```typescript
const AdminView = lazy(() => import('./components/AdminView'));
```

2. **Service Worker** (future enhancement):
```bash
# Add PWA capabilities
npm install workbox-webpack-plugin
```

3. **CDN Integration**:
```typescript
// Use CDN for large libraries
externals: {
  'antd': 'antd',
  'react': 'React',
  'react-dom': 'ReactDOM'
}
```

## 🔄 Updates and Maintenance

### Regular Updates

1. **Dependencies**:
```bash
npm update
npm audit fix
```

2. **Security Patches**:
```bash
npm audit
npm audit fix --force
```

3. **Firebase Updates**:
```bash
firebase use --add production
firebase deploy
```

### Backup Strategy

1. **Export Firestore Data**:
```bash
gcloud firestore export gs://your-bucket/backup-folder
```

2. **Version Control**:
```bash
git tag v1.0.0
git push origin v1.0.0
```

## 📞 Support and Resources

### Documentation
- [PROJECT_README.md](./PROJECT_README.md) - Main project documentation
- [DEVELOPMENT_GUIDE.md](./DEVELOPMENT_GUIDE.md) - Development instructions
- [API_DOCUMENTATION.md](./API_DOCUMENTATION.md) - API reference

### External Resources
- [Firebase Documentation](https://firebase.google.com/docs)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)

### Getting Help

1. Check the troubleshooting section above
2. Review GitHub Issues in the repository
3. Consult Firebase Console for error logs
4. Check browser developer tools for client-side errors

---

**🎉 Congratulations! Your Behavior Monitor application is now deployed and ready for use!**
