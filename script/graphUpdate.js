const charts = {
    Temp_Graph: {
        chartMaxLength: 10,
        htmlId: 'temp_graph',
    },
    Humid_Graph: {
        chartMaxLength: 10,
        htmlId: 'humid_graph',
    },
    Overview_Graph: {
        chartMaxLength: 20,
        htmlId: 'overview_graph',
    },
}

const ifChartFull = (chart, name) => {
    const datasets = chart.data.datasets
    const labels = chart.data.labels
    datasets.map((item) => {
        if (item.data.length > charts[name]['chartMaxLength']) {
            item.data.shift()
            labels.shift()
            chart.update()
        }
    })
}

const labelOnGraphFormatter = (label) => {
    return [dayjs(label).format('DD-MMM-YYYY'), dayjs(label).format('HH:mm A')]
}

const TempUpdate =(data) => {
    ifChartFull(Temp_Graph, 'Temp_Graph')
    Temp_Graph.data.datasets[0].data.push(data)
    Temp_Graph.data.labels.push(labelOnGraphFormatter(new Date()))
    Temp_Graph.update()
}

const HumidUpdate = (data) => {
    ifChartFull(Humid_Graph, 'Humid_Graph')
    Humid_Graph.data.datasets[0].data.push(data)
    Humid_Graph.data.labels.push(labelOnGraphFormatter(new Date()))
    Humid_Graph.update()
}

const OverviewUpdate = (data) => {
    ifChartFull(Overview_Graph, 'Overview_Graph')
    Overview_Graph.data.datasets[0].data.push(data.temp)
    Overview_Graph.data.datasets[1].data.push(data.humid)
    Overview_Graph.data.labels.push(labelOnGraphFormatter(new Date()))
    Overview_Graph.update()
}

const temp_humid_StaticUpdate = (data) => {
    const target_temp = document.getElementById('temp')
    const target_humid = document.getElementById('humid')
    if (!target_temp || !target_humid) return

    target_temp.innerHTML = data.temp.toFixed(2)
    target_humid.innerHTML = data.humid.toFixed(2)

}
const ChartUpdates = (data) => {
    temp_humid_StaticUpdate(data)
    TempUpdate(data.temp)
    HumidUpdate(data.humid)
    OverviewUpdate(data)
}


export {ChartUpdates}
