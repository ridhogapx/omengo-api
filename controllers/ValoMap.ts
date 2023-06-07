import ValoMap from "../src/ValoMap"
import RouteCallback from "../types/RouteCallback"
import { DataValo, BaseResponse, ValoResponse } from "../interfaces/ResponseAPI"
import Failure from "../types/Failure"
import Success from "../types/Success"

const successResponse: Success = new Success()

export const allMap: RouteCallback = (req, res) => {
    successResponse.allMsg = "Map"
    const response: ValoResponse = successResponse.allValo(ValoMap)
    return res.json(response)
}

export const singleMap: RouteCallback = (req, res) => {
    const id: number = Number(req.params.id)
    successResponse.singleMsg = id
    const single: DataValo[] = ValoMap.filter((result: DataValo) => {
        return id == result.id
    })

    const failure: Failure = new Failure()

    if(single.length) {

       const response: ValoResponse = successResponse.SingleValo(single)
    
        return res.json(response)
    }

    const response: BaseResponse = failure.response()
    return res.json(response)

    
}