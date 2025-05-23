import { Router } from 'express'
import { getAllUsers, createUser, getUsersById } from '../controllers/user.controller'

const router = Router()

router.get('/', getAllUsers)
router.post('/', createUser)
router.get('/:id', getUsersById)

export default router
