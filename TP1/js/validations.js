function validarEmail() 
{
    var email = document.getElementsByName("email");
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
}

function validarNombre(){
    var name = document.getElementsByName("name");
    if(name != null){
        return true;
    }

    return false;
}

function validar(){
    if(!validarEmail() || !validarNombre())
    {
        alert("Parece que su mail y/o nombre están mal escritos o incompletos");
    }else{
        alert("Se envio el formulario con exito!")
    }
}