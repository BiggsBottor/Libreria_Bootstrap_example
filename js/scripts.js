//animacíon para cambiar el color del logo, intercambiando entre 2 imágenes
$(document).ready(function() {
    $("#Logo-link-id").hover(function() { //hover in
            $("#Logo-img-id").attr("src", "images/logo-la-llibreria-hover.png");
        },
        function() { //hover out
            $("#Logo-img-id").attr("src", "images/logo-la-llibreria.png");
        });
});

/*-- control de la barra de búsqueda --*/
//validando términos de búsqueda requerida al pulsar el botón de la lupa, mínimo 3 caracteres
$("#searchBtnId").on("click", function() {
    var searchText = $("#searchTextId");
    if (searchText.val().length < 3) {
        if ($(".alert").hasClass("invisible")) {
            $(".alert").removeClass("invisible"); //muestra el mensaje de alerta            
        } else { //si el mensaje de alerta está activo al pulsar en la lupa, lo cierra y lo vuelve a mostrar
            closeAlert();
            setTimeout(function() { $(".alert").removeClass("invisible"); }, 125);
        }
        $("#searchBtnId").attr("type", "button");
        isInvalid(false); //añade un borde rojo mostrando que no es correcta la búsqueda
    } else { //si la búsqueda es correcta, cambia el tipo de botón para ser evaluado de type button a submit
        $("#searchBtnId").attr("type", "submit");
        closeAlert();
    }
});
/*-- oculta de nuevo el mensaje de alerta --*/
$(".close_alert").on("click", function() {
    closeAlert(); //llama a la función que oculta la alerta
});
/*-- cambia el aspecto al validar la búsqueda --*/
function isInvalid(valid) { //la función modifica el cuadro de texto para mostrar si es correcto o no
    !valid ? $("#searchTextId").addClass("is-invalid") : $("#searchTextId").removeClass("is-invalid");
}

/*-- cierra la alerta --*/
function closeAlert() {
    $(".alert").addClass("invisible"); //oculta el mensaje de alerta...
    isInvalid(true); //pero mantiene el aspecto de búsqueda erronea
}

/*-- formulario de usuario --*/

/*-- control del aspecto de la ventana --*/

/*-- cambia entre mostrar u ocultar la contraseña modificando el color del icono de ojo --*/

/*-- reubica el ojo al cambiar el tamaño de ventana si el mensaje del password es más largo --*/
function resizeEye(window_with) {
    if (window_with.matches) { // If media query matches
        if (!$("#formUserLogin").hasClass("d-none")) { //login
            if ($("#pswdText").val() != "" && !$("#pswdHelp").hasClass("invisible"))
                $("#eye").css("top", "38%");
        } else { //register
            if ($("#pswdTextRegister").val() != "" && !$("#pswdHelpRegister").hasClass("invisible"))
                $("#eyeRegister").css("top", "36%");
        }
    } else {
        if (!$("#formUserLogin").hasClass("d-none")) { //login
            if ($("#pswdText").val() != "" && !$("#pswdHelp").hasClass("invisible"))
                $("#eye").removeAttr("style");
        } else { //register
            if ($("#pswdTextRegister").val() != "" && !$("#pswdHelpRegister").hasClass("invisible"))
                $("#eyeRegister").removeAttr("style");
        }
    }
}

var window_with = window.matchMedia("(max-width: 414px)")
resizeEye(window_with) // Call listener function at run time
window_with.addListener(resizeEye) // Attach listener function on state changes

/*-- ojo login --*/
$("#eye").on("click", function() {
    if ($("#pswdText").attr("type") == "password") {
        $("#pswdText").attr("type", "Text");
        $("#eye").removeClass("fa-eye-slash grey_color");
        $("#eye").addClass("fa-eye");
    } else {
        $("#pswdText").attr("type", "password");
        $("#eye").removeClass("fa-eye");
        $("#eye").addClass("fa-eye-slash grey_color");
    }
});

/*-- ojo registro --*/
$("#eyeRegister").on("click", function() {
    if ($("#pswdTextRegister").attr("type") == "password") {
        $("#pswdTextRegister").attr("type", "Text");
        $("#eyeRegister").removeClass("fa-eye-slash grey_color");
        $("#eyeRegister").addClass("fa-eye");
    } else {
        $("#pswdTextRegister").attr("type", "password");
        $("#eyeRegister").removeClass("fa-eye");
        $("#eyeRegister").addClass("fa-eye-slash grey_color");
    }
});

