function validar() {
  usuario = document.getElementById("usuario").value;
  contraseña = document.getElementById("contraseña").value;
  // console.log(noVacio);
  // console.log(numero);

  if (contraseña === "" && usuario === "") {
    // Mostrar un mensaje de error
    alert("Por favor, complete ambos campos.");
    return false;
  } else if (contraseña === "") {
    // Mostrar un mensaje de error
    alert("Por favor, complete el campo contraseña");
    return false;
  } else if (usuario === "") {
    // Mostrar un mensaje de error
    alert("Por favor, complete el campo usuario");
    return false;
  } else {
    // Los textbox están llenos
    alert("Inicio de sesión exitoso!");
    return true;
  }
}
