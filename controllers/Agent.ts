import RouteCallback from "../types/RouteCallback"
import Agents from "../src/Agents/Controllers"
import { DataAgent } from "../interfaces/ResponseAPI"

export const allAgents: RouteCallback = (req, res) => {
    return res.json(Agents)    
}

export const singleAgent: RouteCallback = (req, res) => {
    const query: string = req.params.query

    const singleAgent: DataAgent[] = Agents.filter((agent: DataAgent) => {
            return Number(query) == agent.id
    })

    return res.json(singleAgent)

}