function setup() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyDkiJEGFLrDXaHBfX9knLnFY9yNzPAmHSI",
        authDomain: "civland-b1f97.firebaseapp.com",
        databaseURL: "https://civland-b1f97.firebaseio.com",
        projectId: "civland-b1f97",
        storageBucket: "civland-b1f97.appspot.com",
        messagingSenderId: "630904160303"
    };
    firebase.initializeApp(config);
    let divListe = document.getElementById("liste");
    let ref = firebase.database().ref("nations")

    function visLand(snapshot) {
        let navn = snapshot.key;
        let info = snapshot.val();
        divListe.innerHTML += `
          <div>
            <h4>${navn}</h4>
            <ul>
             <li>Capital ${info.capital}
             <li>${info.title} ${info.leader}
             <li> Perks
                <ul>
                    <li> Money: ${info.perk.money}
                    <li> Move: ${info.perk.move}
                    <li> War: ${info.perk.war}
                    <li> Science: ${info.perk.science}
                </ul>
            </ul>
          </div>
        `;
    }
    ref.on("child_added", visLand)

}
