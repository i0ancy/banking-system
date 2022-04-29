import dotenv from "dotenv"
dotenv.config({ path: `${__dirname}/.env`})
import express, { Application, Request, Response } from "express"

const app: Application = express()
app.disable("x-powered-by")

// environment variables
const PORT = process.env.PORT || 3000

app.get("/", (req: Request, res: Response) => {
    res.send("Hello, World!")
})

app.listen(PORT, () => {
    console.log(`[INFO] Listening server at http://localhost:${PORT}`)
})