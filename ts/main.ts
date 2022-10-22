import { fetchJSON } from './net.js'

document.addEventListener('DOMContentLoaded', async () => {
    try {
        let config = await fetchJSON('./asset/config', 'lang.json')
        console.log(JSON.stringify(config))
    } catch (error) {
        console.log(`@ts.main: Terminate with \"${error}\".`)
    }
})