/*-- reset de formulario de login --*/
function resetFormLogin() {
    /*-- email --*/
    if ($("#emailText").hasClass("is-invalid")) { //si tiene alguno de los modificadores de color los elimina
        $("#emailText").removeClass("is-invalid");
    } else if ($("#emailText").hasClass("is-valid")) {
        $("#emailText").removeClass("is-valid");
    }
    if ($("#emailText").val() != "") { //si tiene algún texto, lo borra
        $("#emailText").val("");
    }
    if (!$("#emailHelp").hasClass("invisible")) { //si el mensaje de texto asociado está presente, lo oculta
        $("#emailHelp").addClass("invisible");
    }
    $("#emailHelp").html("Texto del error"); //reescribe el mensaje asociado, aunque no se vea
    /*-- password --*/
    if ($("#pswdText").hasClass("is-invalid")) {
        $("#pswdText").removeClass("is-invalid");
    } else if ($("#pswdText").hasClass("is-valid")) {
        $("#pswdText").removeClass("is-valid");
    }
    if ($("#pswdText").val() != "") {
        $("#pswdText").val("");
    }
    if (!$("#pswdHelp").hasClass("invisible")) {
        $("#pswdHelp").addClass("invisible");
    }
    $("#pswdHelp").html("Texto del error");
    /*-- volver a tipo password reseteando el ojo --*/
    if ($("#pswdText").attr("type", "text")) {
        $("#pswdText").attr("type", "password");
        $("#eye").removeClass("fa-eye");
        $("#eye").addClass("fa-eye-slash grey_color");
    }
}

/*-- reset de formulario de registro --*/
function resetFormRegister() {
    /*-- email --*/
    if ($("#emailTextRegister").hasClass("is-invalid")) {
        $("#emailTextRegister").removeClass("is-invalid");
    } else if ($("#emailTextRegister").hasClass("is-valid")) {
        $("#emailTextRegister").removeClass("is-valid");
    }
    if ($("#emailTextRegister").val() != "") {
        $("#emailTextRegister").val("");
    }
    if (!$("#emailHelpRegister").hasClass("invisible")) {
        $("#emailHelpRegister").addClass("invisible");
    }
    $("#emailHelpRegister").html("Texto del error");
    /*-- password 1 --*/
    if ($("#pswdTextRegister").hasClass("is-invalid")) {
        $("#pswdTextRegister").removeClass("is-invalid");
    } else if ($("#pswdTextRegister").hasClass("is-valid")) {
        $("#pswdTextRegister").removeClass("is-valid");
    }
    if ($("#pswdTextRegister").val() != "") {
        $("#pswdTextRegister").val("");
    }
    if (!$("#pswdHelpRegister").hasClass("invisible")) {
        $("#pswdHelpRegister").addClass("invisible");
    }
    $("#pswdHelpRegister").html("Texto del error");
    /*-- password 2 --*/
    if ($("#pswdText2Register").hasClass("is-invalid")) {
        $("#pswdText2Register").removeClass("is-invalid");
    } else if ($("#pswdText2Register").hasClass("is-valid")) {
        $("#pswdText2Register").removeClass("is-valid");
    }
    if ($("#pswdText2Register").val() != "") {
        $("#pswdText2Register").val("");
    }
    if (!$("#pswdHelp2Register").hasClass("invisible")) {
        $("#pswdHelp2Register").addClass("invisible");
    }
    $("#pswdHelp2Register").html("Texto del error");
    /*-- volver a tipo password reseteando el ojo --*/
    if ($("#pswdTextRegister").attr("type", "text")) {
        $("#pswdTextRegister").attr("type", "password");
        $("#eyeRegister").removeClass("fa-eye");
        $("#eyeRegister").addClass("fa-eye-slash grey_color");
    }
}

/*-- restaura manualmente los valores por defecto --*/
$(".close_form").on("click", function() { //resetea los valores por defecto según el formulario activo
    if (!$("#formUserLogin").hasClass("d-none")) {
        resetFormLogin();
    } else {
        resetFormRegister();
    }
    loginDefault();
});

