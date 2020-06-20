
function setGaugeVaue(value) {


  var opts = {
    // options here
  };
  var target = document.getElementById('demo');
  var demoGauge = new Gauge(target).setOptions(opts);

  document.getElementById("preview-textfield").className = "preview-textfield";
  //demoGauge.setTextField(document.getElementById("preview-textfield"));


  var opts = {
    angle: 0,
    lineWidth: 0.5,
    radiusScale: 0.9,
    pointer: {
      length: 0.6,
      strokeWidth: 0.05,
      color: '#000000'
    },
    staticLabels: {
      font: "10px sans-serif",
      labels: [],
      fractionDigits: 0
    },
    staticZones: [
      
      { strokeStyle: "#30B32D", min: 0, max: 500 }, // Green
     
      { strokeStyle: "#FFDD00", min: 500, max: 1000 }, // Yellow
     
      { strokeStyle: "#FFA500", min: 1000, max: 1500 }, // Orange
   
      { strokeStyle: "#800020", min: 1500, max: 2000 }, // BURGUNDY

      { strokeStyle: "#FF0000", min: 2000, max: 3000 }, // Red from 100 to 130
      // {strokeStyle: "#FFDD00", min: 220, max: 260}, // 
      // {strokeStyle: "#F03E3E", min: 260, max: 300}  // Red
    ],
    limitMax: false,
    limitMin: false,
    highDpiSupport: true
  };
  demoGauge.setOptions(opts);
 // demoGauge.setTextField(document.getElementById("preview-textfield"));
  demoGauge.minValue = 0;
  demoGauge.maxValue = 3000;
  //demoGauge.set(1844);
var gaugeText = ' - '
  switch (value) {

    case Color.RED:
      demoGauge.set(2500);
      gaugeText = "No"
      break;

    case Color.GREEN:
      demoGauge.set(200);
      gaugeText = "Yes"
      break;
    case Color.YELLOW:
      demoGauge.set(544);
      gaugeText = "May be"
      break;
    case Color.BURGUNDY:
      demoGauge.set(1000);
      gaugeText = "May be"
      break;
    case Color.ORANGE:
      demoGauge.set(1500);
      gaugeText = "May be"
      break;
  }
  document.getElementById("preview-textfield").innerHTML=gaugeText;
}


function onItemSelected(feedback) {
  const selectedObj = feedback.selection.value;
  // Render selected choice to selection div
  // document.querySelector(".selection").innerHTML = JSON.stringify(
  //   selectedObj,
  //   null,
  //   2
  // );
  // Clear Input
  document.querySelector("#autoComplete").value = "";
  // Change placeholder with the selected value
  // document
  //   .querySelector("#autoComplete")
  //   .setAttribute("placeholder", selectedObj.name);
  // Concole log autoComplete data feedback;
  console.log(feedback);
  console.log("getRating", getRating(selectedObj.type, selectedObj.origin));
  setGaugeVaue(getRating(selectedObj.type, selectedObj.origin));
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
