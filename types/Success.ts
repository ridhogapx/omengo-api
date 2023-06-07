import { DataValo, DataCategory } from "../interfaces/ResponseAPI"

class Success {
    public _messageForSingle: string
    public _messageForAll: string
    public success: boolean
    public status: number

    constructor() {
        this._messageForSingle = ""
        this._messageForAll = ""
        this.success = true
        this.status = 200
    }

    public set singleMsg(id: number) {
        this._messageForSingle = `Getting data by id ${id} is success!`
    }

    public set allMsg(name: string) {
        this._messageForAll = `Successfully fetching all ${name}`
    }


    public SingleCategory(id: number, data: DataCategory[]) {
        return {
            message: this._messageForSingle,
            success: this.success,
            status: this.status,
            data: data
        }
    }

    AllCategory(data: DataCategory[]) {
        return {
            message: this._messageForAll,
            success: this.success,
            status: this.status,
            data: data
        }
    }

    SingleValo(id: number, data: DataValo[]) {

        return {
            message: this._messageForSingle,
            success: this.success,
            status: this.status,
            data: data
        }
    }

    allValo(name: string, data: DataValo[]) {
        return {
            message: this._messageForAll,
            success: this.success,
            status: this.status,
            data: data
        }
    }

}

export default Success