document.addEventListener('DOMContentLoaded', () => {
  // Login
  const loginForm = document.getElementById('loginForm');
  const loginCorreo = document.getElementById('loginCorreo');
  const loginPassword = document.getElementById('loginPassword');
  const loginCorreoError = document.getElementById('loginCorreoError');
  const loginPasswordError = document.getElementById('loginPasswordError');

  // Registro
  const registerForm = document.getElementById('registerForm');
  const registerNombre = document.getElementById('registerNombre');
  const registerApellido = document.getElementById('registerApellido');
  const registerCorreo = document.getElementById('registerCorreo');
  const registerPassword = document.getElementById('registerPassword');
  const registerPasswordConfirm = document.getElementById('registerPasswordConfirm');
  const registerNombreError = document.getElementById('registerNombreError');
    const registerApellidoError = document.getElementById('registerApellidoError');
  const registerCorreoError = document.getElementById('registerCorreoError');
  const registerPasswordError = document.getElementById('registerPasswordError');
  const registerPasswordConfirmError = document.getElementById('registerPasswordConfirmError');

  function validarCorreoElectronico(input, errorSpan) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (input.value.trim() === '') {
      errorSpan.textContent = 'El correo es obligatorio.';
      input.classList.add('is-invalid');
      return false;
    } else if (!regex.test(input.value.trim())) {
      errorSpan.textContent = 'El correo no es válido.';
      input.classList.add('is-invalid');
      return false;
    } else {
      errorSpan.textContent = '';
      input.classList.remove('is-invalid');
      return true;
    }
  }

  // Validación contraseña fuerte
  function validarPassword(input, errorSpan) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (input.value.trim() === '') {
      errorSpan.textContent = 'La contraseña es obligatoria.';
      input.classList.add('is-invalid');
      return false;
    } else if (!regex.test(input.value.trim())) {
      errorSpan.textContent = 'Debe tener mínimo 8 caracteres, al menos una mayúscula, una minúscula y un número.';
      input.classList.add('is-invalid');
      return false;
    } else {
      errorSpan.textContent = '';
      input.classList.remove('is-invalid');
      return true;
    }
  }

  // Confirmar que ambas contraseñas coincidan
  function validarPasswordConfirm(passInput, confirmInput, errorSpan) {
    if (confirmInput.value.trim() === '') {
      errorSpan.textContent = 'Debe confirmar la contraseña.';
      confirmInput.classList.add('is-invalid');
      return false;
    } else if (passInput.value.trim() !== confirmInput.value.trim()) {
      errorSpan.textContent = 'Las contraseñas no coinciden.';
      confirmInput.classList.add('is-invalid');
      return false;
    } else {
      errorSpan.textContent = '';
      confirmInput.classList.remove('is-invalid');
      return true;
    }
  }

  // Solo permite letras y espacios en el nombre
  function validarNombre(input, errorSpan) {
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    if (input.value.trim() === '') {
      errorSpan.textContent = 'El nombre es obligatorio.';
      input.classList.add('is-invalid');
      return false;
    } else if (!regex.test(input.value.trim())) {
      errorSpan.textContent = 'El nombre solo puede contener letras y espacios.';
      input.classList.add('is-invalid');
      return false;
    } else {
      errorSpan.textContent = '';
      input.classList.remove('is-invalid');
      return true;
    }
  }
  // Solo permite letras y espacios en el apellido
  function validarApellido(input, errorSpan) {
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    if (input.value.trim() === '') {
      errorSpan.textContent = 'El apellido es obligatorio.';
      input.classList.add('is-invalid');
      return false;
    } else if (!regex.test(input.value.trim())) {
      errorSpan.textContent = 'El apellido solo puede contener letras y espacios.';
      input.classList.add('is-invalid');
      return false;
    } else {
      errorSpan.textContent = '';
      input.classList.remove('is-invalid');
      return true;
    }
  }


  // Validación Login en tiempo real
  if (loginCorreo) {
    loginCorreo.addEventListener('input', () => validarCorreoElectronico(loginCorreo, loginCorreoError));
  }
  if (loginPassword) {
    loginPassword.addEventListener('input', () => validarPassword(loginPassword, loginPasswordError));
  }

  // Validación Registro en tiempo real
  if (registerNombre) {
    registerNombre.addEventListener('input', () => validarNombre(registerNombre, registerNombreError));
  }
  if (registerApellido) {
    registerApellido.addEventListener('input', () => validarApellido(registerApellido, registerApellidoError));
  }
  if (registerCorreo) {
    registerCorreo.addEventListener('input', () => validarCorreoElectronico(registerCorreo, registerCorreoError));
  }
  if (registerPassword) {
    registerPassword.addEventListener('input', () => validarPassword(registerPassword, registerPasswordError));
  }
  if (registerPasswordConfirm) {
    registerPasswordConfirm.addEventListener('input', () =>
      validarPasswordConfirm(registerPassword, registerPasswordConfirm, registerPasswordConfirmError)
    );
  }

  // Manejo de submit para Login
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault(); 
      const correoValido = validarCorreoElectronico(loginCorreo, loginCorreoError);
      const passValida = validarPassword(loginPassword, loginPasswordError);

      if (correoValido && passValida) {
        alert('Sesión iniciada correctamente');
        loginForm.reset();
        window.location.href = "Inicio.html";
      }
    });
  }

  // Manejo de submit para Registro
  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault(); 
      const nombreValido = validarNombre(registerNombre, registerNombreError);
      const apellidoValido = validarApellido(registerApellido, registerApellidoError);
      const correoValido = validarCorreoElectronico(registerCorreo, registerCorreoError);
      const passValida = validarPassword(registerPassword, registerPasswordError);
      const confirmValida = validarPasswordConfirm(registerPassword, registerPasswordConfirm, registerPasswordConfirmError);

      if (nombreValido && apellidoValido && correoValido && passValida && confirmValida) {
        alert('Cuenta registrada correctamente');
        registerForm.reset();
        window.location.href = "Inicio.html";
      }
    });
  }

});