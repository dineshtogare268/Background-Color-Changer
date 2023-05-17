function changeBG(color) {
  document.body.style.background = color;

  let txt = document.getElementsByClassName("text");

  if (color == "#a52a2a" || color == "#0000ff" || color == "#008000") {
    for (let e of txt) {
      e.style.color = "white";
    }
  } else {
    for (let e of txt) {
      e.style.color = "black";
    }
  }
}
