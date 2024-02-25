import request from 'supertest';
import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import * as dotenv from 'dotenv';
import { Server } from 'http';

dotenv.config();

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

app.get('/students', async (req: Request, res: Response) => {
  const students = await prisma.student.findMany();
  res.json(students);
});

// ... (other routes)

const closeServerAndDbConnection = async (server: Server) => {
  await prisma.$disconnect();
  server.close();
};

describe('Express App', () => {
  let server: Server;

  beforeAll(() => {
    server = app.listen(3001);
  });

  afterAll(async () => {
    await closeServerAndDbConnection(server);
  });

  describe('GET /students', () => {
    it('should get a list of students', async () => {
      const response = await request(app).get('/students');
      expect(response.status).toBe(200);
      expect(response.body).toHaveLength(3); 
    });
  });

});