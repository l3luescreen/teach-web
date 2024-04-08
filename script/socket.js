// import { ChartUpdates } from "../script/graphUpdate";

const MODE = "mock";

const checkUrl = () => {
  let urls = window.location.href.split("/");
  return urls.pop();
};

const connectToSocket = async () => {
  try {
    if (MODE === "mock") {
      setInterval(() => {
        let jsonMessage = genRandomData();
        ChartUpdates(jsonMessage);
      }, 1000);
    } else {
      const url = `ws://broker.emqx.io:8083/mqtt`;
      const socket = new WebSocket(url);
      socket.onmessage = (message) => {
        let jsonMessage = JSON.parse(message.data);
        // if (checkUrl() === "index.html") {
        ChartUpdates(jsonMessage);
        // }
      };
    }
  } catch (error) {
    console.log(error);
  }
};

connectToSocket();
