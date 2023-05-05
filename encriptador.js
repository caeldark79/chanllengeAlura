/*para el encriptado se utiliza la función btoa la cual usa el ASCII para su codificación y esta codifica lo escrito
en el inputtext en la variable textoEncriptado 
*/    
function encriptar() {
    const texto = document.getElementById("inputText").value;
    const textoEncriptado = btoa(texto);
    document.getElementById("inputCode").value = textoEncriptado;
    document.getElementById("resultado").innerHTML = "Texto encriptado: " + textoEncriptado;
  }
  
  function desencriptar() {
    const textoEncriptado = document.getElementById("inputText").value;
    const textoDesencriptado = atob(textoEncriptado);
    document.getElementById("inputCode").value = textoDesencriptado;
    document.getElementById("resultado").innerHTML = "Texto desencriptado: " + textoDesencriptado;
  }

  function copiar() {
    const inputCode = document.getElementById("inputCode");
    const mensaje = document.createElement("span");
    mensaje.setAttribute("id", "mensaje");
    mensaje.innerText = "Código copiado";
    document.body.appendChild(mensaje);
    setTimeout(() => {
      mensaje.remove();
    }, 3000);
    inputCode.select();
    document.execCommand("copy");
    inputCode.value = "";
    document.getElementById("inputCode").value = "";
    document.getElementById("inputText").value = "";
  }

  function borrar() {
    const inputText = document.getElementById("inputText");
    const inputCode = document.getElementById("inputCode");
    const mensaje = document.getElementById("mensajeborrado");
  
    inputText.value = "";
    inputCode.value = "";
    mensaje.innerText = "Pantalla Borrada";
    setTimeout(() => {
      mensaje.innerText = "";
    }, 3000);
  }
  