let mybutton = document.getElementById("Top");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}


/* Button click */
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}