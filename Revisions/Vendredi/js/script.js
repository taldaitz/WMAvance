var titreStocke = "";

$(document).ready(function () {

    $("div").click(function () {
        if(titreStocke == "") {
            var url = "articles/" + this.id + ".html";
            titreStocke = $(this).html();

            $("div").hide();
            $(this).load(url);
            $(this).show();
            $(this).addClass("articleAffiche");
            
        } else {
            $("div").removeClass("articleAffiche");
            $("div").show();
            $(this).html(titreStocke);

            titreStocke = "";
        }

    });

});