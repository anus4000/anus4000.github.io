var colors = "roygbp";

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("div").onkeyup = retro;
    document.getElementById("div").onmousedown = function() {
        this.innerHTML = this.innerText;
    };
});

function retro(e) {
    if (e.which == 13) {
        var l = document.getElementById("div").innerText;
        var h = "";
        for (var i = 0; i < l.length; i++) {
            if (l[i] != " ") {
                h += '<p class="'+colors[i%colors.length]+'" style="z-index:'+(l.length-i)+'">'+l[i]+'</p>';
            } else {
                h += " ";
            }
        }
        document.getElementById("div").innerHTML = h;
    }
}