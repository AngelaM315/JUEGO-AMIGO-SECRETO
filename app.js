let amigos = [];

// Agregar un amigo a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, escriba un nombre.");
        return;
    }

    amigos.push(nombre);
    input.value = "";
    actualizarLista();
}

// Actualizar la lista en la interfaz
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo) => {
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

// Sorteo de amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Debe agregar al menos un nombre antes de sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos.splice(indiceAleatorio, 1)[0]; // Remueve el amigo sorteado

    document.getElementById("resultado").innerHTML = `<p>🎉 ¡El amigo secreto es: <strong>${amigoSorteado}</strong>! 🎉</p>`;
    
    actualizarLista();
}

// Reiniciar el juego
function reiniciarJuego() {
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
}