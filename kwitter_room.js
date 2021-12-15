
var firebaseConfig = {
      apiKey: "AIzaSyBi1kXA3qaj3KIjbHMZ0nru0gwW7HBTP8U",
      authDomain: "kwitter-77484.firebaseapp.com",
      databaseURL: "https://kwitter-77484-default-rtdb.firebaseio.com",
      projectId: "kwitter-77484",
      storageBucket: "kwitter-77484.appspot.com",
      messagingSenderId: "455328768671",
      appId: "1:455328768671:web:a0d0fe37494906528538aa",
      measurementId: "G-GC25RCETD7"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  usern=localStorage.getItem("user_name");
  document.getElementById("welname").innerHTML="Welcome "+usern;

  function addroom() {
        roomn=document.getElementById("roomn").value;
        localStorage.setItem("room_name",roomn);
        firebase.database().ref("/").child(roomn).update({
      purpose:"adding room name"
        });
        window.location="kwitter_page.html"
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML=row;
      //End code
      });});}
getData();

function redirectToRoomName(name) {
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html"
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}