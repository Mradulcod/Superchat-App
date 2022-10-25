function adduser() {
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("Username",user_name);

    window.location = "Superchat_room.html";
}