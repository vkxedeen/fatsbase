import Highcharts from "highcharts";

export function addChart(node, data) {
  const { sF, mUF, omega3, omega6 } = data;
  const w = 100 - (sF + mUF + omega3 + omega6);
  Highcharts.chart(node, {
    chart: {
      styledMode: true,
      animation: false,
      backgroundColor: "#fff",
      height: 25,

      type: "bar",
      title: null,
      margin: [-100, 0, -100, 0],
      spacing: [0, 0, 0, -10]
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
      visible: false
    },
    yAxis: {
      visible: false
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      series: {
        pointPadding: 0,
        animation: "false",
        stacking: "normal",
        dataLabels: {
          enabled: true,
          align: "center",
          color: "#000000"
        },
        maxPointWidth: 0
      }
    },

    series: [
      {
        name: "Omega 6",
        data: [omega6]
      },
      {
        name: "Omega 3",
        data: [omega3]
      },
      {
        name: "Monounsaturated fats",
        data: [mUF]
      },
      {
        name: "Saturated fats",
        data: [sF]
      },
      {
        name: null,
        data: [w]
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

export function addPie(node, item) {
  const { name, sF, mUF, omega3, omega6 } = item;
  const other = 100 - (sF + mUF + omega3 + omega6);

  Highcharts.chart(node, {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie"
    },
    title: {
      text: name
    },
    tooltip: {
      enabled: false
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        alignTo: "connectors",
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.percentage:.1f} %"
        }
      }
    },
    series: [
      {
        data: [
          { name: "Other", y: other },
          { name: "Omega 6", y: omega6 },
          { name: "Omega 3", y: omega3 },
          { name: "Monounsaturated fats", y: mUF },
          { name: "Saturated fats", y: sF }
        ]
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

export function checkCookingPossibility(elem) {
  let maxTemp = elem.sF + elem.mUF >= 95 ? elem.fireP : elem.fireP * 0.87;
  return maxTemp >= 200 ? true : false;
}

export function findByPattern(str) {
  if (!str) return item => item;
  let regex = new RegExp(str.toLowerCase());
  return item => regex.test(item.name.toLowerCase());
}

export function makeFilterFn(fryChecked, vegChecked) {
  if (fryChecked && vegChecked) {
    return item =>
      item.isVegeterian === true &&
      checkCookingPossibility(item) === true &&
      item.isSelect === true;
  } else if (fryChecked) {
    return item =>
      checkCookingPossibility(item) === true && item.isSelect === true;
  } else if (vegChecked) {
    return item => item.isVegeterian === true && item.isSelect === true;
  } else {
    return item => item.isSelect === true;
  }
}

export function makeSortFn(sortDirection, str) {
  if (sortDirection) return (a, b) => a[str] - b[str];
  return (a, b) => b[str] - a[str];
}
