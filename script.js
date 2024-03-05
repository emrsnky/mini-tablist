let london = document.getElementById("london");
let paris = document.getElementById("paris");
let tokyo = document.getElementById("tokyo");
/*--buttons--*/
let tab1Button = document.getElementById("tab1-button");
let tab2Button = document.getElementById("tab2-button");
let tab3Button = document.getElementById("tab3-button");

function london1() {
  london.style.display = "block";

  tab1Button.style.backgroundColor = "#bcb9b9";
  tab2Button.style.backgroundColor = "inherit";
  tab3Button.style.backgroundColor = "inherit";
  tokyo.style.display = "none";
  paris.style.display = "none";
}
function tokyo1() {
  tokyo.style.display = "block";
  tab3Button.style.backgroundColor = "#bcb9b9";

  tab1Button.style.backgroundColor = "inherit";
  tab2Button.style.backgroundColor = "inherit";
  london.style.display = "none";
  paris.style.display = "none";
}

function paris1() {
  paris.style.display = "block";
  tab2Button.style.backgroundColor = "#bcb9b9";
  tab1Button.style.backgroundColor = "inherit";
  tab3Button.style.backgroundColor = "inherit";
  tokyo.style.display = "none";
  london.style.display = "none";
}
