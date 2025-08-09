// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Variable de tipo array, que almacenará los nombres de los amigos ingresados.
let amigos = []

// Función para limpiar la caja.
    function limpiarCampo() {
        const input = document. getElementById('amigo');
        input.value = '';
    }

// Función para agregar amigos : Permitirà al usuario ingresar un nombre en el campo de texto y añadirlo a la lista de amigos del arreglo.
function Agregaramigo() {
    // Capturar el valor de entrada : Usar document.getElementById o document.queryselector para obtener el texto ingresado por el usuario.
    const input = document.getElementById('amigo');
    // Obtener texto sin espacios al inicio o al final
    const amigo = input.value.trim();

    // Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacio. Si está vacio, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre"
    if (amigo === '') {
        alert('Por favor, inserte un nombre');
        return;
    }

    amigos.push(amigo); // Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo que almacena los nombres de amigos usando el método .push()
    // Limpiar el campo de entrada: Despuès de añadir el nombre, restablecer el campo de texto a una cadena vacia.
    limpiarCampo();


}