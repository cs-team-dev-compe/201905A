$(function () {
    $("#header").load("templates/_header.html");
    $("#footer").load("templates/_footer.html");
    $("#main").load("/home.html");
});




// りんくを押した時

function openYield(path) {
    $("#main").load(path + ".html");
}
