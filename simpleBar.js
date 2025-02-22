/*
Author: Ansul Gupta
Copyright: MIT License
*/

var maxRageYAxis;
var chartYAxisSet = [];

//We can dynamically set this ChartData using API as well
var chartData = [
  {
 quater: "DAY1",
    revenue: 100,
    expenses: 1,
    get calProfit() {
      return this.revenue - this.expenses;
    }
  },
  {
    quater: "DAY2",
    revenue: 2.40,
    expenses: 1,
    get calProfit() {
      return this.revenue - this.expenses;
    }
  },
  {
    quater: "DAY3",
    revenue: 2.50,
    expenses: 1,
    get calProfit() {
      return this.revenue - this.expenses;
    }
  },
    {
    quater: "DAY5",
    revenue: 4.50,
    expenses: 1,
    get calProfit() {
      return this.revenue - this.expenses;
    }
  },
    {
    quater: "DAY6",
    revenue: 3.50,
    expenses: 1,
    get calProfit() {
      return this.revenue - this.expenses;
    }
  },
    {
    quater: "DAY7",
    revenue: 2.50,
    expenses: 1,
    get calProfit() {
      return this.revenue - this.expenses;
    }
  },
  {
    quater: "DAY8",
    revenue: 3.0,
    expenses: 1,
    get calProfit() {
      return this.revenue - this.expenses;
    }
  }
];

function buildYAxis(chartData) {
  if (chartData.length > 0) {
    //Get & Sort the revenue Array in Desc Order
    var revArr = [];
    for (let j = 0; j < chartData.length; j++) {
      revArr.push(chartData[j].revenue);
    }
    revArr.sort(function (a, b) {
      return b - a;
    });

    //Setting Max Range here, will be used in height calculation of bar
    maxRageYAxis = revArr[0] + 2000;
    var pointInterval = maxRageYAxis / 10;
    var initialVal = revArr[0] + 2000;
    var dynamicYAxis = "";

    for (let k = 0; k < 10; k++) {
      dynamicYAxis =
        dynamicYAxis +
        '<div class="segment"><span class="label">' +
        initialVal +
        "</span></div>";
      initialVal = initialVal - pointInterval;
    }

    //Appending 0 Label for Revenue, as Revenue can't go beyond Zero.
    dynamicYAxis =
      dynamicYAxis + '<div class="segment"><span class="label">0</span></div>';

    //Rendering Y Axis
    document.getElementById("yAxis").innerHTML = dynamicYAxis;
  }
}

function renderChart(chartData) {
  if (chartData.length > 0) {
    var dynamicXAxis = "";

    for (let i = 0; i < chartData.length; i++) {
      // To better represent % of height
      var numbersFull = (chartData[i].revenue / maxRageYAxis) * (100 - 4);
      dynamicXAxis =
        dynamicXAxis +
        ' <div class="year wrap"><div class="col"><span class="bar" style="height:' +
        numbersFull +
        '%" title="Revenue: $' +
        chartData[i].revenue +
        "&#013;Expenses: $" +
        chartData[i].expenses +
        '"><span class="tooltip">' +
        chartData[i].calProfit +
        '</span></span></div><span class="label"><a href="">' +
        chartData[i].quater +
        "</a></span></div>";
    }
    document.getElementById("xAxis").innerHTML = dynamicXAxis;
  }
}

// Building Y-Axis, Chart along with X-Ais
buildYAxis(chartData);
renderChart(chartData);
