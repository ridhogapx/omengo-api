import RouteCallback from "../types/RouteCallback";
import { DataAgent, ResponseAgent } from "../interfaces/ResponseAPI";
import Agents from "../src/Agent";

export const allAgents: RouteCallback = (req, res) => {
    const response: ResponseAgent = {
        message: "Successfully fetching data all agents!",
        success: true,
        status: 200,
        data: Agents
    }
    return res.json(response)
}

export const singleAgent: RouteCallback = (req, res) => {
    const id: number = Number(req.params.id)
    const singleAgent: DataAgent[] = Agents.filter((agent: DataAgent) => {
        return id == agent.id
    })

    const response: ResponseAgent = {
        message: `Getting data by id ${id} is success!`,
        success: true,
        status: 200,
        data: singleAgent
    }

    return res.json(response)
}