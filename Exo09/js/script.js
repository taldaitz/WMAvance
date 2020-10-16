function afficherZone(bouton, idZone, zoneHeight ) {
    var zone = document.getElementById(idZone);

    zone.style.height = zoneHeight;
    bouton.style.display = "none";
}


function afficherNomPrenom() {
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;

    if(nom != "" && prenom != "") {
        document.getElementById("titrePrincipal").innerHTML = "Inscription de " + prenom 
                + " " + nom;
    }
}