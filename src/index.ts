let btnEnviar = document.getElementById("btnEnviar");
let rotulo = document.getElementById("rotulo");
let rotulo2 = document.getElementById("rotulo2");
let dato = document.getElementById("dato");
let dato2 = document.getElementById("dato2");

rotulo.innerHTML = "Usuario";
rotulo2.innerHTML = "Contraseña";

btnEnviar.addEventListener("click", () =>{

  let usuario : string = String(dato.value)
  let contraseña : string = String(dato2.value)
  let nombre : string = "juan"
  let clave : string = "clavejuan"


    if (usuario == String(nombre) && contraseña == String(clave)  {
      console.log("Usuario y contraseña correcta")
    } else {
      console.log("No coinciden el usuario y contraseña")
    }


})


