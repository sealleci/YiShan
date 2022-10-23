var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchJSON(file_path, file_name) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${file_path}/${file_name}`);
        return response.json();
    });
}
function loadImage(url) {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => { resolve(image); };
        image.onerror = () => { reject(new Error(`@ts.net.loadImage: Failed to load source from \"${url}\".`)); };
        image.src = url;
    });
}
function preloadImages(urls) {
    return __awaiter(this, void 0, void 0, function* () {
        const images = {};
        for (const index of Object.keys(urls)) {
            images[index] = yield loadImage(urls[index]);
        }
        return images;
    });
}
export { fetchJSON, preloadImages };
//# sourceMappingURL=net.js.map