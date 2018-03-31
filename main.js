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
   
    //hoverEventListeners();<this should be added event listerner
}

//This will add hover feature

const hoverEventListeners = () => {
    hoverEventListenersIn();
    hoverEventListenersOut(); 
}

const hoverEventListenersIn = () => {
    const hovercards = document.getElementsByClassName("star");
    for (let i =0; i < hovercards.length; i++){
    hovercards[i].addEventListener("mouseover", hoverin) 
    }
};
const hoverEventListenersOut = () => {
    const hovercard2 = document.getElementsByClassName("star");
    for (let j = 0; j < hovercard2.length; j++) {
        hovercard2[j].addEventListener("mouseout", hoverout)
    }
};

const hoverin =(e) => {
    const displaypic = e.target.parentNode.firstChild;
    if(displaypic.parentNode.className === "star"){
    displaypic.style.opacity = "0.0";
    displaypic.nextSibling.style.opacity = "1";
    console.log("holla", displaypic);
    }
}

const hoverout = (e) => {
    const displaypic2 = e.target.parentNode.firstChild;
    if (displaypic2.parentNode.className === "star") {
        displaypic2.style.opacity = "1";
        displaypic2.nextSibling.style.opacity = "0.0";
        console.log("holla", displaypic2);
    }
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