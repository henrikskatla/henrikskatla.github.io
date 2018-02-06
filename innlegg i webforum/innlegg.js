function setup() {
    // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCY-NGoKnHy6adA19Fhcu78rF5QNymWbbQ",
    authDomain: "webchat-cf453.firebaseapp.com",
    databaseURL: "https://webchat-cf453.firebaseio.com",
    projectId: "webchat-cf453",
    storageBucket: "webchat-cf453.appspot.com",
    messagingSenderId: "176117314850"
  };
  firebase.initializeApp(config);
    let divListe = document.getElementById("liste");

    let ref = firebase.database().ref("innlegg");

    function visInnleg(snapshot) {
        let innleggnr = snapshot.key;
        let info = snapshot.val();
        divListe.innerHTML += `
          <div>
            <p>Innlegg : ${info.melding}
          </div>
        `;
    }
    ref.on("child_added", visInnlegg);

}