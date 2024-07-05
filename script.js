/*trabajar en javascript con librerias y tecnologias revisar*/

const texto =  "{ Yinefar, a Java Developer from Perú. I am very fascinated  in IT world. I always continue learning about new technologies }"
const elemento = document.getElementById("presentation");  
let indice = 0; 
 function mostrarTexto() {
    if (indice < texto.length) {
        elemento.innerHTML += texto.charAt(indice); 
        indice++;
        setTimeout(mostrarTexto, 100); 
    } else {
        setTimeout(() => {
            elemento.innerHTML =""; 
            indice=0; 
            mostrarTexto(); 
        }, 1000); 

    }
 }
 mostrarTexto();
