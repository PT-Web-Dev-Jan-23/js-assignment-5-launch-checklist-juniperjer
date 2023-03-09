// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
    let div = document.getElementByID("missionTarget");
    div.innerHTML = `
    <h2>Mission Destination</h2>
    <ol>
        <li>Name:${name} </li>
        <li>Diameter: ${diameter} </li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
    </ol>
    <img src="${imageUrl}">
    `;
}

function validateInput(testInput) {
let userInput = Number (testInput);
    if (testInput = ""){
        return "Empty";
    } else if (isNaN(userInput)){
        return "Not a Number";
    } else if (isNaN(userInput)=== false){
        return "Is a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.querySelector("name=pilotStatus");
    let copilotStatus = document.querySelector("name=copilotStatus");
    let fuelStatus = document.querySelector("name=fuelStatus");
    let cargoStatus = document.querySelector("name=cargoStatus");

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty"|| validateInput(fuelLevel) === "Empty"|| validateInput(cargoLevel) === "Empty") {
        alert("All fields are required!");
     } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number"|| validateInput(fuelLevel) === "Not a Number"|| validateInput(cargoLevel) === "Not a Number") {
        alert("Enter Valid Fields");
     } else {
        list.style.visibility = "visible";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch!`
        copilotStatus.innerHTML = `Copilot ${copilot} is ready for launch!`
        let launchStatus = document.getElementByID("launchStatus")
        if (fuelLevel <10000 && cargoLevel <10000){
            launchStatus.innerHTML = 'Shuttle Not Ready For Launch';
            launchStatus.style.color = 'red';
            fuel.innerHTML = `Fuel level high enough for launch`;
            cargo.innerHTML = `Cargo level is too heavy for launch`;
        } else if (fuelLevel >10000 && cargoLevel >10000){
            launchStatus.innerHTML = 'Shuttle Not Ready For Launch';
            launchStatus.style.color = 'red';
            fuel.innerHTML = `Fuel level is too low for launch`;
            cargo.innerHTML = `Cargo level is low enough for launch`;
        } else if (fuelLevel >10000 && cargoLevel <10000){
            launchStatus.innerHTML = 'Shuttle Not Ready For Launch';
            launchStatus.style.color = 'red';
            fuel.innerHTML = `Fuel level is too low for launch`;
            cargo.innerHTML = `Cargo level is low heavy for launch`;
        } else {
            launchStatus.innerHTML = 'Shuttle is Ready For Launch';
            launchStatus.style.color = 'green';
            fuel.innerHTML = `Fuel level is high enough for launch`;
            cargo.innerHTML = `Cargo level is low enough for launch`;
        }
    }
}

async function myFetch() {
    let planetsReturned;
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let randomPlanets = Math.floor(Math.random().planet.length);
    return planet[randomPlanets];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
