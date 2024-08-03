import { Router } from "express";
import { createUser } from "../services/createUser";
import getAllUsers from "../services/getAllUsers";

const router = Router()

router.post('/create', async (req, res, next) => {
    try {
        const result = await createUser(req.body);
        res.status(201).json({ message: 'user created', user: result })
    } catch (e) {
        console.log(e)
        next(e)
    }
})

router.get('/all', async (req, res, next) => {
    try {
        const users = await getAllUsers()
        res.status(200).json(users)
    } catch (e) {
        next(e)
    }
})
export default router