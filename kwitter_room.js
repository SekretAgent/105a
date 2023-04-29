function getData() {firebase.database().ref("/").on('value', 
function (snapshot) {document.getElementById("output").innerHTML 
"";snapshot.forEach(function(childSnapshot) {childKey
childSnapshot.key;
Room_names = childKey;
//Start code
row = "<div class 'room_name' id = "+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
//End code
});
});
}
getData();

firebase.database().ref(room_name.push)({
    {
    name:user_name,
    message:msg,
    like:0
    }
});