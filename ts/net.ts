// TODO: 请求图片和json资源

async function fetchJSON(file_path: string, file_name: string): Promise<Object> {
    const response = await fetch(`${file_path}/${file_name}`)
    return response.json()
}

export { fetchJSON }