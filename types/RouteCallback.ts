import { Request, Response } from "express"

type RouteCallback = ( req: Request, res: Response) => Response

export default RouteCallback