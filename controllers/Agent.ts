import RouteCallback from "../types/RouteCallback";
import { DataAgent } from "../interfaces/ResponseAPI";
import Agents from "../src/Agent";

export const allAgents: RouteCallback = (req, res) => {
    return res.json(Agents)
}

export const singleAgent: RouteCallback = (req, res) => {
    const id: string = req.params.id
    const singleAgent: DataAgent[] = Agents.filter((agent: DataAgent) => {
        return Number(id) == agent.id
    })

    return res.json(singleAgent)
}