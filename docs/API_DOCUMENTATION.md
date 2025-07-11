# Behavior Monitor - API Documentation

## 📡 API Overview

The Behavior Monitor application uses Firebase Cloud Functions to provide server-side functionality. This document outlines the available API endpoints, their usage, and implementation details.

## 🔧 Base Configuration

### Function Deployment Region
- **Region**: us-central1 (default)
- **Runtime**: Node.js 18
- **Timeout**: 60 seconds (configurable per function)

### Authentication
Most functions use simple password-based authentication via the `Authorization` header:
```
Authorization: Bearer <admin_password>
```

## 🕒 Scheduled Functions

### dailyScoreIncrement
**Type**: Scheduled Function  
**Schedule**: `0 0 * * *` (Daily at midnight, Asia/Taipei timezone)  
**Purpose**: Automatically increment user score based on system settings

#### Behavior
1. Retrieves system settings from Firestore
2. Checks if daily increment is configured (> 0)
3. Verifies if increment has already been applied today
4. Creates a new score record with type 'reward'
5. Updates or creates daily score snapshot

#### Error Handling
- Logs errors to Cloud Functions console
- Gracefully handles missing settings
- Prevents duplicate increments on the same day

#### Example Log Output
```
開始執行每日分數增加任務
成功執行每日分數增加：+1 分
```

## 🌐 HTTP Functions

### triggerDailyIncrement
**Method**: POST  
**URL**: `https://us-central1-<project-id>.cloudfunctions.net/triggerDailyIncrement`  
**Authentication**: Required (Bearer token)

#### Purpose
Manually trigger daily score increment for testing or administrative purposes.

#### Request Headers
```http
Authorization: Bearer <admin_password>
Content-Type: application/json
```

#### Request Body
No body required.

#### Response Format
**Success (200)**:
```json
{
  "message": "成功增加 1 分",
  "recordId": "abc123def456"
}
```

**No Increment Needed (200)**:
```json
{
  "message": "每日增加分數為 0，無需執行"
}
```

**Authentication Error (401)**:
```json
{
  "error": "未授權的請求"
}
```

**Password Error (401)**:
```json
{
  "error": "密碼錯誤"
}
```

**System Error (500)**:
```json
{
  "error": "系統設定不存在"
}
```

#### Usage Example
```javascript
// Using fetch API
const response = await fetch(
  'https://us-central1-behaviormonitor-36a53.cloudfunctions.net/triggerDailyIncrement',
  {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer admin123',
      'Content-Type': 'application/json'
    }
  }
);

const result = await response.json();
console.log(result);
```

```bash
# Using curl
curl -X POST \
  -H "Authorization: Bearer admin123" \
  -H "Content-Type: application/json" \
  https://us-central1-behaviormonitor-36a53.cloudfunctions.net/triggerDailyIncrement
```

### getStatistics
**Method**: GET  
**URL**: `https://us-central1-<project-id>.cloudfunctions.net/getStatistics`  
**Authentication**: Not required (public endpoint)

#### Purpose
Retrieve computed statistics for the application, optimized for performance by running calculations server-side.

#### Request Headers
```http
Content-Type: application/json
```

#### Response Format
**Success (200)**:
```json
{
  "totalScore": 85,
  "recordCount": 42,
  "rewardCount": 28,
  "punishmentCount": 14,
  "rewardSum": 140,
  "punishmentSum": -55,
  "averageScore": 2.02,
  "lastUpdated": "2024-01-15T10:30:00.000Z"
}
```

**No Data (200)**:
```json
{
  "totalScore": 0,
  "recordCount": 0,
  "rewardCount": 0,
  "punishmentCount": 0
}
```

**Server Error (500)**:
```json
{
  "error": "獲取統計資料失敗"
}
```

#### Usage Example
```javascript
// Using fetch API
const response = await fetch(
  'https://us-central1-behaviormonitor-36a53.cloudfunctions.net/getStatistics'
);

const statistics = await response.json();
console.log('Current Statistics:', statistics);
```

```bash
# Using curl
curl https://us-central1-behaviormonitor-36a53.cloudfunctions.net/getStatistics
```

## 🔥 Firestore Direct Operations

### Collections Structure

#### scoreRecords Collection
**Path**: `/scoreRecords/{recordId}`

**Document Structure**:
```typescript
{
  score: number;           // Positive for rewards, negative for punishments
  reason: string;          // Human-readable explanation
  timestamp: Timestamp;    // When the record was created
  type: 'reward' | 'punishment';
}
```

**Indexes**:
- `timestamp` (descending) - for chronological queries
- `type, timestamp` (compound) - for filtered queries

