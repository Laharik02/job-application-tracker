# Job Application Tracker

A comprehensive web application to help you manage and track job applications efficiently. Designed to help you apply to 100+ jobs per week while staying organized and prepared for interviews.

## Features

### Job Application Management
- Track job applications with status toggles (Applied, Interview Scheduled, Job Offered)
- Store job details: title, company, location, salary, job portal links
- Filter and search jobs by status, type, company, and title
- Daily job posting tracking to meet weekly goals

### Statistics & Progress Tracking
- Real-time statistics dashboard showing application rates and success metrics
- Weekly goal tracking (100 jobs/week target)
- Interview and offer conversion rates
- Daily job posting counters

### Smart Resume & Interview Preparation
- Track key qualifications for each position
- Required tech skills tracking for tailored applications
- Side panel with tech skills proficiency ratings
- Priority-based skill improvement recommendations
- Notes system for interview preparation and follow-ups

### Targeted Job Types
- Data Engineer positions
- Machine Learning Engineer roles
- AI Engineer opportunities
- Other related technical positions
- Experience level filtering (2-3 years focus)

## Tech Stack

**Frontend:**
- React 18 with TypeScript
- Modern CSS with responsive design
- Component-based architecture

**Backend:**
- Node.js with Express
- TypeScript for type safety
- RESTful API design

**Database:**
- SQLite for local development
- Structured schema for jobs and tech skills

## Quick Start

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd job-tracker-app
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Start the backend server**
   ```bash
   cd ../backend
   npm run dev
   ```
   The backend will run on http://localhost:5000

5. **Start the frontend development server**
   ```bash
   cd ../frontend
   npm start
   ```
   The frontend will run on http://localhost:3000

## Usage Guide

### Adding Jobs
1. Click "Add New Job" in the header
2. Fill in job details including title, company, location, and job portal link
3. Add key qualifications and required tech skills
4. Set experience level and job type
5. Save the job to your tracking list

### Managing Applications
- Use checkboxes to mark: Application Submitted, Interview Scheduled, Job Offered
- Edit job details anytime by clicking the "Edit" button
- Add notes for interview preparation and follow-up reminders
- Delete jobs that are no longer relevant

### Tech Skills Preparation
- View your tech skills in the right sidebar
- Update proficiency levels (1-10 scale) by clicking on skill values
- Toggle priority levels (High/Medium/Low) for focused learning
- Review skill improvement recommendations
- Filter skills by priority level

### Tracking Progress
- Monitor daily job posting goals
- View application success rates
- Track interview conversion rates
- Set weekly targets and monitor progress

## Database Schema

### Jobs Table
- Job details (title, company, location, link, dates)
- Application status tracking
- Qualifications and tech skills requirements
- Personal notes and preparation materials

### Tech Skills Table
- Skill name and category
- Priority level (high/medium/low)
- Current proficiency (1-10 scale)
- Pre-populated with industry-standard skills

## Customization

### Adding New Tech Skills
The system comes pre-loaded with common skills for Data/ML/AI engineering roles:
- Programming: Python, SQL, Java, Scala, R
- ML/AI: TensorFlow, PyTorch, Scikit-learn
- Big Data: Apache Spark, Hadoop, Kafka
- Cloud: AWS, Azure, GCP
- Databases: PostgreSQL, MongoDB, Redis

### Modifying Job Types
Update the job type options in:
- `frontend/src/types/index.ts`
- `backend/src/database.ts`
- Frontend component dropdowns

## API Endpoints

- `GET /api/jobs` - Get all jobs
- `POST /api/jobs` - Create new job
- `PUT /api/jobs/:id` - Update job
- `DELETE /api/jobs/:id` - Delete job
- `GET /api/tech-skills` - Get tech skills
- `PUT /api/tech-skills/:id` - Update tech skill
- `GET /api/stats` - Get application statistics
- `GET /api/jobs/today` - Get today's job postings

## Development

### Backend Development
```bash
cd backend
npm run dev  # Start with nodemon for auto-reload
npm run build  # Compile TypeScript
npm start  # Run compiled version
```

### Frontend Development
```bash
cd frontend
npm start  # Start development server
npm run build  # Build for production
npm test  # Run tests
```

## Contributing

This application is designed as a personal job tracking tool but can be extended with:
- Job board API integrations
- Email notifications and reminders
- Export functionality (PDF reports, CSV data)
- Calendar integration for interview scheduling
- Company research notes and links
- Salary negotiation tracking

## License

This project is open source and available under the MIT License.

---

**Goal**: Apply to 100 jobs per week systematically while maintaining high application quality and interview readiness. Good luck with your job search! 🚀
