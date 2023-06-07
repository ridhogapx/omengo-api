import { DataAgent } from "../interfaces/ResponseAPI"

class Success {
    message: string
    success: boolean
    status: number  

    constructor() {
        this.message = ''
        this.success = true
        this.status = 200
    }

    single(id: number, data: DataAgent[]) {
        this.message = `Getting data by id ${id} is success!`

        return {
            message: this.message,
            success: this.success,
            status: this.status,
            data: data
        }
    }

    all(name: string, data: DataAgent[]) {
        this.message = `Successfully fetching all ${name}`

        return {
            message: this.message,
            success: this.success,
            status: this.status,
            data: data
        }
    }

}

export default Success