/*-- cambiando el aspecto al validar el email del login --*/
function emailIsValid(valid) { //modifica el aspecto de campo email para mostrar si es válido o no
    if (!valid) { //formato NO valido
        if ($("#emailText").hasClass("is-valid")) {
            $("#emailText").removeClass("is-valid");
        }
        $("#emailText").addClass("is-invalid");
        $("#emailHelp").removeClass("invisible");
    } else { //formato valido
        if ($("#emailText").hasClass("is-invalid")) {
            $("#emailText").removeClass("is-invalid");
        }
        $("#emailText").addClass("is-valid");
        $("#emailHelp").addClass("invisible");
    }
}
/*-- cambiando el aspecto al validar el password del login --*/
function pswdIsValid(valid) {
    if (!valid) { //formato NO valido
        if ($("#pswdText").hasClass("is-valid")) {
            $("#pswdText").removeClass("is-valid");
        }
        $("#pswdText").addClass("is-invalid");
        $("#pswdHelp").removeClass("invisible");
    } else { //formato valido
        if ($("#pswdText").hasClass("is-invalid")) {
            $("#pswdText").removeClass("is-invalid");
        }
        $("#pswdText").addClass("is-valid");
        $("#pswdHelp").addClass("invisible");
    }
}

/*-- cambiando el aspecto al validar el email del registro --*/
function emailIsValidRegister(valid) { //modifica el aspecto de campo email para mostrar si es válido o no
    if (!valid) { //formato NO valido
        if ($("#emailTextRegister").hasClass("is-valid")) {
            $("#emailTextRegister").removeClass("is-valid");
        }
        $("#emailTextRegister").addClass("is-invalid");
        $("#emailHelpRegister").removeClass("invisible");
    } else { //formato valido
        if ($("#emailTextRegister").hasClass("is-invalid")) {
            $("#emailTextRegister").removeClass("is-invalid");
        }
        $("#emailTextRegister").addClass("is-valid");
        $("#emailHelpRegister").addClass("invisible");
    }
}

function pswdIsValidRegister(valid) {
    if (!valid) { //formato NO valido
        if ($("#pswdTextRegister").hasClass("is-valid")) {
            $("#pswdTextRegister").removeClass("is-valid");
        }
        $("#pswdTextRegister").addClass("is-invalid");
        $("#pswdHelpRegister").removeClass("invisible");
    } else { //formato valido
        if ($("#pswdTextRegister").hasClass("is-invalid")) {
            $("#pswdTextRegister").removeClass("is-invalid");
        }
        $("#pswdTextRegister").addClass("is-valid");
        $("#pswdHelpRegister").addClass("invisible");
    }
}

function pswd2IsValidRegister(valid) {
    if (!valid) { //formato NO valido
        if ($("#pswdText2Register").hasClass("is-valid")) {
            $("#pswdText2Register").removeClass("is-valid");
        }
        $("#pswdText2Register").addClass("is-invalid");
        $("#pswdHelp2Register").removeClass("invisible");
    } else { //formato valido
        if ($("#pswdText2Register").hasClass("is-invalid")) {
            $("#pswdText2Register").removeClass("is-invalid");
        }
        $("#pswdText2Register").addClass("is-valid");
        $("#pswdHelp2Register").addClass("invisible");
    }
}

/*-- control de la lógica del formulario --*/
/*-- formato de email --*/
function emailValidator(_email) {
    var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //patrón: a@a.aa
    var emailFormat = new RegExp(emailPattern); //almacena el patrón anterior para poder ser evaluado
    var email = _email; //guarda el valor del campo email del formulario para su posterior evaluación
    if (emailFormat.test(email)) { //cumple el patrón
        return true;
    } else { //NO cumple el patrón
        return false;
    }
}
/*-- formato de password --*/
function pswdValidator(_pswd) {
    /*-- control minimo 8, máximo 16 caracteres --*/
    /* patrón de 8 a 16 caractéres con almenos:
    1 mayúscula, 1 minúscula, 1 número y un carácter alfanumerico (char code 33-44, 60-64): ! " @ # $ % & ( ) = * + < > ? */
    var pswdPattern = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;
    var pswdFormat = new RegExp(pswdPattern);
    var pswd = _pswd;
    if (pswdFormat.test(pswd)) {
        return true;
    } else {
        return false;
    }
}

