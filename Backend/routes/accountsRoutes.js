import express from 'express'

const router = express.Router()

import accountHandler from '../controllers/accountsController.js'

router.post('/login', accountHandler.loginAccount)
router.post('/register', accountHandler.registerAccount)

export default router