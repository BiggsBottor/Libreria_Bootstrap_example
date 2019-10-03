//animacíon para cambiar el color del logo, intercambiando entre 2 imágenes
$(document).ready(function() {
    $("#Logo-link-id").hover(function() { //hover in
            $("#Logo-img-id").attr("src", "images/logo-la-llibreria-hover.png");
        },
        function() { //hover out
            $("#Logo-img-id").attr("src", "images/logo-la-llibreria.png");
        });
});