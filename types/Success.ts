class Success {
    message: string
    success: boolean
    status: number  
    
    constructor() {
        this.message = ''
        this.success = true
        this.status = 200
    }

    single(id: number) {
        this.message = `Getting data by id ${id} is success!`

        return {
            message: this.message,
            success: this.success,
            status: this.status
        }
    }

}

export default Success