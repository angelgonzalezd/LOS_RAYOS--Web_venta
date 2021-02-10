function validar(){
    var nombre, apellidos, correo, clave, telefono, expresion
    nombre = document.getElementById("nombre").Value
    apellidos = document.getElementById("apellidos").Value
    correo = document.getElementById("correo").Value
    clave = document.getElementById("clave").Value
    telefono = document.getElementById("telefono").Values
    
    expresion = /\w+@\w+\.+[a-z]/;

    if(nombre === "" || apellidos === "" || correo === "" || usuario === "" || clave === "" || telefono === "" ){
        alert("Todos los campo son obligatorios")
        return false
    }
    else if(nombre.length>25 || apellidos.length>25){
        alert("Los nombre y los apellidos son mmy largos");
        return false
    }
    else if(correo.length>80){
        alert("El correo es muy largo")
        return false
    }
    else if(!expresion.test(correo)){
        return false

    }
    else if(usuario.length>15){
        alert("El usuario es muy largo")
        return false
    }
    else if(clave.length>15){
        alert("La clave es muy largo");
        return false;
    }
    else if(telefono.length>10){
        alert("El numero de telefono es muy largo");
        return false;
    }
    else if(isNaN(telefono)) {
        alert("El  Telefono ingresado no es un numero")
        return false
    }
    
}