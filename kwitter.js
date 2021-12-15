function login() {
    uname = document.getElementById("usern").value;
    localStorage.setItem("user_name", uname);
    window.location="kwitter_room.html";
}