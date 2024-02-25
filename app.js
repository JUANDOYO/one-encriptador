let mensajeError = "";

function verificarTexto(texto) {

    console.log("Validar el texto");
    
    // Expresión regular para encontrar caracteres en mayúscula, con acentos o especiales
    let expresion = /[A-ZÁÉÍÓÚÜÑ¡!@#$%^&*()_+{}\[\]:;"'<,>.?\/\\|~`´¨]/;
    
    // Verificar si el texto contiene alguno de estos caracteres
    if (expresion.test(texto)) {
        mensajeError = "El texto contiene al menos un caracter en mayúscula, con acento o especial.";
        console.log(mensajeError);
        return false;
    } else {
        console.log("El texto no contiene ningún caracter en mayúscula, con acento o especial.");
        return true;        
    }
}

function remplazaTexto(textoOriginal, textoARemplazar, textoNuevo) {

    let textoRemplazado = "";

    // Obtenemos el tamaño de cada texto
    let contadorOriginal = textoOriginal.length;
    let contadorTextoRemplazar = textoARemplazar.length;
    
    // Inicializamos contadores
    let i = 0;
    let j = 0;
    
    // Buscamos en el texto original el textoViejo
    while(i < contadorOriginal){

        // Verificamos si el caracter del texto original coinicide con el primer caracter del textoViejo
        let caracterOriginal = textoOriginal[i];
        let caracterRemplazar = textoARemplazar[j];
        let cadenaTexto = "";

        if (caracterOriginal === caracterRemplazar){

            // Verifico si coinciden todos los carateres del textoViejo
            for(let n = 0; n < contadorTextoRemplazar; n ++ ){
                cadenaTexto = textoOriginal[i + n];
            }

            if (textoARemplazar === cadenaTexto){
                textoRemplazado += textoNuevo;
            }else{
                textoRemplazado += caracterOriginal;
                console.log("Texto remplazado: " + textoRemplazado);                
            }
            
        }else{
            textoRemplazado += caracterOriginal;
            console.log("Texto remplazado: " + textoRemplazado);
        }
        i++;        
    }

    return textoRemplazado;    
}

function encriptar(texto){

    let textoEncriptado = "";

    // Remplaza texto
    console.log("Remplaza texto " + texto);
    
    for (let i = 0; i < texto.length; i++)
    {
        //let caracter = texto.charAt(i);
        let caracter = texto[i];        
        console.log("Caracter " + caracter);

        switch (caracter){
            // La letra "a" es convertida para "ai"
            case "a":
                textoEncriptado += "ai";
                console.log("Texto en A: " + textoEncriptado);
                break;
            // La letra "e" es convertida para "enter"
            case "e":
                textoEncriptado += "enter";
                console.log("Texto en E: " + textoEncriptado);
                break;
            // La letra "i" es convertida para "imes"
            case "i":
                textoEncriptado += "imes";
                console.log("Texto en E: " + textoEncriptado);
                break;
            // La letra "o" es convertida para "ober"
            case "o":
                    textoEncriptado += "ober";
                    console.log("Texto en E: " + textoEncriptado);
                break;
            // La letra "u" es convertida para "ufat"
            case "u":
                    textoEncriptado += "ufat";
                    console.log("Texto en E: " + textoEncriptado);
                break;
            default:
                textoEncriptado += caracter;            
                console.log("Texto en else: " + textoEncriptado);
                break;
        }        
        console.log("Texto Encriptado: " + textoEncriptado);
    }
  
    console.log(" Caracteristicas del string FIN");
    //textoEncriptado = texto;
    console.log("texto encriptado: " + textoEncriptado);
    
    return textoEncriptado;
}

function mostrarMensajeEncriptado(elementoHTML, texto)
{
    console.log("Texto a mostrar: " + texto);
    elementoHTML.value = texto;
}

function desencriptar(texto){

    let textoEncriptado = "";
    let contador = texto.length;
    let i = 0;

    // Caracteristicas del string
    console.log("INICIO Caracteristicas del string");
    console.log("Tamaño del texto " + contador);
    console.log("Texto A Desencriptar: " + texto);

    while (i < contador){
        
        console.log("i = " + i);
        let caracter = texto[i];        
        console.log("Caracter " + caracter);

        switch (caracter){
            // La letra "a" es convertida para "ai"
            case "a":
                // Verificamos que todavia hay espacio en la cadena
                textoEncriptado += caracter;
                if(i + 1 < contador){
                    let cadena = texto[i];
                    console.log("Cadena 1 " + cadena);                    
                    cadena += texto[i + 1];
                    console.log("Cadena 2 " + cadena);                    
                    
                    if(cadena=="ai"){
                        i += 2;
                        break;
                    }
                }
                i++;
                break;
            case "e":
                // Verificamos que todavia hay espacio en la cadena
                textoEncriptado += caracter;
                if(i + 4 < contador){
                    let cadena = texto[i];
                    console.log("Cadena 1 " + cadena);                    
                    cadena += texto[i + 1];
                    console.log("Cadena 2 " + cadena);                    
                    cadena += texto[i + 2];
                    console.log("Cadena 3 " + cadena);                    
                    cadena += texto[i + 3];
                    console.log("Cadena 4 " + cadena);                    
                    cadena += texto[i + 4];
                    console.log("Cadena 4 " + cadena);                    

                    if(cadena=="enter"){
                        i += 5;
                        break;
                    }
                }
                i++;
                break;
            case "i":
                    // Verificamos que todavia hay espacio en la cadena
                    textoEncriptado += caracter;
                    if(i + 3 < contador){
                        let cadena = texto[i];
                        console.log("Cadena 1 " + cadena);                    
                        cadena += texto[i + 1];
                        console.log("Cadena 2 " + cadena);                    
                        cadena += texto[i + 2];
                        console.log("Cadena 3 " + cadena);                    
                        cadena += texto[i + 3];
                        console.log("Cadena 4 " + cadena);   

                        if(cadena=="imes"){
                            i += 4;
                            break;
                        }
                    }
                    i++;
                break;
            case "o":
                    // Verificamos que todavia hay espacio en la cadena
                    textoEncriptado += caracter;
                    if(i + 3 < contador){
                        let cadena = texto[i];
                        console.log("Cadena 1 " + cadena);                    
                        cadena += texto[i + 1];
                        console.log("Cadena 2 " + cadena);                    
                        cadena += texto[i + 2];
                        console.log("Cadena 3 " + cadena);                    
                        cadena += texto[i + 3];
                        console.log("Cadena 4 " + cadena);   
                        
                        if(cadena=="ober"){
                            i += 4;
                            break;
                        }
                    }
                    i++;
                break;
            case "u":
                    // Verificamos que todavia hay espacio en la cadena
                    textoEncriptado += caracter;
                    if(i + 3 < contador){
                        let cadena = texto[i];
                        console.log("Cadena 1 " + cadena);                    
                        cadena += texto[i + 1];
                        console.log("Cadena 2 " + cadena);                    
                        cadena += texto[i + 2];
                        console.log("Cadena 3 " + cadena);                    
                        cadena += texto[i + 3];
                        console.log("Cadena 4 " + cadena);   

                        if(cadena=="ufat"){
                            i += 4;
                            break;
                        }
                    }
                    i++;
                break;
            default:
                textoEncriptado += caracter;
                i++;
                console.log("i = " + i);
                break;
        }

        console.log("Texto Encriptado: " + textoEncriptado);
    }
  
    console.log(" Caracteristicas del string FIN");
    //textoEncriptado = texto;
    console.log("texto desencriptado: " + textoEncriptado);
    
    return textoEncriptado;
}

function encriptarTexto(){    

    let textoATrabajar = document.getElementById('textoATrabajar').value;
    console.log("Texto a trabajar: " + textoATrabajar);

    if (textoATrabajar == ""){
        // Texto vacio
        mensajeError = "Debe introducir un texto";
        mostrarMensajeEncriptado(document.getElementById('textoResultado'), mensajeError);  
         
    }else{
        // Verificamos que sea un texto valido
        if (verificarTexto(textoATrabajar)){        
            // Si es un texto valido encriptarmos el mensaje 
            let textoResultado = encriptar(textoATrabajar);
            // Mostramos el mensaje encriptado
            mostrarMensajeEncriptado(document.getElementById('textoResultado'), textoResultado);  
            // Reestablememos valores     
            console.log("Ya termine");
        }else{
            mensajeError = mensajeError + "\nEl programa solo funciona con letras minúsculas. \nNo deben ser utilizados letras con acentos ni caracteres especiales";
            // Mostramos el mensaje encriptado
            mostrarMensajeEncriptado(document.getElementById('textoResultado'), mensajeError);              
        }
    }

    // Limpiamos el area de trabajo
    mostrarMensajeEncriptado(document.getElementById('textoATrabajar'), "");
    return;    
}

function desencriptarTexto(){

    let textoATrabajar = document.getElementById('textoATrabajar').value;
    console.log("Texto a trabajar: " + textoATrabajar);

    if (textoATrabajar == ""){
        // Texto vacio
        mensajeError = "Debe introducir un texto";
        mostrarMensajeEncriptado(document.getElementById('textoResultado'), mensajeError);  
         
    }else{
        // Verificamos que sea un texto valido
        if (verificarTexto(textoATrabajar)){        
            // Si es un texto valido encriptarmos el mensaje 
            let textoResultado = desencriptar(textoATrabajar);
            // Mostramos el mensaje encriptado
            mostrarMensajeEncriptado(document.getElementById('textoResultado'), textoResultado);  
            // Reestablememos valores     
            console.log("Ya termine");
        }else{
            mensajeError = mensajeError + "\nEl programa solo funciona con letras minúsculas. \nNo deben ser utilizados letras con acentos ni caracteres especiales";
            // Mostramos el mensaje encriptado
            mostrarMensajeEncriptado(document.getElementById('textoResultado'), mensajeError);              
        }
    }

    // Limpiamos el area de trabajo
    mostrarMensajeEncriptado(document.getElementById('textoATrabajar'), "");
    return;    
}

function guardarTexto(){

    // Texto a copiar
    let textoATrabajar = document.getElementById('textoResultado').value;
    console.log("Texto a guardar");
    console.log(textoATrabajar);

    navigator.clipboard.writeText(textoATrabajar);

}