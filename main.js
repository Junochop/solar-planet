console.log("hi");

const printToDom = (domString, divID) => {
    document.getElementById(divID).innerHTML += domString;

};

const builddomString = (planetArray) => {
    let domString = "";
    planetArray.forEach((planet) => {
        
        domString += `<div class="star">`
        domString += `<h1>${planet.name}</h1>`;
        domString += `<img class="planet-image" src=${planet.imageUrl}>`;
        domString += `</div>`;


    });
    

    printToDom(domString, "planet-cardContainer");
};



function executeThisFunctionAfterFileLoads() {

    const data = JSON.parse(this.responseText);
    console.log("data", data);
    builddomString(data.planets);
    hoverEventListeners(); 
   
    //hoverEventListeners();<this should be add event listerner
}

//This will add hover feature


const hoverEventListeners = () => {
    const hovercards = document.getElementsByClassName("star");
    for (let i =0; i < hovercards.length; i++){
    hovercards[i].addEventListener("click", typesome) 
    }
};

const typesome =(e) => {
 console.log("hi");
}











function WTF() {
    console.log("something went wrong");
}

const startApplication = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener("load", executeThisFunctionAfterFileLoads);
    myRequest.addEventListener("error", WTF);
    myRequest.open("GET", "planets.json");
    myRequest.send();
    console.log("myrequest", myRequest);
};

startApplication();