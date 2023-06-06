import ValoMap from "../src/ValoMap"
import RouteCallback from "../types/RouteCallback"
import { ResponseMap } from "../interfaces/ResponseAPI"

export const allMap: RouteCallback = (req, res) => {
   const response: ResponseMap = {
        message: "Success fetching data maps!",
        status: 200,
        success: true,
        data: ValoMap
    }

    return res.json(response)
}
