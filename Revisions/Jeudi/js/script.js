function etendre(idcarre) {
    var carre = document.getElementById(idcarre);
    var counter = parseInt(carre.style.animationIterationCount == "" ? 0 : carre.style.animationIterationCount) + 1;
    carre.style.animationIterationCount = counter.toString();
}