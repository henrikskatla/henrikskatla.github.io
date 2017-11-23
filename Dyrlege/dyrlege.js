<script src="https://www.gstatic.com/firebasejs/4.6.2/firebase.js"></script>
<script>
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
</script>
    let divListe = document.getElementById("liste");
    let ref = firebase.database().ref("kunde")

    function visKunder(snapshot) {
        let kundenr = snapshot.key;
        let info = snapshot.val();
        divListe.innerHTML += `
          <div>
            <h4>Kunde nr ${kundenr}</h4>
            <ul>
             <li>${info.fornavn} ${info.etternavn}
             <li>Epost : ${info.epost}
             <li>Mobil : ${info.mobil}             
            </ul>
          </div>
        `;
    }
    ref.on("child_added", visKunder)

}

let divListe = document.getElementById("liste");
let ref = firebase.database().ref("dyr")

function visDyr(snapshot) {
    let dyrnr = snapshot.key;
    let info = snapshot.val();
    divListe.innerHTML += `
      <div>
        <h4>Dyr nr ${dyrnr}</h4>
        <ul>
         <li>Art ${info.art}
         <li>Kjønn : ${info.kjønn}
         <li>Vekt : ${info.vekt}  
         <li>Fødselsdato : ${info.fdato}
         <li>Kundenr : ${info.kundenr}           
        </ul>
      </div>
    `;
}
ref.on("child_added", visKunder)

}
