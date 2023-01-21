import cors from '@fastify/cors'
import { PrismaClient } from '@prisma/client'
import Fastify from 'fastify'

require('dotenv')

const app = Fastify()
const prisma = new PrismaClient()

app.register(cors, {
  origin: process.env.FRONT_END_URL,
})

app.get('/', async () => {
  const habits = await prisma.habit.findMany()
  return habits
})

app.listen({
  port: Number(process.env.BACK_END_URL)
}).then(() => {
  console.log(`HTTP server listening on port ${process.env.BACK_END_URL}`)
})