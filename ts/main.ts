import { fetchJSON } from './net.js'

document.addEventListener('DOMContentLoaded', async () => {
    let config = await fetchJSON('./asset/config', 'lang.json')
    console.log(config.stringify())
})