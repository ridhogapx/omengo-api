import RouteCallback from "../types/RouteCallback";
import {  DataCategory, BaseResponse, CategoryResponse } from "../interfaces/ResponseAPI";
import Agents from "../src/Agent";
import Failure from "../types/Failure";
import Success from "../types/Success";

const successResponse: Success = new Success()

export const allAgents: RouteCallback = (req, res) => {
    successResponse.allMsg = "Agent"
    const response: CategoryResponse  = successResponse.AllCategory(Agents )
    return res.json(response)
}

export const singleAgent: RouteCallback = (req, res) => {
    const id: number = Number(req.params.id)
    successResponse.singleMsg = id
    const singleAgent: DataCategory[] = Agents.filter((agent: DataCategory) => {
        return id == agent.id
    })

    const failureResponse: Failure = new Failure()

    if(singleAgent.length) {
        const response: CategoryResponse = successResponse.SingleCategory(id, singleAgent)
    
        return res.json(response)
    }

    const response: BaseResponse = failureResponse.response()
    return res.json(response)
}