interface Data {
    name: string,
    image_url: string
}

interface ResponseAPI {
    message: string,
    success: boolean,
    data: Data[]
}

export default ResponseAPI