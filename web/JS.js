/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function comprobar() {
    var mirarLargo = "no";
    var mirarIgual = "no";
    var usuario = document.formulario.usuario;
    var contraseña = document.formulario.contraseña;
    var verificar = document.formulario.verificar;
    var telefono = document.formulario.telefono;
    var celular = document.formulario.celular;
    var aviso = document.getElementById("aviso");
    aviso.innerHTML = ""
    var enviar = "si"
    //Campos obligatorios
    if (usuario.value == "" || usuario.value.indexOf(" ") == 0) {
        var texto = "Es obligatorio introducir el nombre usuario.<br/>"
        aviso.innerHTML += texto
        enviar = "no"
    }
    if (contraseña.value == "" || contraseña.value.indexOf(" ") == 0) {
        var texto = "El campo contraseña esta vacio<br/>"
        aviso.innerHTML += texto
        enviar = "no"
    }
    if (verificar.value == "" || verificar.value.indexOf(" ") == 0) {
        var texto = "El campo verificar contraseña esta vacio<br/>"
        aviso.innerHTML += texto
        enviar = "no"
    }

    if (telefono.value == "" || telefono.value.indexOf(" ") == 0) {
        var texto = "El campo telefono esta vacio<br/>"
        aviso.innerHTML += texto
        enviar = "no"
    }

    if (telefono.value == "" || telefono.value.indexOf(" ") == 0) {
        var texto = "El campo esta vacio<br/>"
        aviso.innerHTML += texto
        enviar = "no"
    }



    //Comprobacion de que el usuario tenga tenga al menos de 5 caracteres
    if (usuario.value.length >= 5) {
        mirarLargo = "si"
    }
    else {
        texto = "El usuario debe tener más de 5 caracteres.<br/>"
        aviso.innerHTML += texto
    }
    //Campo con solo valores numericos

   if (telefono.value.length ==7) {
        mirarLargo = "si"
    }
     else {
        texto = "El numero de telefono debe tener 7 digitos<br/>"
        aviso.innerHTML += texto
    }
    if (isNaN(parseInt(telefono.value))) {
        texto = "Solo se permiten valores numericos en el campo telefono<br/>"
        aviso.innerHTML += texto
        return false;
    }

    //Celuar debe tener solo 10 digitos
    
      if (celular.value.length ==10) {
        mirarLargo = "si"
    }
     else {
        texto = "El numero de celular debe tener 10 digitos<br/>"
        aviso.innerHTML += texto
    }
    //aqui termina celular
    if (contraseña.value == "" || contraseña.value.indexOf(" ") == 0) {
        var texto = "Es obligatorio introducir la contraseña.<br/>"
        aviso.innerHTML += texto
        enviar = "no"
    }
    if (verificar.value == "" || verificar.value.indexOf(" ") == 0) {
        var texto = "La contraseña no coincide.<br/>"
        aviso.innerHTML += texto
        enviar = "no"
    }
    if (enviar == "no") {
        return false
    }
    //Validacion de contraseñas
    if (contraseña.value.length >= 6) {
        mirarLargo = "si"
    }
    else {
        texto = "La contraseña debe tener más de 6 caracteres.<br/>"
        aviso.innerHTML += texto
    }
    if (contraseña.value == verificar.value) {
        mirarIgual = "si"
    }
    else {
        texto = "La contraseña y su repetición deben ser iguales.<br/>"
        aviso.innerHTML += texto
    }
    if (mirarLargo == "no" || mirarIgual == "no") {
        return false
    }

    function restaurar() {
        var aviso = document.getElementById("usuario");
        aviso.innerHTML = ""
    }
    
               $ (function() {
                $("#usuario").change(function() {
// ajax                 
                    $.ajax({
                        type: "POST",
                        url: "RegistroUsuario.jsp",
                        data: {username: $("#usuario").val()}
                    })
                            .done(function(msg) {
                                if (msg === "si")
                                {
                                    alert("El nombre (" + $("#usuario").val() + ") ya existe.");
                                }
                            });
                });
            });
}

