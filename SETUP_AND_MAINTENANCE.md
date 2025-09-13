# Job Tracker App - Setup & Maintenance Guide

## 🚀 Quick Start (Current Status)

**Both servers are currently running:**
- ✅ Backend: http://localhost:5000 (API server)
- ✅ Frontend: http://localhost:3000 (Web interface)

**To access your application:**
1. Open your browser
2. Navigate to: `http://localhost:3000`
3. Start tracking job applications!

---

## 🔄 Daily Usage Instructions

### Starting the Application (Fresh Start)

**Option 1: Manual Start (Recommended for learning)**
```bash
# Terminal 1 - Start Backend
cd job-tracker-app/backend
npm run dev

# Terminal 2 - Start Frontend (in a new terminal)
cd job-tracker-app/frontend
npm start
```

**Option 2: Quick Start Scripts**
Create these batch files in your `job-tracker-app` folder:

**`start-app.bat`** (Windows):
```batch
@echo off
echo Starting Job Tracker Application...
start cmd /k "cd backend && npm run dev"
start cmd /k "cd frontend && npm start"
echo Both servers starting... Frontend will open in browser automatically.
pause
```

**`start-app.sh`** (Mac/Linux):
```bash
#!/bin/bash
echo "Starting Job Tracker Application..."
cd backend && npm run dev &
cd ../frontend && npm start &
wait
```

### Stopping the Application
- Press `Ctrl+C` in each terminal window
- Or close the terminal windows

---

## 📊 Application Access Points

| Service | URL | Purpose |
|---------|-----|---------|
| **Web App** | http://localhost:3000 | Main application interface |
| **API** | http://localhost:5000/api | Backend API (for development) |
| **Database** | `backend/job_tracker.db` | SQLite database file |

---

## 💾 Data Management

### Database Location
Your job data is stored in: `job-tracker-app/backend/job_tracker.db`

**Important:** This file contains all your job applications and tech skills data. Back it up regularly!

### Backup Your Data
```bash
# Create backup
cp backend/job_tracker.db backup/job_tracker_backup_2024-01-01.db

# Restore from backup
cp backup/job_tracker_backup_2024-01-01.db backend/job_tracker.db
```

### Reset Database (Fresh Start)
```bash
# Stop the backend server first, then:
rm backend/job_tracker.db
# Restart backend - database will be recreated with default tech skills
```

---

## 🛠 Maintenance Tasks

### Weekly Maintenance
1. **Backup your database**
2. **Update dependencies** (monthly):
   ```bash
   cd backend && npm update
   cd ../frontend && npm update
   ```

### Monthly Maintenance
1. **Clean up old job entries** (optional)
2. **Review and update tech skills priorities**
3. **Check for application updates**

---

## 🔧 Common Issues & Solutions

### Frontend Won't Start
```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
npm start
```

### Backend Won't Start
```bash
cd backend
rm -rf node_modules package-lock.json
npm install
npm run build
npm run dev
```

### Port Already in Use
If you get "port already in use" errors:
```bash
# Kill processes on ports 3000 and 5000
npx kill-port 3000
npx kill-port 5000
```

### Database Issues
```bash
# Check if database file exists
ls backend/job_tracker.db

# If corrupt, delete and restart backend to recreate
rm backend/job_tracker.db
```

---

## 📈 Scaling & Improvements

### Adding New Features
The application is built modularly. To add features:

1. **Backend**: Add new routes in `backend/src/server.ts`
2. **Database**: Modify schema in `backend/src/database.ts`
3. **Frontend**: Add new components in `frontend/src/components/`

### Performance Optimization
- **Database**: Consider switching to PostgreSQL for large datasets
- **Frontend**: Implement pagination for 1000+ jobs
- **Backend**: Add caching for frequent queries

### Production Deployment
For hosting this application online:

1. **Frontend**: `npm run build` → Deploy to Netlify/Vercel
2. **Backend**: Deploy to Heroku/Railway/DigitalOcean
3. **Database**: Upgrade to PostgreSQL/MySQL

---

## 📁 Project Structure Reference

```
job-tracker-app/
├── backend/                 # API Server
│   ├── src/
│   │   ├── server.ts       # Main server file
│   │   └── database.ts     # Database operations
│   ├── dist/              # Compiled TypeScript
│   └── job_tracker.db     # SQLite database
├── frontend/              # React Web App
│   ├── src/
│   │   ├── components/    # UI components
│   │   ├── services/      # API calls
│   │   └── types/         # TypeScript types
│   └── build/            # Production build
└── README.md             # Project documentation
```

---

## 🎯 Usage Tips for Job Hunting

### Daily Workflow
1. **Morning**: Check today's job postings count
2. **Add Jobs**: Aim for 20+ jobs per day (100/week goal)
3. **Evening**: Update application statuses
4. **Weekly**: Review conversion rates and adjust strategy

### Data Entry Best Practices
- **Copy-paste** job descriptions into qualifications field
- **Extract tech skills** from job requirements
- **Add personal notes** for each application
- **Update status immediately** after each action

### Tech Skills Management
- **High Priority**: Skills mentioned in 70%+ of target jobs
- **Medium Priority**: Nice-to-have skills for advancement
- **Low Priority**: Emerging technologies to learn eventually

---

## 🚨 Troubleshooting Checklist

**If the app doesn't work:**
1. ✅ Is Node.js installed? (`node --version`)
2. ✅ Are both servers running?
3. ✅ Is port 3000 and 5000 available?
4. ✅ Check browser console for errors (F12)
5. ✅ Try restarting both servers
6. ✅ Check if database file exists

**For urgent issues:**
1. Backup your database file first
2. Try the "Fresh Start" commands above
3. If data is lost, restore from backup

---

## 📞 Support & Updates

This application is designed to be self-contained and work offline. No external dependencies or accounts required.

**For updates and improvements:**
- Modify the code directly
- The application will auto-reload during development
- Use version control (git) to track your changes

**Remember**: Your job search data is private and stored locally on your machine!