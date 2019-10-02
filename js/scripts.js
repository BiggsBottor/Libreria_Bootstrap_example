$(document).ready(function() {
    $("#Logo-link-id").hover(function() {
            $("#Logo-img-id").attr("src", "images/logo-la-llibreria-hover.png");
        },
        function() {
            $("#Logo-img-id").attr("src", "images/logo-la-llibreria.png");
        });
});