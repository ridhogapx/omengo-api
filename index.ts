import express, { Express } from "express"

const app: Express = express()

const port: number = 4000

app.listen(port, (): void => {
    console.log(`Server is running on port ${port}`)
})

