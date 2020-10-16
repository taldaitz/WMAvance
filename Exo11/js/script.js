var counter = 0;
$(document).ready(function (){

    $("button").click(function () {
        var filename = this.id + ".html";

        $("main .article").addClass("oldArticle");

        $.get("articles/" + filename, null, function (response){
            var clone = $("#article").clone();
            clone.attr("id", "resultat" + counter++);
            clone.html(response);

            $("main").prepend(clone);

            clone.fadeIn(2000);

        });
    });


});