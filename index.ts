import express, { Express } from "express"
import { allAgents, singleAgent } from "./controllers/Agent"
import { allMap } from "./controllers/ValoMap"

const app: Express = express()

const port: number = 4000

app.get("/api/v1/agent", allAgents)
app.get("/api/v1/agent/:id", singleAgent)
app.get("/api/v1/map", allMap)

app.listen(port, (): void => {
    console.log(`Server is running on port ${port}`)
})

