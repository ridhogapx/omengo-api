import ValoMap from "../src/ValoMap"
import RouteCallback from "../types/RouteCallback"
import { ResponseMap, DataMap, FailureResponse } from "../interfaces/ResponseAPI"
import Failure from "../types/Failure"

export const allMap: RouteCallback = (req, res) => {
   const response: ResponseMap = {
        message: "Success fetching data maps!",
        success: true,
        status: 200,
        data: ValoMap
    }

    return res.json(response)
}

export const singleMap: RouteCallback = (req, res) => {
    const id: number = Number(req.params.id)
    const single: DataMap[] = ValoMap.filter((result: DataMap) => {
        return id == result.id
    })

    const failure: Failure = new Failure()

    if(single.length) {
        const response: ResponseMap = {
            message: `Getting map id ${id} is success!`,
            success: true,
            status: 200,
            data: single
        }
    
        return res.json(response)
    }

    const response: FailureResponse = failure.response()
    return res.json(response)

    
}