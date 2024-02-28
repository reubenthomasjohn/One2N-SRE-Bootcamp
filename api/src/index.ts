const express = require('express');
import { Request, Response } from 'express';
import { PrismaClient } from "@prisma/client";
import * as dotenv from 'dotenv';

dotenv.config()

const prisma = new PrismaClient();
const app = express();
app.use(express.json())

const port = 3000;

app.get("/students", async (req: Request, res: Response) => {
  const students = await prisma.student.findMany({
  });
  res.json(students);
});

app.get("/students/:id", async (req: Request, res: Response) => {
  const student = await prisma.student.findUnique({
    where: {
        id: parseInt(req.params.id),
    },
});
  res.json(student);
});

app.post("/students", async (req: Request, res: Response) => {
  const newStudent = await prisma.student.create({
    data: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    }
})
  res.status(200).json({
    newStudent
  });
});

app.put("/students/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { firstName, lastName} = req.body;
  try {
    const updatedStudent = await prisma.student.update({
      where: { id: Number(id) },
      data: {
        firstName: firstName,
        lastName: lastName
      }
    });
    res.json(updatedStudent);
  } catch (error) {
    console.error("Error updating student:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.delete("/students/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const deletedStudent = await prisma.student.delete({
    where: {
      id: parseInt(id),
    },
  });
  res.json(deletedStudent);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
  // console.log(`[server]: The connection URL is ${process.env.DATABASE_URL}`)
});

export default app