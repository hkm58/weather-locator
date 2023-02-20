function updatelosAngelestime() {
  // Los angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesDateElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("Do MMMM YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm[<small>]PM[</small>]"
  );
}
updatelosAngelestime();
setInterval(updatelosAngelestime, 1000);
//Paris
let ParisElement = document.querySelector("#paris");
let parisDateElement = parisElement.querySelector(".date");
let parisElement = parisDateElement.querySelector(".time");
let parisTime = moment().tz("Europe/Paris");

parisElement.innerHTML = parisTime.format("Do MMMM YYYY");
parisElement.innerHTML = parisTime.format("h:mm[<small>]PM[</small>]");
