import dotenv from 'dotenv'
dotenv.config()

import express from 'express'

const app = express()

app.get("/", (req, res) => {
	res.send("Hello User")
})


app.listen(process.env.PORT, () => {
	console.log("Backend Server Started with Port: ", process.env.PORT)
})


