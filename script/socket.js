import {ChartUpdates} from '../script/graphUpdate'

const checkUrl = () => {
    let urls = window.location.href.split('/')
    return urls.pop()
}

const connectToSocket = async () => {
    try {
        const url = ``
        const socket = new WebSocket(url)
        socket.onmessage = (message) => {
            let jsonMessage = JSON.parse(message.data)
            if(checkUrl() === 'index.html') {
                ChartUpdates(jsonMessage)
            }
        }
    } catch (error) {
        console.log(error)
    }
}

connectToSocket()
