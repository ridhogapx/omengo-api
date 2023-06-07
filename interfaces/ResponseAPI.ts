export interface BaseResponse  {
    message: string,
    success: boolean,
    status: number
}

export interface DataValo  {
    id: number,
    name: string,
    image_url: string
}

export interface DataCategory extends DataValo {
    category: string
}

export interface CategoryResponse extends BaseResponse {
    data: DataCategory[]
}

export interface ValoResponse extends BaseResponse {
    data: DataValo[]
}

