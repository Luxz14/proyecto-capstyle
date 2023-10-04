//Llamdos de id's
const form = document.querySelector('#form-contact');
const nameInput = document.querySelector('#name-input');
const emailInput = document.querySelector('#email-input');
const asuntoInput = document.querySelector('#asunto-input');
const mensajeInput = document.querySelector('#mensaje-input')
const mensajeAgradecimiento = document.querySelector('#mensaje-agradecimiento');


//Evento en la variable form para un mensaje de completar los campos solicitados, llamar a la funcion para agradecer con un mensaje y un reseteo de los datos del usuario.
//NO hay utilizacion de localStorage o sessionStorage por una cuestion de privacidad, pero si se podia utilizar dejeme un comentario y lo hare.
form.addEventListener('submit', (e) => {
    e.preventDefault();

    if(!nameInput.value || !emailInput.value || !asuntoInput.value) {
        alert('Por favor complete todos los campos obligatorios');
        return;
    } 
    mostrarAgradecimiento();

    form.reset();
});


//Funcion para agradecer llamado a la variable mensajeAgradecimiento.
function mostrarAgradecimiento() {
    mensajeAgradecimiento.textContent = "¡Gracias por tu mensaje! Hemos recibido tu consulta.";
    mensajeAgradecimiento.classList.remove("none");
}