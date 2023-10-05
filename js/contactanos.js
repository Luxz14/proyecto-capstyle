//Llamdos de id's
const form = document.querySelector('#form-contact');
const nameInput = document.querySelector('#name-input');
const emailInput = document.querySelector('#email-input');
const asuntoInput = document.querySelector('#asunto-input');
const mensajeInput = document.querySelector('#mensaje-input');
const btnSubmit = document.querySelector('#button-input');


//Evento en la variable form para un mensaje de completar los campos solicitados, llamar a la funcion para cuando el formulario se completo y un reseteo de los datos del usuario.
//NO hay utilizacion de localStorage o sessionStorage por una cuestion de privacidad, pero si se podia utilizar dejeme un comentario y lo hare.
form.addEventListener('submit', (e) => {
    e.preventDefault();

    if(!nameInput.value || !emailInput.value || !asuntoInput.value) {
        alert('Por favor complete todos los campos obligatorios');
        return;
    } 
    formularioEnviado();

    form.reset();
});


//Funcion para cuando el formulario fue enviado
function formularioEnviado() {
    btnSubmit.addEventListener('click', () => {
        Swal.fire({
            icon: 'success',
            title: 'Su formulario fue enviado!',
            text: 'Recibira una respuesta a la brevedad. Muchas Gracias!'
        });
    });
}