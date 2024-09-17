
// Obtiene el elemento de entrada para la cantidad de caracteres
let cantidad = document.getElementById('cantidad');
// Obtiene el botón para generar la contraseña
let boton = document.getElementById('generar');
// Obtiene el campo donde se mostrará la contraseña generada
let contraseña = document.getElementById('contrasena');
// Obtiene el botón para limpiar los campos
let limpiarBtn = document.getElementById('limpiar');

// Cadena de caracteres de la cual se generará la contraseña
const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_?@/!%^*';

// Función para generar la contraseña
function generar() {
    // Convierte el valor de entrada a un número entero
    let numeroDigital = parseInt(cantidad.value);

    // Lógica de la contraseña
    let password = ''; // Inicializa la variable para la contraseña
    // Bucle para generar la contraseña
    for (let i = 0; numeroDigital > i; i++) {
        // Selecciona un carácter aleatorio de la cadena de caracteres
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        console.log(caracterAleatorio); // Muestra el carácter aleatorio en la consola

        // Agrega el carácter aleatorio a la contraseña
        password += caracterAleatorio;
    }
    // Asigna la contraseña generada al campo de entrada
    contraseña.value = password;

    //Validar la fortaleza de la contraseña
    validarContraseña(password);
}

// Función para validar la fortaleza de la contraseña
function validarContraseña(password) {
    // Define criterios para una contraseña fuerte
    const esFuerte = password.length >= 8 && //Verifica que la longitud de la contraseña sea de al menos 8 caracteres
                     /[A-Z]/.test(password) && //Utiliza una expresión regular para comprobar si hay al menos una letra mayúscula en la contraseña
                     /[a-z]/.test(password) && //Utiliza otra expresión regular para verificar si hay al menos una letra minúscula.
                     /[0-9]/.test(password) && //Comprueba si hay al menos un dígito (número) en la contraseña.
                     /[_\-?@/!%^*]/.test(password);// Verifica la presencia de al menos un carácter especial de la lista 

    // Cambia el borde del input según la fortaleza de la contraseña
    if (esFuerte) {
        contraseña.style.border = '2px solid green'; // Borde verde para contraseñas fuertes
    } else {
        contraseña.style.border = '2px solid red'; // Borde rojo para contraseñas débiles
    }
}


// Manejador de eventos para el botón de generar
boton.addEventListener('click', generar);

// Manejador de eventos para el botón de limpiar
limpiarBtn.addEventListener('click', () => {
    // Limpia el campo de cantidad
    cantidad.value = '';
    // Limpia el campo de contraseña
    contraseña.value = '';
});