/*-- validando el formulario de Login --*/
$("#login").on("click", function() { //comprueba el campo email para que no esté vacio y cumpla con el formato de email
    /*-- validando email --*/
    if ($("#emailText").val() == "") {
        /*-- campo obligatorio --*/
        $("#emailHelp").html("Campo Obligatorio");
        emailIsValid(false);
    } else {
        /*-- comprobación del formato del email --*/
        if (emailValidator($("#emailText").val())) {
            emailIsValid(true);
        } else {
            $("#emailHelp").html("Formato permitido: a@a.aa");
            emailIsValid(false);
        }

    }
    /*-- validando password --*/
    if ($("#pswdText").val() == "") {
        /*-- campo obligatorio --*/
        $("#pswdHelp").html("Campo Obligatorio");
        pswdIsValid(false);
    } else {
        /*-- comprobación del formato del password --*/
        if (pswdValidator($("#pswdText").val())) {
            pswdIsValid(true);
        } else { // controla tanto la cantidad de caractéres como el formato de contraseña predefinido
            $("#pswdHelp").html("8-16 caractéres: 1[A-Z] + 1[a-z] + 1[0-9] + 1[!\"@#$%&()=*+<>?]");
            pswdIsValid(false);
        }
    }
    /*-- envía el login --*/
    //comprueba que ambos campos son correctos y permite al botón de login cambiarle el tipo de button a submit
    if ($("#emailText").hasClass("is-valid") && $("#pswdText").hasClass("is-valid")) {
        $("#login").attr("type", "submit");
    }
});

/*-- validando el formulario de Registro --*/
$("#register").on("click", function() {
    /*-- validando email --*/
    if ($("#emailTextRegister").val() == "") {
        /*-- campo obligatorio --*/
        $("#emailHelpRegister").html("Campo Obligatorio");
        emailIsValidRegister(false);
    } else {
        /*-- comprobación del formato del email --*/
        if (emailValidator($("#emailTextRegister").val())) {
            emailIsValidRegister(true);
        } else {
            $("#emailHelpRegister").html("Formato permitido: a@a.aa");
            emailIsValidRegister(false);
        }
    }
    /*-- validando password --*/
    if ($("#pswdTextRegister").val() == "") {
        /*-- campo obligatorio --*/
        $("#pswdHelpRegister").html("Campo Obligatorio");
        pswdIsValidRegister(false);
    } else {
        /*-- comprobación del formato del password --*/
        if (pswdValidator($("#pswdTextRegister").val())) {
            pswdIsValidRegister(true);
        } else { // controla tanto la cantidad de caractéres como el formato de contraseña predefinido
            $("#pswdHelpRegister").html("8-16 caractéres: 1[A-Z] + 1[a-z] + 1[0-9] + 1[!\"@#$%&()=*+<>?]");
            pswdIsValidRegister(false);
        }
    }
    if ($("#pswdText2Register").val() == "") {
        /*-- campo obligatorio --*/
        $("#pswdHelp2Register").html("Campo Obligatorio");
        pswd2IsValidRegister(false);
    } else {
        // console.log("estoy en ello");
        var pswd1 = $("#pswdTextRegister").val();
        var pswd2 = $("#pswdText2Register").val();
        if (pswd1 == pswd2) {
            pswd2IsValidRegister(true);
        } else {
            $("#pswdHelp2Register").html("Las contraseñas no coinciden");
            pswd2IsValidRegister(false);
        }
    }
    /*-- envía el registro --*/
    //comprueba que lor 3 campos son correctos y permite al botón de enviar cambiarle el tipo de button a submit
    if ($("#emailTextRegister").hasClass("is-valid") && $("#pswdTextRegister").hasClass("is-valid") && $("#pswdText2Register").hasClass("is-valid")) {
        $("#register").attr("type", "submit");
    }
});

/*-- cambia a modo login de usuario --*/
function loginDefault() {
    $("#formUserLogin").removeClass("d-none");
    $("#formUserRegister").addClass("d-none");
    $(".modal-title").html("Login de usuario");
    resetFormRegister();
}
$("#loginRegister").on("click", function() {
    loginDefault();
});

/*-- cambia a modo registro de usuario --*/
$("#registerLogin").on("click", function() {
    $("#formUserLogin").addClass("d-none");
    $("#formUserRegister").removeClass("d-none");
    $(".modal-title").html("Registro de usuario");
    resetFormLogin();
});

/*-- Evita que se copie la contraseña --*/
$(document).ready(function() {
    $(".no_copy").on('paste', function(e) {
        e.preventDefault();
    })

    $(".no_copy").on('copy', function(e) {
        e.preventDefault();
    })
})

/*-- salir de la cuenta de usuario (cuando estuviese activa) --*/
$("#logOut").on("click", function() {
    console.log("cierra sesión");
});

//TODO: optimizar el código para reducir líneas