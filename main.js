const printToDom = (domString, divID) => {
    document.getElementById(divID).innerHTML += domString;

};

const builddomString = (planetArray) => {
    let domString = "";
    planetArray.forEach((planet) => {

        domString += `<div class="star">`
        domString += `<h1>${planet.name}</h1>`;
        domString += `<img class="planet-image" src=${planet.imageUrl}>`;
        domString += `<p id="hidden">${planet.description}</p>`;
        domString += `</div>`;


    });


    printToDom(domString, "planet-cardContainer");
};




function executeThisFunctionAfterFileLoads() {

    const data = JSON.parse(this.responseText);
    console.log("data", data);
    builddomString(data.planets);
    hoverEventListeners();
    searchCard(data.planets);


}


//This will add hover feature

const hoverEventListeners = () => {
    hoverEventListenersIn();
    hoverEventListenersOut();
    clickEventListenersOut()
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
    displaypic.nextSibling.nextSibling.style.opacity = "0";
    console.log("holla", displaypic);
    }
}

const hoverout = (e) => {
    const displaypic2 = e.target.parentNode.firstChild;
    if (displaypic2.parentNode.className === "star") {
        displaypic2.style.opacity = "1";
        displaypic2.nextSibling.style.opacity = "0.0"
        displaypic2.nextSibling.nextSibling.style.opacity = "0";
        console.log("holla", displaypic2);
    }
}
//clickadd function
const clickEventListenersOut = () => {
    const hovercard3 = document.getElementsByClassName("star");

    for (let k = 0; k < hovercard3.length; k++) {
        hovercard3[k].addEventListener("click", buildstardomString)

    }
};


const buildstardomString = (e)=>{

    const starz = e.target.parentNode;
    document.getElementById("planet-cardContainer").style.display = "none";

    let starstring = "";

    starstring += `<div id="solo" class="planetcard">`;
    starstring += `<button id="close">X</button>`;
    starstring += `<h1>${starz.children[0].innerHTML}</h1>`;
    starstring += `<img class="solo-planet" src=${starz.children[1].src}>`;
    starstring += `<p>${starz.children[2].innerHTML}</p>`;
    starstring += `</div>`;


    printToDom(starstring, "star-cardContainer");
    closestar();
};


const closestar = () => {
    let buttonClose = document.getElementById("close");
    buttonClose.addEventListener("click", closedown);


};

const closedown=()=> {
    window.location.reload(false);
    // document.getElementById("star-cardContainer").style.display = "none";
    // document.getElementById("planet-cardContainer").style.display = "contents"

}


const searchCard = (array) => {
document.getElementById('search').addEventListener('click', () => {
  const search = document.getElementById('inputField').value.toLowerCase();
  let newSearch = [];
  search.split(' ').forEach((word) => {
    array.forEach((planet) => {
      if (planet.name.toLowerCase().includes(word)) {
        newSearch.push(planet);
      }
    });
  });

  console.log(newSearch);
  builddomString(newSearch);
  hoverEventListeners();

});
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

