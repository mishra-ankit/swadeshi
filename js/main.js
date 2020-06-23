function setGaugeValue(value) {
  let opts = {
    // options here
  };
  const target = document.getElementById("demo");
  const demoGauge = new Gauge(target).setOptions(opts);

  document.getElementById("preview-textfield").className = "preview-textfield";
  //demoGauge.setTextField(document.getElementById("preview-textfield"));

  opts = {
    angle: 0,
    lineWidth: 0.5,
    radiusScale: 0.9,
    pointer: {
      length: 0.6,
      strokeWidth: 0.05,
      color: "#000000",
    },
    staticLabels: {
      font: "10px sans-serif",
      labels: [],
      fractionDigits: 0,
    },
    staticZones: [
      { strokeStyle: "#30B32D", min: 0, max: 750 }, // Green

      { strokeStyle: "#FFA500", min: 750, max: 1500 }, // Yellow

      { strokeStyle: "#FFDD00", min: 1500, max: 2250 }, // Orange

      //{ strokeStyle: "#800020", min: 1500, max: 2000 }, // BURGUNDY

      { strokeStyle: "#FF0000", min: 2250, max: 3000 }, // Red from 100 to 130
      // {strokeStyle: "#FFDD00", min: 220, max: 260}, //
      // {strokeStyle: "#F03E3E", min: 260, max: 300}  // Red
    ],
    limitMax: false,
    limitMin: false,
    highDpiSupport: true,
  };
  demoGauge.setOptions(opts);
  // demoGauge.setTextField(document.getElementById("preview-textfield"));
  demoGauge.minValue = 0;
  demoGauge.maxValue = 3000;
  //demoGauge.set(1844);
  var gaugeText = " - ";
  var gaugeTextEle = document.getElementById("preview-textfield");
  switch (value) {
    case Color.RED:
      demoGauge.set(2625);
      gaugeText = getGaugeText(Color.RED);
      gaugeTextEle.style.color = Color.RED;
      break;
    case Color.GREEN:
      demoGauge.set(375);
      gaugeText = getGaugeText(Color.GREEN);
      gaugeTextEle.style.color = Color.GREEN;
      break;
    case Color.YELLOW:
      demoGauge.set(1875);
      gaugeText = getGaugeText(Color.YELLOW);
      gaugeTextEle.style.color = Color.YELLOW;
      break;
    case Color.ORANGE:
      demoGauge.set(1125);
      gaugeText = getGaugeText(Color.ORANGE);
      gaugeTextEle.style.color = Color.ORANGE;
      break;
  }
  gaugeTextEle.innerHTML = gaugeText;
}

function onItemSelected(feedback) {
  const selectedObj = feedback.selection.value;
  action("dim");
  // Render selected choice to selection div
  document.querySelector(".selection").innerHTML =
    `<div class="selected-item-section">
  <ul class="selected-item">
    <li class="item-info-name">
      Origin Country
    </li>
    <li class="item-info-name">
    -
    </li>
    <li class="item-info-origin">
    ` +
    selectedObj.origin +
    `
    </li>
  </ul>
  <div class="item-info-` +
    selectedObj.origin +
    `">
  </div>
</div>`;

  // Clear Input
  document.querySelector("#autoComplete").value = selectedObj.name;
  console.log("getRating", getRating(selectedObj.type, selectedObj.origin));
  setGaugeValue(getRating(selectedObj.type, selectedObj.origin));
}

function getRating(type, origin, manufacturedIn) {
  if (!origin) {
    return Color.YELLOW;
  }
  if (origin.toLowerCase() === Country.INDIA.toLowerCase()) {
    return Color.GREEN;
  } else if (origin.toLowerCase() === Country.CHINA.toLowerCase()) {
    return Color.RED;
  }

  return Color.ORANGE;
}

function sendMyFeedback() {
  const message = document.querySelector("#feedbackTxt").value;
  sendFeedback(message);
  document.getElementsByClassName("collapsible")[0].style.display = "none";
  document.getElementsByClassName("feedbackSharedDiv")[0].style.display =
    "block";
}

function shareMyQuery(query) {
  shareQuery(query);
}

function getGaugeText(color) {
  switch (color) {
    case Color.GREEN:
      return GreenPhrases[Math.floor(Math.random() * GreenPhrases.length)];
    case Color.RED:
      return RedPhrases[Math.floor(Math.random() * RedPhrases.length)];
    case Color.ORANGE:
      return OrangePhrases[Math.floor(Math.random() * OrangePhrases.length)];
    case Color.YELLOW:
      return YellowPhrases[Math.floor(Math.random() * YellowPhrases.length)];
  }
}
