import { ImageRequest, ImageResponse } from './type.js';
declare function fetchJSON(file_path: string, file_name: string): Promise<Object>;
declare function preloadImages(urls: ImageRequest): Promise<ImageResponse>;
export { fetchJSON, preloadImages };
