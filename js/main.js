var opts = {
    // options here
};
var target = document.getElementById('demo'); 
var demoGauge = new Gauge(target).setOptions(opts);

document.getElementById("preview-textfield").className = "preview-textfield";
demoGauge.setTextField(document.getElementById("preview-textfield"));


// gauge.maxValue = 3000;
// gauge.setMinValue(0); 
// gauge.set(1250);

// gauge.animationSpeed = 32

// var opts = {

//     // color configs
//     colorStart: "#6fadcf",
//     colorStop: void 0,
//     gradientType: 0,
//     strokeColor: "#e0e0e0",
//     generateGradient: true,
//     percentColors: [[0.0, "#a9d70b" ], [0.50, "#f9c802"], [1.0, "#ff0000"]],

//     // customize pointer
//     pointer: {
//       length: 0.8,
//       strokeWidth: 0.035,
//       iconScale: 1.0
//     },

//     // static labels
//     staticLabels: {
//       font: "10px sans-serif",
//       labels: [200, 500, 2100, 2800],
//       fractionDigits: 0
//     },

//     // static zones
//     staticZones: [
//       {strokeStyle: "#F03E3E", min: 0, max: 200},
//       {strokeStyle: "#FFDD00", min: 200, max: 500},
//       {strokeStyle: "#30B32D", min: 500, max: 2100},
//       {strokeStyle: "#FFDD00", min: 2100, max: 2800},
//       {strokeStyle: "#F03E3E", min: 2800, max: 3000}
//     ],

//     // render ticks
//     renderTicks: {
//       divisions: 5,
//       divWidth: 1.1,
//       divLength: 0.7,
//       divColor: '#333333',
//       subDivisions: 3,
//       subLength: 0.5,
//       subWidth: 0.6,
//       subColor: '#666666'
//     },

//     // the span of the gauge arc
//     angle: 0.15,

//     // line thickness
//     lineWidth: 0.44,

//     // radius scale
//     radiusScale: 1.0,

//     // font size
//     fontSize: 40,

//     // if false, max value increases automatically if value > maxValue
//     limitMax: false,

//     // if true, the min value of the gauge will be fixed
//     limitMin: false,

//     // High resolution support
//     highDpiSupport: true

// };

var opts = {
    angle: -0.25,
    lineWidth: 0.2,
    radiusScale:0.9,
    pointer: {
      length: 0.6,
      strokeWidth: 0.05,
      color: '#000000'
    },
    staticLabels: {
      font: "10px sans-serif",
      labels: [200, 500, 2100, 2800],
      fractionDigits: 0
    },
    staticZones: [
        {strokeStyle: "#F03E3E", min: 100, max: 500}, // Red from 100 to 130
        {strokeStyle: "#FFDD00", min: 500, max: 1500}, // Yellow
        {strokeStyle: "#30B32D", min: 1500, max: 2800}, // Green
        // {strokeStyle: "#FFDD00", min: 220, max: 260}, // Yellow
        // {strokeStyle: "#F03E3E", min: 260, max: 300}  // Red
     ],
    limitMax: false,
    limitMin: false,
    highDpiSupport: true
  };
  demoGauge.setOptions(opts);
  demoGauge.setTextField(document.getElementById("preview-textfield"));
  demoGauge.minValue = 0;
  demoGauge.maxValue = 3000;
  demoGauge.set(1244);

  
function onItemSelected(feedback) {
  const selectedObj = feedback.selection.value;
  // Render selected choice to selection div
  document.querySelector(".selection").innerHTML = JSON.stringify(
    selectedObj,
    null,
    2
  );
  // Clear Input
  document.querySelector("#autoComplete").value = "";
  // Change placeholder with the selected value
  // document
  //   .querySelector("#autoComplete")
  //   .setAttribute("placeholder", selectedObj.name);
  // Concole log autoComplete data feedback
  console.log(feedback);
  console.log(getRating(selectedObj.type, selectedObj.origin));
}

function getRating(type, origin, manufacturedIn) {
  if (!origin) {
    return Color.BURGUNDY;
  }

  if (type.toLowerCase() === Type.COMPANY.toLowerCase()) {
    if (origin.toLowerCase() === Country.INDIA.toLowerCase()) {
      return Color.GREEN;
    } else if (origin.toLowerCase() === Country.CHINA.toLowerCase()) {
      return Color.RED;
    } else {
      return Color.YELLOW;
    }
  }

  if (type.toLowerCase() === Type.PRODUCT.toLowerCase()) {
    if (
      origin.toLowerCase() === Country.INDIA.toLowerCase() &&
      manufacturedIn === Country.INDIA.toLowerCase()
    ) {
      return Color.GREEN;
    } else if (
      origin.toLowerCase() === Country.CHINA.toLowerCase() &&
      manufacturedIn === Country.CHINA.toLowerCase()
    ) {
      return Color.RED;
    } else if (
      origin.toLowerCase() === Country.CHINA.toLowerCase() ||
      manufacturedIn === Country.CHINA.toLowerCase()
    ) {
      return Color.ORANGE;
    } else {
      return Color.YELLOW;
    }
  }

  if (type.toLowerCase() === Type.APP.toLowerCase()) {
    if (origin.toLowerCase() === Country.INDIA.toLowerCase()) {
      return Color.GREEN;
    } else if (origin.toLowerCase() === Country.CHINA.toLowerCase()) {
      return Color.RED;
    } else {
      return Color.YELLOW;
    }
  }
}
