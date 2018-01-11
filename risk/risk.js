function setup(){
var config = {
    apiKey: "AIzaSyDoJ7SgRSRv2yBSNFe8ixL3fnxEDTTdXhM",
    authDomain: "risk-repitisjon.firebaseapp.com",
    databaseURL: "https://risk-repitisjon.firebaseio.com",
    projectId: "risk-repitisjon",
    storageBucket: "",
    messagingSenderId: "53266940999"
  };
  firebase.initializeApp(config);

  let database = firebase.database();

  let land = database.ref("land");
  land.on("child_added", visLand)

  let kort = database.ref("kort");
  kort.on("child_added", visKort)

  let spiller = database.ref("spiller");
  spiller.on("child_added", visSpiller)
}

let ref = firebase.database().ref("dyr")

function visLand(snapshot) {
  let land = snapshot.key;
  let divTarget = document.getElementById("land");
  divTarget.innerHTML += `<div class="box">${land}</div>`
}

function visKort(snapshot) {
  let kort = snapshot.key;
  let divTarget = document.getElementById("kort");
  divTarget.innerHTML += `<div class="sbox">${kort}</div>`
}

function visSpiller(snapshot) {
  let spiller = snapshot.key;
  let divTarget = document.getElementById("spiller");
  divTarget.innerHTML += 
  `<div class="abox">
    <br>Navn ${spiller.navn}
    <br>Farge ${spiller.farge}
    <br>Alder ${spiller.alder}
    ${spiller}
  </div>`
}