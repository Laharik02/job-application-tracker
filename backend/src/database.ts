import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export interface Job {
  id?: number;
  title: string;
  company: string;
  location: string;
  jobPortalLink: string;
  datePosted: string;
  experienceLevel: string;
  jobType: 'Data Engineer' | 'Machine Learning Engineer' | 'AI Engineer' | 'Software Engineer' | 'Other';
  applicationSubmitted: boolean;
  interviewScheduled: boolean;
  jobOffered: boolean;
  notes: string;
  qualifications: string;
  techSkills: string;
  salary?: string;
  dateApplied?: string;
  interviewDate?: string;
  status: 'pending' | 'applied' | 'interview' | 'offered' | 'rejected';
}

export interface TechSkill {
  id?: number;
  name: string;
  category: string;
  priority: 'high' | 'medium' | 'low';
  proficiency: number; // 1-10 scale
}

class Database {
  private db: any = null;

  async init() {
    this.db = await open({
      filename: './job_tracker.db',
      driver: sqlite3.Database
    });

    await this.createTables();
  }

  private async createTables() {
    await this.db.exec(`
      CREATE TABLE IF NOT EXISTS jobs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        company TEXT NOT NULL,
        location TEXT NOT NULL,
        jobPortalLink TEXT NOT NULL,
        datePosted TEXT NOT NULL,
        experienceLevel TEXT NOT NULL,
        jobType TEXT NOT NULL,
        applicationSubmitted BOOLEAN DEFAULT FALSE,
        interviewScheduled BOOLEAN DEFAULT FALSE,
        jobOffered BOOLEAN DEFAULT FALSE,
        notes TEXT DEFAULT '',
        qualifications TEXT DEFAULT '',
        techSkills TEXT DEFAULT '',
        salary TEXT DEFAULT '',
        dateApplied TEXT DEFAULT '',
        interviewDate TEXT DEFAULT '',
        status TEXT DEFAULT 'pending'
      )
    `);

    await this.db.exec(`
      CREATE TABLE IF NOT EXISTS tech_skills (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL UNIQUE,
        category TEXT NOT NULL,
        priority TEXT NOT NULL,
        proficiency INTEGER NOT NULL
      )
    `);

    // Insert some default tech skills
    await this.insertDefaultTechSkills();
  }

  private async insertDefaultTechSkills() {
    const defaultSkills = [
      // Programming Languages
      { name: 'Python', category: 'Programming Languages', priority: 'high', proficiency: 8 },
      { name: 'SQL', category: 'Programming Languages', priority: 'high', proficiency: 8 },
      { name: 'R', category: 'Programming Languages', priority: 'medium', proficiency: 6 },
      { name: 'Java', category: 'Programming Languages', priority: 'medium', proficiency: 7 },
      { name: 'Scala', category: 'Programming Languages', priority: 'low', proficiency: 5 },

      // Machine Learning & AI
      { name: 'TensorFlow', category: 'ML/AI Frameworks', priority: 'high', proficiency: 7 },
      { name: 'PyTorch', category: 'ML/AI Frameworks', priority: 'high', proficiency: 7 },
      { name: 'Scikit-learn', category: 'ML/AI Frameworks', priority: 'high', proficiency: 8 },
      { name: 'Pandas', category: 'Data Analysis', priority: 'high', proficiency: 9 },
      { name: 'NumPy', category: 'Data Analysis', priority: 'high', proficiency: 8 },

      // Big Data & Cloud
      { name: 'Apache Spark', category: 'Big Data', priority: 'high', proficiency: 7 },
      { name: 'Hadoop', category: 'Big Data', priority: 'medium', proficiency: 6 },
      { name: 'Kafka', category: 'Big Data', priority: 'medium', proficiency: 6 },
      { name: 'AWS', category: 'Cloud Platforms', priority: 'high', proficiency: 7 },
      { name: 'Azure', category: 'Cloud Platforms', priority: 'medium', proficiency: 6 },
      { name: 'GCP', category: 'Cloud Platforms', priority: 'medium', proficiency: 6 },

      // Databases
      { name: 'PostgreSQL', category: 'Databases', priority: 'high', proficiency: 8 },
      { name: 'MongoDB', category: 'Databases', priority: 'medium', proficiency: 7 },
      { name: 'Redis', category: 'Databases', priority: 'medium', proficiency: 6 },
      { name: 'Elasticsearch', category: 'Databases', priority: 'low', proficiency: 5 },

      // DevOps & Tools
      { name: 'Docker', category: 'DevOps', priority: 'high', proficiency: 7 },
      { name: 'Kubernetes', category: 'DevOps', priority: 'medium', proficiency: 6 },
      { name: 'Git', category: 'Version Control', priority: 'high', proficiency: 9 },
      { name: 'Jenkins', category: 'DevOps', priority: 'low', proficiency: 5 }
    ];

    for (const skill of defaultSkills) {
      await this.db.run(`
        INSERT OR IGNORE INTO tech_skills (name, category, priority, proficiency)
        VALUES (?, ?, ?, ?)
      `, [skill.name, skill.category, skill.priority, skill.proficiency]);
    }
  }

