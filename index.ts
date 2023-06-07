import express, { Express } from "express"
import { allAgents, singleAgent } from "./controllers/Agent"
import { allMap, singleMap } from "./controllers/ValoMap"

const cors = require('cors')

const app: Express = express()
app.use(cors())

const port: number = 4000

app.get("/api/v1/agent", allAgents)
app.get("/api/v1/agent/:id", singleAgent)
app.get("/api/v1/map", allMap)
app.get("/api/v1/map/:id", singleMap )

app.listen(port, (): void => {
    console.log(`Server is running on port ${port}`)
})

