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

      let inpLand = document.getElementById("land");
      let inpRegion = document.getElementById("region");

      let btnLagre = document.getElementById("lagre");
      btnLagre.addEventListener("click", lagreData);

      function lagreData (e) {
          let land = inpLand.value;
          let region = inpRegion.value;
          let ref = database.ref("land/" + land);
          ref.set( { kortid});
      }
}