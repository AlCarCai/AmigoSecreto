let amigos = [];

//Función para agregar un amigo
function agregarAmigo(){
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim(); // Corregido: .value en lugar de .ariaValueMax

    //Validar que el campo no esté vacío
    if(nombreAmigo == ""){ // Corregido: usar nombreAmigo en lugar de variable nombre indefinida
        alert("Por favor, inserte un nombre.");
        return; //Detiene la ejecución de la función
    }

    //Validar que el nombre no esté duplicado
    if(amigos.includes(nombreAmigo)){
        alert(`El nombre ${nombreAmigo} ya está en la lista`); // Corregido: comillas de string al final
        return;
    }

    //Agregar el nombre al array de amigos
    amigos.push(nombreAmigo);

    //Limpiar el campo de entrada
    inputAmigo.value = ""; // Corregido: .value en lugar de .ariaValu

    //Actualizar la lista en el HTML
    actualizarLista();
}

//Función para actualizar la lista de amigos en la interfaz
function actualizarLista(){
    const listaAmigos = document.getElementById('listaAmigos');
    
    //Limpiar el contenido actual de la lista
    listaAmigos.innerHTML = ""; // Borra cualquier contenido previo dentro del contenedor de la lista
    
    //Recorrer el array con un ciclo for
    for(let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

//Función para seleccionar un amigo aleatorio
function sortearAmigo(){
    //Validar que haya amigos disponibles
    if(amigos.length === 0){ //Comprueba si el array 'amigos' está vacío.
        alert("No hay amigos disponibles para sortear. Agrega al menos uno.");
        return;
    }
    
    //Genera un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length); //Genera un número aleatorio entre 0 y la longitud
    
    //Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio]; //Usa el índice aleatorio para obtener un nombre del array.
    
    //Mostrar el resultado en el HTML
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}