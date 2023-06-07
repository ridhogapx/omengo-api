import { DataAgent, DataMap } from "../interfaces/ResponseAPI"

class Success {
    message: string
    success: boolean
    status: number

    constructor() {
        this.message = ''
        this.success = true
        this.status = 200
    }

    Agent(id: number, data: DataAgent[] ) {
        this.message = `Getting data by id ${id} is success!`

        return {
            message: this.message,
            success: this.success,
            status: this.status,
            data: data
        }
    }

    Agents(data: DataAgent[]) {
        this.message = `Successfully fetching all Agents`

        return {
            message: this.message,
            success: this.success,
            status: this.status,
            data: data
        }
    }

}

export default Success