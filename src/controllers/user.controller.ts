import { Request, Response } from 'express'
import * as userService from '../services/user.service'

export const getAllUsers = (req: Request, res: Response) => {
    const users = userService.getUsers()
    res.json(users)
}

export const createUser = (req: Request, res: Response) => {
    const { name } = req.body
    if (!name) {
        res.status(400).json({ message: 'Name is required' })
    } else {
        const newUser = userService.createUser(name)
        res.status(201).json(newUser)
    }
}
