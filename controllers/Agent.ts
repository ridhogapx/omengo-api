import RouteCallback from "../types/RouteCallback"
import Agents from "../src/Agents/Controllers"
import { DataAgent } from "../interfaces/ResponseAPI"

export const allAgents: RouteCallback = (req, res) => {
    return res.json(Agents)    
}

export const singleAgent: RouteCallback = (req, res) => {
    const { id } = req.params
   
    const singleAgent = Agents.filter((agent: DataAgent) => {
        return Number(id) == agent.id
    })

    return res.json(singleAgent)

}