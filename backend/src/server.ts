import express from 'express';
import cors from 'cors';
import Database, { Job, TechSkill } from './database';

const app = express();
const PORT = process.env.PORT || 5000;
const database = new Database();

app.use(cors());
app.use(express.json());

// Initialize database
database.init().then(() => {
  console.log('Database initialized successfully');
}).catch(err => {
  console.error('Failed to initialize database:', err);
});

// Job routes
app.get('/api/jobs', async (req, res) => {
  try {
    const jobs = await database.getAllJobs();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch jobs' });
  }
});

app.get('/api/jobs/:id', async (req, res) => {
  try {
    const job = await database.getJobById(parseInt(req.params.id));
    if (!job) {
      return res.status(404).json({ error: 'Job not found' });
    }
    res.json(job);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch job' });
  }
});

app.post('/api/jobs', async (req, res) => {
  try {
    const jobData: Omit<Job, 'id'> = {
      title: req.body.title,
      company: req.body.company,
      location: req.body.location,
      jobPortalLink: req.body.jobPortalLink,
      datePosted: req.body.datePosted,
      experienceLevel: req.body.experienceLevel,
      jobType: req.body.jobType,
      applicationSubmitted: req.body.applicationSubmitted || false,
      interviewScheduled: req.body.interviewScheduled || false,
      jobOffered: req.body.jobOffered || false,
      notes: req.body.notes || '',
      qualifications: req.body.qualifications || '',
      techSkills: req.body.techSkills || '',
      salary: req.body.salary || '',
      dateApplied: req.body.dateApplied || '',
      interviewDate: req.body.interviewDate || '',
      status: req.body.status || 'pending'
    };

    const jobId = await database.addJob(jobData);
    const newJob = await database.getJobById(jobId);
    res.status(201).json(newJob);
  } catch (error) {
    console.error('Error creating job:', error);
    res.status(500).json({ error: 'Failed to create job' });
  }
});

app.put('/api/jobs/:id', async (req, res) => {
  try {
    const jobId = parseInt(req.params.id);
    const success = await database.updateJob(jobId, req.body);

    if (!success) {
      return res.status(404).json({ error: 'Job not found' });
    }

    const updatedJob = await database.getJobById(jobId);
    res.json(updatedJob);
  } catch (error) {
    console.error('Error updating job:', error);
    res.status(500).json({ error: 'Failed to update job' });
  }
});

app.delete('/api/jobs/:id', async (req, res) => {
  try {
    const success = await database.deleteJob(parseInt(req.params.id));
    if (!success) {
      return res.status(404).json({ error: 'Job not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete job' });
  }
});

// Tech skills routes
app.get('/api/tech-skills', async (req, res) => {
  try {
    const skills = await database.getTechSkills();
    res.json(skills);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch tech skills' });
  }
});

app.put('/api/tech-skills/:id', async (req, res) => {
  try {
    const skillId = parseInt(req.params.id);
    const success = await database.updateTechSkill(skillId, req.body);

    if (!success) {
      return res.status(404).json({ error: 'Tech skill not found' });
    }

    res.json({ message: 'Tech skill updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update tech skill' });
  }
});

// Statistics route
app.get('/api/stats', async (req, res) => {
  try {
    const stats = await database.getJobStats();
    res.json(stats);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch statistics' });
  }
});

// Jobs by date range
app.get('/api/jobs/date-range/:startDate/:endDate', async (req, res) => {
  try {
    const { startDate, endDate } = req.params;
    const jobs = await database.getJobsByDateRange(startDate, endDate);
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch jobs by date range' });
  }
});

// Get today's jobs
app.get('/api/jobs/today', async (req, res) => {
  try {
    const today = new Date().toISOString().split('T')[0];
    const jobs = await database.getJobsByDateRange(today, today);
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch today\'s jobs' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});