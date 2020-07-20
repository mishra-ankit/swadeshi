function setGaugeValue(value) {
  let opts = {
    // options here
  };
  const target = document.getElementById("demo");
  const demoGauge = new Gauge(target).setOptions(opts);

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
  demoGauge.set(Math.random() * 3000);

  function setGaugeValue(value) {
    setTimeout(function () {
      demoGauge.set(value);
    }, 1000);
  }

  var gaugeText = " - ";
  var gaugeTextEle = document.getElementById("preview-textfield");
  var wipDiv = document.getElementById("work-in-progress");
  wipDiv.style.display = "block";
  switch (value) {
    case Color.RED:
      //demoGauge.set(2625);
      setGaugeValue(2625);
      gaugeText = getGaugeText(Color.RED);
      gaugeTextEle.style.color = Color.RED;
      break;
    case Color.GREEN:
      //demoGauge.set(375);
      setGaugeValue(375);
      gaugeText = getGaugeText(Color.GREEN);
      gaugeTextEle.style.color = Color.GREEN;
      break;
    case Color.YELLOW:
      //demoGauge.set(1875);
      setGaugeValue(1875);
      gaugeText = getGaugeText(Color.YELLOW);
      gaugeTextEle.style.color = Color.YELLOW;
      break;
    case Color.ORANGE:
      //demoGauge.set(1125);
      setGaugeValue(1125);
      gaugeText = getGaugeText(Color.ORANGE);
      gaugeTextEle.style.color = Color.ORANGE;
      break;
  }
  gaugeTextEle.innerHTML = gaugeText;
}

window.addEventListener("popstate", function (event) {
  if (event.state && event.state.name) {
    onItemSelected(event.state);
  }
});

function getLogoURL(obj) {
  return obj.value && obj.value.logo;
}

function onItemSelected(selectedObj) {
  action("dim");
  // Render selected choice to selection div
  document.querySelector(".selection").innerHTML =
    `<div class="selected-item-section">
          <div class="selected-item">
            <div class="selected-item-text sub-heading">Origin Country - </div>
            <div class="selected-country-section">
              <div class="selected-country-name sub-heading" id="selected-country-name"></div>
              (<a target="_blank" id="selected-country-source">source</a>)
            </div>
          </div>
          <div class="item-info-` +
    selectedObj.origin +
    `"></div>
        </div>`;
  document.querySelector("#selected-country-name").innerText =
    selectedObj.origin;
  document.querySelector("#selected-country-source").href = selectedObj.source;
  document.querySelector("#autoComplete").value = selectedObj.name;
  if (selectedObj.hasChineseInvestment) {
    document.getElementById("note").innerText =
      "*The company has Chinese investments";
  } else {
    document.getElementById("note").innerText = "";
  }
  document.querySelector("#help-div").classList.remove("hidden");
  document.querySelector("#result-div").classList.add("card", "result-div");
  const rating = getRating(selectedObj);
  handleAlternatives(rating, selectedObj);

  setGaugeValue(rating);
  gtag("event", "found", {
    event_label: selectedObj.name,
    value: selectedObj.name,
  });

  const typingEffect = document.querySelector(".typing-effect");
  typingEffect.style.display = "none";
}

function handleAlternatives(rating, selectedObj) {
  const alternativesSection = document.querySelector("#alternatives-section");
  alternativesSection.classList.add("hidden");

  if (rating === Color.RED) {
    var alternatives = getAlternatives(selectedObj);
    if (alternatives && alternatives.size > 0) {
      setupBaseForAlternatives(alternativesSection, selectedObj.tags);
      displayAlternatives(alternativesSection, alternatives);
    }
  }
}

function setupBaseForAlternatives(alternativesSection, tags) {
  alternativesSection.innerHTML = "";
  alternativesSection.classList.remove("hidden");
  alternativesSection.innerHTML = `<span class="sub-heading">Alternatives &#128071;</span></br>`;
}

function sentenceCase(str) {
  return (
    str
      // insert a space before all caps
      .replace(/([A-Z])/g, " $1")
      // uppercase the first character
      .replace(/^./, (str) => str.toUpperCase())
  );
}

function displayAlternatives(alternativesSection, alternatives) {
  for (const [key, value] of alternatives.entries()) {
    var tag = document.createElement("SPAN");
    tag.classList.add("badge", "badge-warning", "margin-2");
    var tagText = document.createTextNode(sentenceCase(key) + " :");
    tag.appendChild(tagText);
    alternativesSection.appendChild(tag);
    value.forEach((alt) => {
      var node = document.createElement("SPAN");
      node.classList.add("badge", "badge-info", "badge-pill", "margin-2");
      var textnode = document.createTextNode(alt);
      node.appendChild(textnode);
      alternativesSection.appendChild(node);
    });
    alternativesSection.appendChild(document.createElement("BR"));
  }
}

function getAlternatives(selectedObj) {
  const alternatives = new Map();
  if (selectedObj && selectedObj.tags && selectedObj.tags.length > 0) {
    selectedObj.tags.forEach((tag) => {
      var altCompanies = new Set();
      indianProducts[tag].forEach((alt) => {
        altCompanies.add(alt.name);
      });
      alternatives.set(tag, altCompanies);
    });
  }
  return alternatives;
}

function getRating({ type, origin, hasChineseInvestment }) {
  if (!origin) {
    return Color.YELLOW;
  }
  if (origin.toLowerCase() === Country.INDIA.toLowerCase()) {
    if (hasChineseInvestment) {
      return Color.ORANGE;
    }
    return Color.GREEN;
  } else if (origin.toLowerCase() === Country.CHINA.toLowerCase()) {
    return Color.RED;
  }

  return Color.ORANGE;
}

function getGaugeText(color) {
  switch (color) {
    case Color.GREEN:
      return (
        GreenPhrases[Math.floor(Math.random() * GreenPhrases.length)] +
        " &#" +
        GreenEmoticons[Math.floor(Math.random() * GreenEmoticons.length)] +
        ";"
      );
    case Color.RED:
      return (
        RedPhrases[Math.floor(Math.random() * RedPhrases.length)] +
        " &#" +
        RedEmoticons[Math.floor(Math.random() * RedEmoticons.length)] +
        ";"
      );
    case Color.ORANGE:
      return (
        OrangePhrases[Math.floor(Math.random() * OrangePhrases.length)] +
        " &#" +
        OrangeEmoticons[Math.floor(Math.random() * OrangeEmoticons.length)] +
        ";"
      );
    case Color.YELLOW:
      return YellowPhrases[Math.floor(Math.random() * YellowPhrases.length)];
  }
}

function showResultFromQueryParam() {
  const urlParams = new URLSearchParams(window.location.search);
  const searchParam = urlParams.get("q");
  const match =
    data &&
    data.find((item) => item.name.toLowerCase() === searchParam.toLowerCase());
  if (match) {
    onItemSelected(match);
  }
}

function typingEffect() {
  var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };

  TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  window.onload = function () {
    var elements = document.getElementsByClassName("txt-rotate");
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute("data-rotate");
      var period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };
}

typingEffect();
