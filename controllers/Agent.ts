import RouteCallback from "../types/RouteCallback"
import Agents from "../src/Agents"

export const allAgents: RouteCallback = (req, res) => {
    return res.json(Agents)    
}

