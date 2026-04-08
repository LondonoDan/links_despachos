

const bienvenida = () =>{
    let  nombreUsuario = String(document.getElementById("nombreUsuario").value);

    document.getElementById("resultado").textContent = "Hola " +nombreUsuario+ " Bienvenido/a";
}


