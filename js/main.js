// ******** hotspotSnacks ********
document
  .querySelector("#hotspotSnacks")
  .addEventListener("mouseover", mouseOverHead);
document.querySelector("#hotspotSnacks").addEventListener("mouseout", mouseOut);
document.querySelector("#hotspotSnacks").addEventListener("click", clickHead);

function mouseOverHead() {
  document.querySelector("#hotspotSnacks").style.fill = "var(--color-head-bg)";
}

function mouseOut() {
  document.querySelector("#hotspotSnacks").style.fill = "red";
}

function clickHead() {
  animateBoxes();

  document.querySelector(".info-text > h2").textContent = "Snacks";
  document.querySelector(".placeholder").textContent =
    "Snacks er tømmermændenes version af en nødplan. Din krop skriger ikke på hjælp – den skriger på chips. Helst de helt billige fra Netto.";

  document.querySelector("#efficiency").innerHTML = `
    <h3>Hvorfor virker det?</h3>
    <p>Salt og carbs fungerer som et venligt klap på skulderen til din ødelagte krop. De stabiliserer blodsukkeret og giver dig energi nok til at overleve dagen uden at græde (for meget).</p>`;

  document.querySelector("#requirement").innerHTML = `
    <h3>Hvad skal du spise?</h3>
    <p>Chips, toast, kiks, frugt… basically alt der knaser, smager af salt og ikke kræver nogen form for madlavning. Din mave arbejder på halv kraft – giv den en chance.</p>`;
}

// ******** hotspotWolt ********
document
  .querySelector("#hotspotWolt")
  .addEventListener("mouseover", mouseOverBff);
document.querySelector("#hotspotWolt").addEventListener("mouseout", mouseBff);
document.querySelector("#hotspotWolt").addEventListener("click", clickBff);

function mouseOverBff() {
  document.querySelector("#hotspotWolt").style.fill = "var(--color-head-bg)";
}

function mouseBff() {
  document.querySelector("#hotspotWolt").style.fill = "red";
}

function clickBff() {
  animateBoxes();

  document.querySelector(".info-text > h2").textContent = "Wolt";
  document.querySelector(".placeholder").textContent =
    "Når du ikke kan bevæge dig længere end fra sofaen til fjernbetjeningen, så ringer man til Wolt. Det føles som at have en personlig tjener, der ikke dømmer dine valg.";

  document.querySelector("#efficiency").innerHTML = `
    <h3>Hvorfor virker det?</h3>
    <p>Du slipper for at stå op, tænke eller eksistere for meget. Maden kommer direkte til dig, mens du ligger og forhandler med livet. Det er ren tømmermændsluksus.</p>`;

  document.querySelector("#requirement").innerHTML = `
    <h3>Hvad skal du bestille?</h3>
    <p>Burgere, bowls, pomfritter – alt comfort food der føles som et varmt kram fra en fremmed. Bare undgå stærk mad… medmindre du er typen, der elsker at gamble.</p>`;
}

// ******** hotspotVaeske ********
document
  .querySelector("#hotspotVaeske")
  .addEventListener("mouseover", mouseOverKalender);
document
  .querySelector("#hotspotVaeske")
  .addEventListener("mouseout", mouseKalender);
document
  .querySelector("#hotspotVaeske")
  .addEventListener("click", clickKalender);

function mouseOverKalender() {
  document.querySelector("#hotspotVaeske").style.fill = "var(--color-head-bg)";
}

function mouseKalender() {
  document.querySelector("#hotspotVaeske").style.fill = "red";
}

function clickKalender() {
  animateBoxes();

  document.querySelector(".info-text > h2").textContent = "Væske";
  document.querySelector(".placeholder").textContent =
    "Din krop består normalt af 60% vand. Efter en bytur består den af 4% vand og 96% regrets. Derfor: drik noget, for Guds skyld.";

  document.querySelector("#efficiency").innerHTML = `
    <h3>Hvorfor virker det?</h3>
    <p>Alkohol suger alt væske ud af kroppen som en trist svamp. Vand og elektrolytter hjælper med at gendanne det, så hovedpinen stopper med at spille trommer i din hjerne.</p>`;

  document.querySelector("#requirement").innerHTML = `
    <h3>Det bedste at drikke</h3>
    <p>Vand, saftevand, sportsdrikke, kokosvand. Undgå kaffe hvis du allerede ryster – du har været igennem nok.</p>`;
}

/*************************************/

function animateBoxes() {
  document.querySelector("#efficiency").classList.remove("hide");
  document.querySelector("#efficiency").classList.add("fadeIn");
  document.querySelector("#requirement").classList.remove("hide");
  document.querySelector("#requirement").classList.add("fadeIn");

  document
    .querySelector("#requirement")
    .addEventListener("animationend", cleanup);
}
function cleanup() {
  console.log("cleanup");

  document
    .querySelector("#requirement")
    .removeEventListener("animationend", cleanup);

  document.querySelector("#efficiency").classList.remove("fadeIn");
  document.querySelector("#requirement").classList.remove("fadeIn");
}
