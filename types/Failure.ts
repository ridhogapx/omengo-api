class Failure {
    public message: string
    public status: number
    public success: boolean

    constructor() {
        this.message = "Data is not found"
        this.status = 404
        this.success = false
    }

    public response() {
        return {
            message: this.message,
            success: this.success,
            status: this.status
        }
    }
}

export default Failure