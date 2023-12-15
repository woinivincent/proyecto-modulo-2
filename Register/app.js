
    document.getElementById('continueBtn').addEventListener('click', function () {
        validateForm();
    });

    function validateForm() {
        var name = document.getElementById('name').value;
        var email = document.getElementById('mobile-email').value;
        var password = document.getElementById('password').value;
        var rePassword = document.getElementById('re-password').value;

        // Validación  de todos los formularios
        if (name === "" || email === "" || password === "" || rePassword === "") {
            alert("Todos los campos son obligatorios");
            return false;
        }

        // Validación del formato de correo electrónico
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Ingrese un correo electrónico válido");
            return false;
        }

        if (password.length < 6) {
            alert("La contraseña debe tener al menos 6 caracteres");
            return false;
        }

        if (password !== rePassword) {
            alert("Las contraseñas no coinciden");
            return false;
        }

        // Si todos los campos son válidos, enviar formulario y redirigir a la home
     
       
        window.location.href = "/index.html";
    }

