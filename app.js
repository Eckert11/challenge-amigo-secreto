// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Variable de tipo array, que almacenará los nombres de los amigos ingresados.
let amigos = []

// Función para limpiar la caja.
    function limpiarCampo() {
        const input = document.getElementById('amigo');
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
    limpiarCampo(); // Limpiar el campo de entrada: Despuès de añadir el nombre, restablecer el campo de texto a una cadena vacia.
    actualizarListaAmigos(); // Mostrar lista
}

// Función para actualizar la lista de amigos. Crea una función que recorra el array amigos y agregue cada nombre como un elmento <li> dentro de una lista HTML. Usa innerHTML para limpiar la lista antes de agregar nuevos elementos. 
function actualizarListaAmigos() {
    // Obtener el elemento de la lista: Utilizar document.getElementById() o document.queryselector() para seleccionar la lista donde se mostrarán los amigos. 
    let lista = document.getElementById('listaAmigos');
    //Limpiar la lista existente: Establecer lista.innerHTML = "" para asegurarse de que no haya duplicados al actualizar 
    lista.innerHTML = "";

    let elementosLi = []; // Se usa push para almacenar cada <li> como string
    // Iterar sobre el arreglo: Usa un bucle for para recorrer el arreglo amigos y crear elementos de lista (<li>) para cada título
    for (let i = 0; i < amigos.length; i++) {
        elementosLi.push `<li>${amigos[i]}</li>`;
    }
    // Agregar elementos a la lista: Para cada amigo, crear un nuevo elemento de lista. 
    lista.innerHTML = elementosLi.join('');
    
}
// Implementa una función para sortear los amigos. Escribe una función que seleccione de manera aleatoria uno de los nombres almacenados en el array amigos, Usa Math.random() y Math.floor() para obtener un ìndice aleatorio
function sortearAmigos () {
    // Validar que haya amigos disponibles. 
    if (amigos.length === 0){
        alert("No hay amigos para sortear");
        return;
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrara el resultado en el HTML
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li> El amigo sorteado es: <strong>${amigoSorteado}</strong><li>`;
}
  