import { Router } from 'express'
import { UsersController } from '../controllers/UsersController.js'

const userRoutes = Router()

const usersController = new UsersController()

// vai no corpo como json  http://localhost:3333/user
userRoutes.post('/', usersController.create)
userRoutes.get('/', usersController.index)
userRoutes.delete('/:id', usersController.delete)
export default userRoutes
