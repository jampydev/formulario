

// Seleccionar elementos del formulario y modal
const form = document.querySelector('.form-container');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('mensage');
const modal = document.getElementById('successModal'); // Modal para confirmación

// Validación en tiempo real
form.addEventListener('input', (e) => {
    const target = e.target;

    // Validar Nombre
    if (target === nameInput) {
        if (nameInput.value.trim().length < 5) {
            nameInput.setCustomValidity('El nombre debe tener al menos 5 caracteres.');
        } else {
            nameInput.setCustomValidity('');
        }
    }

    // Validar Correo
    if (target === emailInput) {
        const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
        if (!emailPattern.test(emailInput.value)) {
            emailInput.setCustomValidity('Introduce un correo electrónico válido.');
        } else {
            emailInput.setCustomValidity('');
        }
    }

    // Validar Mensaje
    if (target === messageInput) {
        if (messageInput.value.trim().length < 5) {
            messageInput.setCustomValidity('El mensaje debe tener al menos 5 caracteres.');
        } else {
            messageInput.setCustomValidity('');
        }
    }
});




// Manejar el envío del formulario
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Detener el envío estándar del formulario

    // Validar si el formulario está completo y válido
    if (form.checkValidity()) {
        // Mostrar el modal
        modal.style.display = 'flex';

        // Mantener el modal durante 5 segundos y enviar el formulario
        setTimeout(() => {
            modal.style.display = 'none'; // Ocultar el modal
            form.submit(); // Enviar el formulario manualmente
        }, 5000);
    } else {
        // Mostrar mensajes de error si el formulario no es válido
        form.reportValidity();
    }
});
