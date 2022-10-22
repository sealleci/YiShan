// TODO: 加载本地化文件

import { L10nRawData } from './type.js'

function loadL10nFile(): L10nRawData {
    return { 'language': '', 'fields': {} }
}

export { loadL10nFile }