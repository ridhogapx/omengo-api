class Failure {
    message: string
    status: number
    success: boolean

    constructor() {
        this.message = "Data is not found"
        this.status = 404
        this.success = false
    }

    response() {
        return {
            message: this.message,
            success: this.success,
            status: this.status
        }
    }
}

export default Failure