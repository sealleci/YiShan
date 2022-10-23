// TODO: 请求图片和json资源
import { ImageRequest, ImageResponse } from './type.js'

async function fetchJSON(file_path: string, file_name: string): Promise<Object> {
    const response = await fetch(`${file_path}/${file_name}`)
    return response.json()
}

function loadImage(url: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
        const image = new Image()
        image.onload = () => { resolve(image) }
        image.onerror = () => { reject(new Error(`@ts.net.loadImage: Failed to load source from \"${url}\".`)) }
        image.src = url
    })
}

async function preloadImages(urls: ImageRequest): Promise<ImageResponse> {
    const images: ImageResponse = {}
    for (const index of Object.keys(urls)) {
        images[index] = await loadImage(urls[index])
    }
    return images
}

export { fetchJSON, preloadImages }