var firebaseConfig = {
    apiKey: "AIzaSyC8ay3ljar6RQCMIQIWINVS1WHLl_oxSJk",
    authDomain: "lets-chat-4dbb3.firebaseapp.com",
    databaseURL: "https://lets-chat-4dbb3-default-rtdb.firebaseio.com",
    projectId: "lets-chat-4dbb3",
    storageBucket: "lets-chat-4dbb3.appspot.com",
    messagingSenderId: "255566087245",
    appId: "1:255566087245:web:4e1a3455548a3fcf9d0804"
  };
  
  firebase.initializeApp(firebaseConfig);
  u_name = localStorage.getItem("user_name_key");
  document.getElementById("user_name").innerHTML="welcome "+u_name;

  function addRoom(){
    room_name = document.getElementById("room_name").value;


    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
  }

  function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room Name - "+ Room_names);
row = "<div class='room_name' id="+room_names+" onclick='redirectToRoomName(this.id)'>#"+ room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
//End code
});});}
getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}