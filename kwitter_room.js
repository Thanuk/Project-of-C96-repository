
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDOtLmWIW5UEXUvkNg7TgtkzATV7DnAlx4",
      authDomain: "letschat-app-db.firebaseapp.com",
      databaseURL: "https://letschat-app-db-default-rtdb.firebaseio.com",
      projectId: "letschat-app-db",
      storageBucket: "letschat-app-db.appspot.com",
      messagingSenderId: "302383249263",
      appId: "1:302383249263:web:9df3b126fab7cfe7bc9a9a"
};
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
    
    username = localStorage.getItem("Username of the user : ");
    actual_username = username.toUpperCase();
    document.getElementById("User_name").innerHTML = "Welcome " + actual_username + "!";
    console.log("Username = " + actual_username);
    
function addRoom(){
      room_name = document.getElementById("Add_Room_input").value;
      localStorage.setItem("Room Name", room_name);
      firebase.database().ref("/").child(room_name).update({
             purpose: "adding room name"
      });
      window.location = "kwitter_page.html";
}
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("Room Names Enter in Kwitter are" + Room_names);
       row = "<div class='room_name' id="+Room_names +" onclick='redirectToRoomName(this.id)'> #"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
      //End code
      });
   });
}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("Room Name", name);
      window.location = "kwitter_page.html";
}