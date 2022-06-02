var firebaseConfig = {
    apiKey: "AIzaSyAq20grSfT_66HQaMCaK7JK9FbOZgM_vz4",
    authDomain: "kwitter-chat-b30b3.firebaseapp.com",
    databaseURL: "https://kwitter-chat-b30b3-default-rtdb.firebaseio.com",
    projectId: "kwitter-chat-b30b3",
    storageBucket: "kwitter-chat-b30b3.appspot.com",
    messagingSenderId: "719837717534",
    appId: "1:719837717534:web:f074c652d8c46639dbfa0f"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}
