// const { Chart } = import('chart.js');

/**
 * ตัวอย่างการเพิ่มกราฟ
 * 1. สร้าง html id สำหรับแสดงกราฟ
 * 2. กำหนดประเภทของกราฟ เช่น line, bar
 */
const chartConfig = [
  // {
  //   htmlId: "temp_graph",
  //   chartType: "line",
  //   jsName: "Temp_Graph",
  //   datasets: ["Temperature"],
  // },
  // {
  //   htmlId: "humid_graph",
  //   jsName: "Humid_Graph",
  //   datasets: ["Humidity"],
  // },
  {
    htmlId: "temp_humid_graph",
    chartType: "line",
    jsName: "temp_humid_graph",
    datasets: [
      {
        data: [],
        label: "Temperature",
        borderColor: "#3cba9f",
        fill: false,
      },
      {
        data: [],
        label: "Humidity",
        borderColor: "#FFeeaa",
        fill: false,
      },
    ],
    chartTitle: "Temperature and Humidity",
  },
];

const generateChart = (htmlId) => {
  window["temp_humid_graph"] = new Chart(document.getElementById(htmlId), {
    type: "line",
    data: {
      labels: [],
      datasets: [
        {
          data: [],
          label: "",
          borderColor: "#3cba9f",
          fill: false,
        },
        {
          data: [],
          label: "America",
          borderColor: "#3cba9f",
          fill: false,
        },
      ],
      options: {
        title: {
          display: true,
          text: config.chartTitle,
        },
      },
    },
  });
};

chartConfig.forEach((config) => {
  window[config.jsName] = new Chart(document.getElementById(config.htmlId), {
    type: "line",
    data: {
      labels: [],
      datasets: config.datasets,
      options: {
        title: {
          display: true,
          text: "Chart JS Line Chart Example",
        },
        tension: 0.5,
      },
    },
  });
});

const addData = (chart, label, newData) => {
  chart.data.labels.push(label);
  chart.data.datasets.forEach((dataset) => {
    dataset.data.push(newData);
  });
  chart.update();
};

// generateChart("temp_graph");
// generateChart("humid_graph");
// generateChart("temp_humid_graph");
