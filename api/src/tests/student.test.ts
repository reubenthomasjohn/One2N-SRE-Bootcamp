import { describe, expect, it } from 'vitest'
import request from 'supertest'
import app from '../index'
import prisma from './helpers/prisma'

describe('/student', async () => {
  describe('[POST] /student', () => {
    it('should respond with a `200` status code and user details', async () => {
        const { status, body } = await request(app).post('/student').send({
            firstName: 'testfirstName',
            lastName: 'testlastName'
          })
          // 2
          const newStudent = await prisma.student.findFirst()
          expect(status).toBe(200)
          expect(newStudent).not.toBeNull()
          expect(body.newStudent).toStrictEqual({
            firstName: 'testfirstName',
            lastName: 'testlastName',
            id: newStudent?.id
         })
      })
  })
})