#### settings Collection
**Path**: `/settings/main`

**Document Structure**:
```typescript
{
  initialScore: number;          // Starting score for new users
  dailyIncrement: number;        // Daily automatic increment
  notificationThreshold: number; // Alert threshold
  adminPassword: string;         // Admin authentication
  createdAt: Timestamp;         // Document creation time
  updatedAt: Timestamp;         // Last modification time
}
```

#### dailyScores Collection
**Path**: `/dailyScores/{YYYY-MM-DD}`

**Document Structure**:
```typescript
{
  date: string;           // YYYY-MM-DD format
  totalScore: number;     // End-of-day total score
  dailyChange: number;    // Net change for the day
  rewardCount: number;    // Number of rewards given
  punishmentCount: number; // Number of punishments given
  autoIncrement: number;  // Automatic increment applied
}
```

## 🔒 Security Considerations

### Current Security Model
- **Public Read Access**: All collections allow public read access for the public view
- **Unrestricted Write Access**: Suitable for personal/family use
- **Simple Authentication**: Password-based admin access

### Production Security Recommendations
For public deployment, consider implementing:

1. **Firebase Authentication**:
```javascript
// Example: Restrict writes to authenticated users
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /scoreRecords/{document} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

2. **Role-Based Access Control**:
```javascript
// Example: Admin-only writes
match /settings/{document} {
  allow read: if true;
  allow write: if request.auth != null && 
    get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
}
```

3. **Rate Limiting**:
```javascript
// Example: Limit score record creation
match /scoreRecords/{document} {
  allow create: if request.auth != null && 
    request.time > resource.data.timestamp + duration.value(1, 'm');
}
```

## 🚀 Deployment Instructions

### Prerequisites
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize project (if not already done)
firebase init functions
```

### Function Deployment
```bash
# Deploy all functions
firebase deploy --only functions

# Deploy specific function
firebase deploy --only functions:dailyScoreIncrement

# Deploy with specific region
firebase deploy --only functions --project production
```

### Environment Configuration
```bash
# Set environment variables
firebase functions:config:set admin.password="your-secure-password"

# View current config
firebase functions:config:get
```

## 📊 Monitoring and Logging

### Cloud Functions Logs
```bash
# View function logs
firebase functions:log

# View specific function logs
firebase functions:log --only dailyScoreIncrement

# Follow logs in real-time
firebase functions:log --follow
```

### Performance Monitoring
- **Execution Time**: Monitor function duration in Firebase Console
- **Memory Usage**: Track memory consumption for optimization
- **Error Rate**: Monitor failed executions and error patterns
- **Invocation Count**: Track usage patterns and scaling needs

### Custom Logging
```javascript
// In function code
import { logger } from 'firebase-functions';

export const myFunction = onRequest(async (req, res) => {
  logger.info('Function started', { userId: req.body.userId });
  
  try {
    // Function logic
    logger.info('Operation completed successfully');
  } catch (error) {
    logger.error('Function failed', { error: error.message });
    throw error;
  }
});
```

## 🔧 Testing Functions

### Local Testing
```bash
# Start Firebase emulators
firebase emulators:start --only functions,firestore

# Test HTTP functions locally
curl http://localhost:5001/your-project/us-central1/getStatistics
```

### Unit Testing
```javascript
// Example test with Jest
import { getStatistics } from '../src/index';

describe('getStatistics', () => {
  test('should return statistics', async () => {
    const req = {};
    const res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis()
    };
    
    await getStatistics(req, res);
    
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        totalScore: expect.any(Number),
        recordCount: expect.any(Number)
      })
    );
  });
});
```

## 📈 Future API Enhancements

### Planned Endpoints
- `POST /api/scores` - Create new score record with validation
- `GET /api/scores?limit=20&offset=0` - Paginated score retrieval
- `PUT /api/settings` - Update system settings with validation
- `GET /api/analytics/trends` - Advanced trend analysis
- `POST /api/export` - Data export functionality
- `GET /api/health` - System health check endpoint

### Webhook Support
- Score threshold notifications
- Daily summary reports
- Integration with external systems (Slack, Discord, etc.)

### GraphQL API
Consider implementing GraphQL for more flexible data querying:
```graphql
type Query {
  scores(limit: Int, offset: Int, type: ScoreType): [ScoreRecord]
  statistics(timeRange: TimeRange): Statistics
  settings: SystemSettings
}

type Mutation {
  addScore(input: AddScoreInput!): ScoreRecord
  updateSettings(input: UpdateSettingsInput!): SystemSettings
}
```
