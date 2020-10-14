function afficherMessage() {
    var element = document.getElementById("contenu");

    document.getElementById("destination").innerHTML = element.innerHTML;
    element.innerHTML = "";

    element.style.backgroundColor = "crimson";


    var elements = document.getElementsByTagName("div");
    for (const div of elements) {
        div.style.width = "800px";
    }
}