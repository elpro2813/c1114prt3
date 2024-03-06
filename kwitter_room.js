const firebaseConfig = {
      apiKey: "AIzaSyD8buw4sodEeDCpIITXXpkdF9AxmasEpTw",
      authDomain: "kweeter-ba1ee.firebaseapp.com",
      databaseURL: "https://kweeter-ba1ee-default-rtdb.firebaseio.com",
      projectId: "kweeter-ba1ee",
      storageBucket: "kweeter-ba1ee.appspot.com",
      messagingSenderId: "485698049753",
      appId: "1:485698049753:web:9becbfe67bb82e5a3d50c8"
    };
    
    // Initialize Firebase
    const app = firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "¡Te damos la bienvenida. " + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);
  
      window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicia el código
        console.log("Nombre de la sala: " + Room_names);
       row = "<div class= 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.idp >#"+Room_names +"</div><hr>";
         document.getElementById("output").innerHTML += row;
      //Finaliza el código
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "kwitter.html";
}
