import RouteCallback from "../types/RouteCallback";
import { DataAgent, ResponseAgent, FailureResponse } from "../interfaces/ResponseAPI";
import Agents from "../src/Agent";
import Failure from "../types/Failure";
import Success from "../types/Success";

const successResponse: Success = new Success()

export const allAgents: RouteCallback = (req, res) => {
    const response: ResponseAgent = successResponse.Agents(Agents)
    return res.json(response)
}

export const singleAgent: RouteCallback = (req, res) => {
    const id: number = Number(req.params.id)
    const singleAgent: DataAgent[] = Agents.filter((agent: DataAgent) => {
        return id == agent.id
    })

    const failureResponse: Failure = new Failure()

    if(singleAgent.length) {
        const response: ResponseAgent = successResponse.Agent(id, singleAgent)
    
        return res.json(response)
    }

    const response: FailureResponse = failureResponse.response()
    return res.json(response)
}