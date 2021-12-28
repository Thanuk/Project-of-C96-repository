//YOUR FIREBASE LINKS
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

user_name = localStorage.getItem("Username of the user : ");
room_name = localStorage.getItem("Room Name");

function send(){
      msg_from_the_input = document.getElementById("msg_input").value;
      firebase.database().ref(room_name).push({
            Name:user_name,
            Message:msg_from_the_input,
            Like:0
      });
      document.getElementById("msg_input").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("Username of the user : ");
      localStorage.removeItem("Room Name");
      
      window.location = "index.html";
}

