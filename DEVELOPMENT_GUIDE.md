# Behavior Monitor - Development Guide

## 📋 Project Overview

Behavior Monitor is a comprehensive web application designed to track and manage behavioral performance through a reward and punishment system. The application features a public view for displaying current scores and a secure admin interface for score management and analytics.

## 🏗 Architecture Overview

### Frontend Architecture
- **Framework**: React 19 with TypeScript for type safety and modern development
- **Build Tool**: Vite 7 for fast development and optimized production builds
- **UI Library**: Ant Design 5 for consistent and professional UI components
- **Charts**: @ant-design/charts for data visualization and analytics
- **State Management**: React Context API with useReducer for predictable state updates
- **Styling**: CSS-in-JS with Ant Design theming system

### Backend Architecture
- **Database**: Firebase Firestore for real-time NoSQL data storage
- **Functions**: Firebase Cloud Functions for server-side logic and scheduled tasks
- **Authentication**: Simple password-based authentication for admin access
- **Hosting**: GitHub Pages for static site hosting with CI/CD integration

### Data Flow
1. **Public View**: Displays real-time score data from Firestore
2. **Admin Authentication**: Password verification against Firestore settings
3. **Score Management**: CRUD operations through Firebase SDK
4. **Real-time Updates**: Firestore listeners for live data synchronization
5. **Analytics**: Client-side computation of statistics and chart data

## 🛠 Development Setup

### Prerequisites
```bash
# Required software versions
Node.js >= 18.0.0
npm >= 9.0.0
Git >= 2.30.0
```

### Initial Setup
```bash
# Clone the repository
git clone <repository-url>
cd BehaviorMonitor

# Install dependencies
npm install

# Start development server
npm run dev
```

### Environment Configuration
The application uses Firebase configuration embedded in the code. For production deployment, ensure Firebase project settings are correctly configured in `src/config/firebase.ts`.

## 📁 Project Structure Deep Dive

```
src/
├── components/              # React components organized by feature
│   ├── PublicView.tsx      # Main public interface component
│   ├── AdminView.tsx       # Admin dashboard layout
│   ├── AdminLoginModal.tsx # Authentication modal
│   └── admin/              # Admin-specific components
│       ├── QuickActions.tsx    # Score adjustment interface
│       ├── StatisticsPanel.tsx # Analytics and charts
│       └── SettingsPanel.tsx   # System configuration
├── context/                # Global state management
│   └── AppContext.tsx      # Main application context with reducers
├── services/               # External service integrations
│   └── firebaseService.ts  # Firebase operations abstraction
├── types/                  # TypeScript type definitions
│   └── index.ts           # Centralized type exports
├── config/                # Application configuration
│   └── firebase.ts        # Firebase initialization and config
├── App.tsx                # Root application component
├── main.tsx              # Application entry point
└── App.css               # Global styles and theme overrides
```

## 🔧 Key Components Explained

### PublicView Component
**Purpose**: Main interface visible to end users
**Features**:
- Dynamic background color based on current score
- Real-time score display with large, readable typography
- Scrollable history of score changes with visual indicators
- Floating action button for admin access

**Technical Details**:
- Uses `useApp` hook for state management
- Implements responsive design with Ant Design Grid system
- Color-coded score ranges: Green (80+), Blue (40-80), Red (<40)
- Automatic timestamp formatting with dayjs library

### AdminView Component
**Purpose**: Secure administrative interface
**Features**:
- Tabbed interface for different admin functions
- Real-time score overview with status indicators
- Quick logout functionality with confirmation
- Responsive layout for mobile and desktop

**Technical Details**:
- Protected route requiring password authentication
- Dynamic tab content loading for performance
- Context-aware styling based on current score status

### QuickActions Component
**Purpose**: Rapid score adjustment interface
**Features**:
- Predefined reward and punishment buttons
- Custom score input with validation
- Real-time preview of changes
- Batch operations support

**Technical Details**:
- Form validation with Ant Design Form components
- Optimistic UI updates for better user experience
- Error handling with user-friendly messages

### StatisticsPanel Component
**Purpose**: Data visualization and analytics
**Features**:
- Multiple chart types (line, bar, pie)
- Flexible time range selection
- Key performance indicators
- Export capabilities (future enhancement)

**Technical Details**:
- Memoized calculations for performance optimization
- Dynamic chart configuration based on data
- Responsive chart sizing for different screen sizes

## 🔄 State Management

### Context Structure
```typescript
interface AppState {
  isAdminMode: boolean;          // Authentication state
  currentScore: number;          // Real-time score value
  scoreRecords: ScoreRecord[];   // Historical data
  settings: SystemSettings;      // Configuration
  statistics: Statistics;        // Computed analytics
  loading: boolean;             // UI loading state
  error: string | null;         // Error handling
}
```

