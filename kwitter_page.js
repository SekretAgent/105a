var firebaseConfig = {
    apiKey: "AIzaSyDXZrSrzDRQXktJ6jdY08cT_6QRYbJUNCk",
    authDomain: "chat-web-app-4b8b5.firebaseapp.com",
    databaseURL: "https://chat-web-app-4b8b5-default-rtdb.firebaseio.com",
    projectId: "chat-web-app-4b8b5",
    storageBucket: "chat-web-app-4b8b5.appspot.com",
    messagingSenderId: "165937181899",
    appId: "1:165937181899:web:6c90cc34cfeaa7f634174e"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  //YOUR FIRE BASE LINKS
  
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");
  
  function send()
  {
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
  name:user_name,
  message:msg,
  like:0
  });
  
  document.getElementById("msg").value = "";
  }
  
  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
  //Start code
    console.log(firebase_message_id);  
    console.log(message_data);
    name= message_data['name'];
   message = message_data['message'];
  like = message_data['like'];
  name_with_tag = "<h4>" + name +"</h4>";
  message_with_tag = "<h4 class='message_h4'>" + messsage + "<?h4>"; 
  like_button = "<button class='btn btn-waring' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>Likes :"+like+"</button>";
  
    row = name_with_tag + message_with_tag + like_button;
    document.getElementById("output").innerHTML +=row;
  //End code
    } });  }); }
  getData();
  
  function updateLike(message_id)
  {
   console.log("clicked on like button -" + message_id);
   button_id = message_id;
   likes = document.getElementById(button_id).value;
  updated_ikes = Number(likes) + 1;
  console.log(updated_links);
  
   firebase.datbase().ref(rom_name).child(message_id).update({
    like : updated_likes
   });
  }
  
  