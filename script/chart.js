const chartConfig = [
    {
        htmlId: 'temp_graph',
        jsName: 'Temp_Graph',
        datasets: ['Temperature']
  },
    {
        htmlId: 'humid_graph',
        jsName: 'Humid_Graph',
        datasets: ['Humidity']
  
  },
    {
        htmlId: 'overview_graph',
        jsName: 'Overview_Graph',
        datasets: ['Temperature', 'Humidity']
  },
]

chartConfig.forEach((item) => {
    if (!document.getElementById(item.htmlId)) return
    let datasets = item.datasets.map((data) => {
      return {
        "label": data,
        "data": [],
        "fill": false,
        "borderColor": ["rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)", "rgb(75, 192, 192)", "rgb(54, 162, 235)", "rgb(153, 102, 255)", "rgb(201, 203, 207)"],
        "borderWidth": 1
      }
    })
    window[item.jsName] = new Chart(document.getElementById(item.htmlId), {
      "type": "line",
      "labels": [],
      "data": {
        "labels": [],
        "datasets": datasets
      },
      "options": {
      }
    });
  })