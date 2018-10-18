import Highcharts from "highcharts"

function addChart(node, data) {
  Highcharts.chart(node, {
    chart: {
      height: 60,
      type: "bar",
      title: null
    },
    title: {
      text: null
    },
    tooltip: {
      outside: true,
      followPointer: true,
      headerFormat: null,
      pointFormat: "<br/>{series.name}: <b>{point.y}%</b><br/>",
      hideDelay: 0
    },
    xAxis: {
      tickPositions: [],
      lineWidth: 0
    },
    yAxis: {
      title: {
        text: null
      },
      startOnTick: false,
      endOnTick: false,
      tickPositions: []
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      series: {
        stacking: "normal",
        dataLabels: {
          enabled: true,
          align: "center",
          color: "#000000"
        },
        maxPointWidth: 25
      }
    },

    series: [
      {
        name: "Omega 6",
        data: [data.omega6]
      },
      {
        name: "Omega 3",
        data: [data.omega3]
      },
      {
        name: "Monounsaturated fats",
        data: [data.mUF]
      },
      {
        name: "Saturated fats",
        data: [data.sF]
      }
    ],
    navigation: {
      buttonOptions: {
        enabled: false
      }
    },
    credits: {
      enabled: false
    }
  });
}

export { addChart }
