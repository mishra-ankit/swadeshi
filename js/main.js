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
