interface BaseResponse {
    message: string,
    success: boolean,
    status: number
}

interface DataValo {
    id: number,
    name: string,
    image_url: string
}

export interface DataAgent extends DataValo {
    category: string,
    
}

export interface DataMap extends DataValo {}

export interface ResponseAgent extends BaseResponse{
   data: DataAgent[]
}

export interface ResponseMap extends BaseResponse {
    data: DataMap[]
}