  async getAllJobs(): Promise<Job[]> {
    return await this.db.all('SELECT * FROM jobs ORDER BY datePosted DESC');
  }

  async getJobById(id: number): Promise<Job | undefined> {
    return await this.db.get('SELECT * FROM jobs WHERE id = ?', [id]);
  }

  async addJob(job: Omit<Job, 'id'>): Promise<number> {
    const result = await this.db.run(`
      INSERT INTO jobs (title, company, location, jobPortalLink, datePosted, experienceLevel,
                       jobType, applicationSubmitted, interviewScheduled, jobOffered, notes,
                       qualifications, techSkills, salary, dateApplied, interviewDate, status)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [
      job.title, job.company, job.location, job.jobPortalLink, job.datePosted,
      job.experienceLevel, job.jobType, job.applicationSubmitted, job.interviewScheduled,
      job.jobOffered, job.notes, job.qualifications, job.techSkills, job.salary,
      job.dateApplied, job.interviewDate, job.status
    ]);
    return result.lastID;
  }

  async updateJob(id: number, job: Partial<Job>): Promise<boolean> {
    const fields = [];
    const values = [];

    for (const [key, value] of Object.entries(job)) {
      if (key !== 'id') {
        fields.push(`${key} = ?`);
        values.push(value);
      }
    }

    values.push(id);

    const result = await this.db.run(
      `UPDATE jobs SET ${fields.join(', ')} WHERE id = ?`,
      values
    );

    return result.changes > 0;
  }

  async deleteJob(id: number): Promise<boolean> {
    const result = await this.db.run('DELETE FROM jobs WHERE id = ?', [id]);
    return result.changes > 0;
  }

  async getTechSkills(): Promise<TechSkill[]> {
    return await this.db.all('SELECT * FROM tech_skills ORDER BY priority DESC, proficiency DESC');
  }

  async updateTechSkill(id: number, skill: Partial<TechSkill>): Promise<boolean> {
    const fields = [];
    const values = [];

    for (const [key, value] of Object.entries(skill)) {
      if (key !== 'id') {
        fields.push(`${key} = ?`);
        values.push(value);
      }
    }

    values.push(id);

    const result = await this.db.run(
      `UPDATE tech_skills SET ${fields.join(', ')} WHERE id = ?`,
      values
    );

    return result.changes > 0;
  }

  async getJobsByDateRange(startDate: string, endDate: string): Promise<Job[]> {
    return await this.db.all(
      'SELECT * FROM jobs WHERE datePosted >= ? AND datePosted <= ? ORDER BY datePosted DESC',
      [startDate, endDate]
    );
  }

  async getJobStats() {
    const stats = await this.db.get(`
      SELECT
        COUNT(*) as total,
        SUM(CASE WHEN applicationSubmitted = 1 THEN 1 ELSE 0 END) as applied,
        SUM(CASE WHEN interviewScheduled = 1 THEN 1 ELSE 0 END) as interviews,
        SUM(CASE WHEN jobOffered = 1 THEN 1 ELSE 0 END) as offers
      FROM jobs
    `);
    return stats;
  }
}

export default Database;