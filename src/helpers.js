import Highcharts from "highcharts";

export function addChart(node, data) {
  Highcharts.chart(node, {
    chart: {
      animation: false,
      height: 60,
      width: (data.sF + data.mUF + data.omega6 + data.omega3 + 2.5) * 5,
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
        animation: false,
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

export function checkCookingPossibility(elem) {
  let maxTemp = elem.sF + elem.mUF >= 95 ? elem.fireP : elem.fireP * 0.87;
  return maxTemp >= 200 ? true : false;
}

export function idMaker(str) {
  let ID = "";
  for (let i = 0; i < str.length; i++) {
    ID += +str.charCodeAt(i);
  }
  return ID;
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

export function makeSortsByProp(sortDirection, str) {
  if (sortDirection) return (a, b) => a[str] - b[str];
  return (a, b) => b[str] - a[str];
}
