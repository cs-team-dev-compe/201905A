$(function () {
    $("#header").load("templates/header.html");
    $("#footer").load("templates/footer.html");
    $("#main").load("home.html");
});




// りんくを押した時

function openYield(path) {
    $("#main").load(path + ".html");
}
