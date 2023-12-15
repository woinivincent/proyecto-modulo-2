document.querySelector('.form button').addEventListener('click', function (event) {
    event.preventDefault(); 
    validateLoginForm();
});

function validateLoginForm() {
    var email = document.querySelector('.form input[name="email"]').value;

    // Validación 
    if (email === "") {
        alert("Por favor, ingrese su correo electrónico o número de teléfono.");
        return false;
    }

    // Validación del formato de correo electrónico 
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Ingrese un correo electrónico válido o número de teléfono.");
        return false;
    }

    // Si la validación es exitosa, redirige a la página de inicio
    window.location.href =  "/index.html";
}
