import RouteCallback from "../types/RouteCallback";
import { DataAgent, ResponseAgent, FailureResponse } from "../interfaces/ResponseAPI";
import Agents from "../src/Agent";
import Failure from "../types/Failure";

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

    const failureResponse: Failure = new Failure()

    if(singleAgent.length) {
        const response: ResponseAgent = {
            message: `Getting data by id ${id} is success!`,
            success: true,
            status: 200,
            data: singleAgent
        }
    
        return res.json(response)
    }

    const response: FailureResponse = failureResponse.response()
    return res.json(response)
}