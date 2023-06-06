interface DataAgent {
    name: string,
    category: string,
    image_url: string
}

export interface ResponseAgent {
    message: string,
    success: boolean,
    data: DataAgent[]
}

