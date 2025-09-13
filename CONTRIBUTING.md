# Contributing to Job Tracker App

Thank you for considering contributing to the Job Tracker App! This application was designed to help job seekers efficiently manage their applications and reach their goals.

## Getting Started

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager
- Basic knowledge of React and TypeScript

### Development Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/yourusername/job-tracker-app.git
   cd job-tracker-app
   ```

3. Install dependencies:
   ```bash
   # Backend
   cd backend
   npm install

   # Frontend
   cd ../frontend
   npm install
   ```

4. Start development servers:
   ```bash
   # Terminal 1 - Backend
   cd backend && npm run dev

   # Terminal 2 - Frontend
   cd frontend && npm start
   ```

## Project Structure

```
job-tracker-app/
├── backend/                 # Node.js + Express API
│   ├── src/
│   │   ├── server.ts       # Main server
│   │   └── database.ts     # Database operations
├── frontend/               # React + TypeScript UI
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── services/       # API integration
│   │   └── types/          # TypeScript definitions
```

## How to Contribute

### Feature Requests
- Open an issue describing the feature
- Include use cases and potential implementation ideas
- Wait for discussion before starting development

### Bug Reports
- Use the issue template
- Include steps to reproduce
- Provide system information

### Pull Requests
1. Create a feature branch: `git checkout -b feature/amazing-feature`
2. Make your changes
3. Add tests if applicable
4. Update documentation
5. Commit with clear messages: `git commit -m "Add amazing feature"`
6. Push to your fork: `git push origin feature/amazing-feature`
7. Open a Pull Request

## Coding Standards

### TypeScript/JavaScript
- Use TypeScript for all new code
- Follow existing code style
- Use meaningful variable names
- Add JSDoc comments for complex functions

### React Components
- Use functional components with hooks
- Keep components small and focused
- Use TypeScript interfaces for props
- Follow existing naming conventions

### Database
- Use migrations for schema changes
- Write efficient queries
- Maintain data consistency

## Testing
- Write tests for new features
- Ensure existing tests pass
- Test manually in both development and production builds

## Areas for Contribution

### High Priority
- [ ] Job board API integrations (Indeed, LinkedIn, etc.)
- [ ] Export functionality (PDF reports, CSV)
- [ ] Email notifications and reminders
- [ ] Mobile responsive improvements

### Medium Priority
- [ ] Calendar integration for interviews
- [ ] Company research tracking
- [ ] Salary negotiation tracking
- [ ] Interview question preparation

### Low Priority
- [ ] Dark mode theme
- [ ] Keyboard shortcuts
- [ ] Advanced analytics and charts
- [ ] Team collaboration features

## Questions?

Feel free to open an issue for any questions about contributing. We're here to help!