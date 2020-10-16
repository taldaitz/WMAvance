$(document).ready(function() {

   $("#saisie").keyup(function () {
        var saisie = $("#saisie").val();

        saisie = saisie.replace(/\n/g, "<br>");

        saisie = saisie.replace("jquery", '<a href="https://jquery.com/">jquery</a>');

       $("#contenu").html(saisie);
   });

});