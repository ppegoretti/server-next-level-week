import { Router } from 'express'

const usersRouter = Router()

usersRouter.get('/', (req, res) => {
  return res.json({ message: 'Hello Julius' })
})

export default usersRouter
