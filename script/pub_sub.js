function startConnect() {
  clientID = "clientID - " + parseInt(Math.random() * 100);

  host = document.getElementById("host").value;
  port = document.getElementById("port").value;

  document.getElementById("messages").innerHTML +=
    "<span> Connecting to " + host + "on port " + port + "</span><br>";

  client = new Paho.MQTT.Client(host, Number(port), clientID);

  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  console.log(host, port);
  client.connect({
    onSuccess: onConnect,
  });
}

function onConnect() {
  topic = document.getElementById("topic_sup").value;

  document.getElementById("messages").innerHTML +=
    "<span> Subscribing to topic " + topic + "</span><br>";

  client.subscribe(topic);

  console.log("connect", topic);
}

function onConnectionLost(responseObject) {
  document.getElementById("messages").innerHTML +=
    "<span> ERROR: Connection is lost.</span><br>";
  if (responseObject != 0) {
    document.getElementById("messages").innerHTML +=
      "<span> ERROR:" + responseObject.errorMessage + "</span><br>";
  }
}

function onMessageArrived(message) {
  console.log("OnMessageArrived: " + message.payloadString);
  document.getElementById("messages").innerHTML +=
    "<span> Topic:" +
    message.destinationName +
    "| Message : " +
    message.payloadString +
    "</span><br>";
  let jsonMessage = JSON.parse(message.payloadString);
  ChartUpdates(jsonMessage);
}

function startDisconnect() {
  client.disconnect();
  document.getElementById("messages").innerHTML +=
    "<span> Disconnected. </span><br>";
}

function publishMessage() {
  msg = document.getElementById("message").value;
  topic = document.getElementById("topic_pub").value;

  Message = new Paho.MQTT.Message(msg);
  Message.destinationName = topic;
  console.log(Message);
  client.send(Message);
  document.getElementById("messages").innerHTML +=
    "<span> Message to topic " + topic + " is sent </span><br>";
}

function control_led() {
  msg = ""
  topic = "esp32/controlLED"

  if (document.getElementById("led_switch").checked) {
    msg = "on"
  } else {
    msg = "off"
  }

  console.log(topic, msg)

  Message = new Paho.MQTT.Message(msg);
  Message.destinationName = topic;
  console.log(Message);
  client.send(Message);
  document.getElementById("messages").innerHTML +=
    "<span> Message to topic " + topic + " is sent </span><br>";
}

