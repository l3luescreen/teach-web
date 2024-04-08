const charts = {
  Temp_Graph: {
    chartMaxLength: 10,
    htmlId: "temp_graph",
  },
  Humid_Graph: {
    chartMaxLength: 10,
    htmlId: "humid_graph",
  },
  temp_humid_graph: {
    chartMaxLength: 5,
    htmlId: "temp_humid_graph",
  },
};

const ifChartFull = (chart, name) => {
  const datasets = chart.data.datasets;
  const labels = chart.data.labels;
  datasets.map((item) => {
    if (item.data.length >= charts[name]["chartMaxLength"]) {
      item.data.shift();
      chart.update();
    }
    if (labels.length >= charts[name]["chartMaxLength"]) {
      labels.shift();
      chart.update();

    }
  });
};

const dateFormatter = () => {
  const now = new Date();
  return [`${now.getHours()}-${now.getMinutes()}-${now.getSeconds()}`];
};

const timeFormatter = () => {
  const now = new Date();
  return [`${now.getHours()}-${now.getMinutes()}-${now.getSeconds()}`];
};

const labelOnGraphFormatter = () => {
  return [dateFormatter(), timeFormatter()];
};

const TempUpdate = (data) => {
  ifChartFull(Temp_Graph, "Temp_Graph");
  Temp_Graph.data.datasets[0].data.push(data);
  Temp_Graph.data.labels.push(labelOnGraphFormatter(new Date()));
  Temp_Graph.update();
};

const HumidUpdate = (data) => {
  ifChartFull(Humid_Graph, "Humid_Graph");
  Humid_Graph.data.datasets[0].data.push(data);
  Humid_Graph.data.labels.push(labelOnGraphFormatter(new Date()));
  Humid_Graph.update();
};

const OverviewUpdate = (data) => {
  // if (temp_humid_graph.data.datasets[0].data.length >= 5) {
  //   temp_humid_graph.data.datasets[0].data.shift();
  //   temp_humid_graph.data.labels.shift();
  // }

  // if (temp_humid_graph.data.datasets[1].data.length >= 5) {
  //   temp_humid_graph.data.datasets[1].data.shift();
  // }
  temp_humid_graph.data.datasets[0].data.push(data.temp);
  temp_humid_graph.data.datasets[1].data.push(data.humid);
  temp_humid_graph.data.labels.push(labelOnGraphFormatter(new Date()));
  ifChartFull(temp_humid_graph, "temp_humid_graph");
  temp_humid_graph.update();
};

const temp_humid_StaticUpdate = (data) => {
    const target_temp = document.getElementById('temp')
    const target_humid = document.getElementById('humid')
    if (!target_temp || !target_humid) return

    target_temp.innerHTML = data.temp.toFixed(2)
    target_humid.innerHTML = data.humid.toFixed(2)

}

const ChartUpdates = (data) => {
  temp_humid_StaticUpdate(data)
  // TempUpdate(data.temp);
  // HumidUpdate(data.humid);
  OverviewUpdate(data);
};