### Action Types
- `SET_ADMIN_MODE`: Toggle admin interface access
- `SET_CURRENT_SCORE`: Update displayed score
- `SET_SCORE_RECORDS`: Bulk update historical data
- `ADD_SCORE_RECORD`: Add single new record
- `SET_SETTINGS`: Update system configuration
- `SET_STATISTICS`: Update computed analytics
- `SET_LOADING`: Control loading indicators
- `SET_ERROR`: Handle error states

## 🔥 Firebase Integration

### Firestore Collections
```typescript
// Score records collection
scoreRecords: {
  id: string;
  score: number;        // Positive for rewards, negative for punishments
  reason: string;       // Human-readable explanation
  timestamp: Timestamp; // When the change occurred
  type: 'reward' | 'punishment';
}

// System settings collection
settings: {
  id: 'main';          // Single document for all settings
  initialScore: number;
  dailyIncrement: number;
  notificationThreshold: number;
  adminPassword: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

// Daily score snapshots (for analytics)
dailyScores: {
  id: string;          // Date in YYYY-MM-DD format
  date: string;
  totalScore: number;
  dailyChange: number;
  rewardCount: number;
  punishmentCount: number;
  autoIncrement: number;
}
```

### Security Rules
The Firestore security rules are designed for a personal project:
- **Read Access**: Public for score display
- **Write Access**: Unrestricted for simplicity (suitable for personal use)
- **Production Consideration**: Implement proper authentication for public deployment

### Cloud Functions
- **dailyScoreIncrement**: Scheduled function running daily at midnight
- **triggerDailyIncrement**: HTTP function for manual score increments
- **getStatistics**: Optimized statistics computation on server-side

## 🚀 Build and Deployment

### Development Build
```bash
npm run dev          # Start development server
npm run build        # Create production build
npm run preview      # Preview production build locally
npm run lint         # Run ESLint checks
```

### Production Deployment
```bash
# Method 1: Using deployment script
npm run deploy

# Method 2: Using gh-pages package
npm run deploy:gh-pages

# Method 3: Manual deployment
npm run build
# Upload dist/ contents to hosting provider
```

### GitHub Pages Configuration
1. Build the project: `npm run build`
2. Deploy to gh-pages branch: `npm run deploy:gh-pages`
3. Configure GitHub repository settings:
   - Go to Settings > Pages
   - Select "Deploy from a branch"
   - Choose "gh-pages" branch
   - Set folder to "/ (root)"

### Environment Variables
For different deployment environments, update `vite.config.ts`:
```typescript
base: process.env.NODE_ENV === 'production' ? '/BehaviorMonitor/' : '/'
```

## 🧪 Testing Strategy

### Manual Testing Checklist
- [ ] Public view displays correct score
- [ ] Admin login works with correct password
- [ ] Score adjustments reflect immediately
- [ ] Charts display accurate data
- [ ] Settings save and persist
- [ ] Responsive design works on mobile
- [ ] Error handling displays user-friendly messages

### Future Testing Enhancements
- Unit tests with Jest and React Testing Library
- Integration tests for Firebase operations
- E2E tests with Playwright
- Performance testing with Lighthouse

## 🔧 Troubleshooting

### Common Issues
1. **Firebase Connection Errors**
   - Verify Firebase configuration in `src/config/firebase.ts`
   - Check Firestore security rules
   - Ensure Firebase project is active

2. **Build Failures**
   - Run `npm install` to ensure dependencies are current
   - Check TypeScript errors with `npm run build`
   - Verify all imports are correctly typed

3. **Deployment Issues**
   - Confirm GitHub Pages is enabled in repository settings
   - Check that base URL in `vite.config.ts` matches repository name
   - Verify build artifacts are correctly generated

### Performance Optimization
- Implement code splitting for large components
- Use React.memo for expensive computations
- Optimize Firebase queries with proper indexing
- Implement service worker for offline functionality

## 📈 Future Enhancements

### Planned Features
- [ ] User authentication with Firebase Auth
- [ ] Multi-user support with role-based access
- [ ] Data export functionality (CSV, JSON)
- [ ] Push notifications for score thresholds
- [ ] Advanced analytics with trend predictions
- [ ] Mobile app with React Native
- [ ] API endpoints for third-party integrations

### Technical Improvements
- [ ] Implement proper error boundaries
- [ ] Add comprehensive test coverage
- [ ] Set up automated CI/CD pipeline
- [ ] Implement proper logging and monitoring
- [ ] Add internationalization (i18n) support
- [ ] Optimize bundle size with dynamic imports
