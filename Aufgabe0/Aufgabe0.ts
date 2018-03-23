
function Willkommen() {
    var name = prompt("Enter your name", "");
    if (name != null) {
        document.getElementById("Typ").innerHTML =
            "Hallo " + name + "! Willkommen auf der Mini-Website.";
    }
}