function setup() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCEqb5K_D4BYRXwmmETXiKplrhoyaONPU8",
        authDomain: "kunder-d93b5.firebaseapp.com",
        databaseURL: "https://kunder-d93b5.firebaseio.com",
        projectId: "kunder-d93b5",
        storageBucket: "kunder-d93b5.appspot.com",
        messagingSenderId: "367752216880"
      };
    firebase.initializeApp(config);
    let spanKunde = document.getElementById("kundevelger");
    let divDyr = document.getElementById("dyr");
    
    
    let ref = firebase.database().ref("kunde");

    ref.once("value").then(function (snapshot) {
        let kundene = snapshot.val();
        if (kundene) {
            let dropBox = makeDrop(kundene);
            spanKunde.innerHTML = dropBox;

            let drpKunde = document.getElementById("kundenr");
            drpKunde.addEventListener("change", visDyr);
        }
    });

    function visDyr(e) {
        let valgt = +document.getElementById("kundenr").value;
        let ref = firebase.database().ref("dyr").orderByChild("kundenr").equalTo(valgt);
        ref.once("value").then(function (snapshot) {
            let dyrene = snapshot.val();
            if (dyrene) {
                let dyrnr = Object.keys(dyrene);
                let dyrliste = `<ol>` +
                    dyrnr.map(e => `<li>${dyrene[e].navn} ${dyrene[e].art}</li>`).join("")
                    + `</ol>`;
                divDyr.innerHTML = dyrliste;

            }
        });
    }


    function makeDrop(kunder) {
        let box = '<select id="kundenr">';
        let kundenr = Object.keys(kunder);
        let navn = kundenr.map(e =>
            `<option value="${e}">${kunder[e].fornavn}</option>`);
        box += navn.join("") + "</select>";
        return box;
    }

}