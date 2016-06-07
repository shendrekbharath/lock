export default {
  error: {
    forgotPassword: {
      "too_many_requests": "Se ha alcanzado el límite de intentos para restablecer su contraseña. Por favor, aguarde unos minutos.",
      "lock.fallback": "Ocurrió un error al restablecer su contraseña."
    },
    login: {
      "blocked_user": "El usuario se encuentra bloqueado.",
      "invalid_user_password": "Wrong email or password.",
      "lock.fallback": "Ocurrió un error al inciar sesión.",
      "lock.network": "Ocurrió un error de red. Por favor, verifique su conexión.",
      "lock.popup_closed": "Se ha cerrado la ventana emergente.",
      "lock.unauthorized": "Acceso denegado. Por vaor, intente nuevamente.",
      "password_change_required": "Debe actualizar su contraseña porque es la primera vez que ingresa o porque la contraseña está vencida.",
      "password_leaked": "Este intento ha sido bloqueado ya que usted utilizó la misma contraseña para registrarse en otra aplicación que tuvo una filtración reciente. Hemos enviado un email con las instrucciones."
    },
    signUp: {
      "invalid_password": "La contraseña es muy débil.",
      "lock.fallback": "Ocurrió un error durante el registro.",
      "user_exists": "El usuario ya existe.",
      "username_exists": "El nombre de usuario se encuentra en uso."
    }
  },
  success: {
    logIn: "Sesión iniciada con éxito.",
    forgotPassword: "Hemos enviado un email para completar el restablecimiento de su contraseña.",
    signUp: "Registro completado exitosamente."
  },
  blankErrorHint: "Requerido",
  databaseEnterpriseLoginInstructions: "",
  databaseEnterpriseAlternativeLoginInstructions: "o",
  databaseSignUpInstructions: "",
  databaseAlternativeSignUpInstructions: "o",
  emailInputPlaceholder: "correo@ejemplo.com",
  enterpriseLoginIntructions: "Inicie sesión con sus credenciales corporativas.",
  enterpriseActiveLoginInstructions: "Ingrese las credenciales corporativas de %s.",
  forgotPasswordAction: "¿Olvidó su contraseña?",
  forgotPasswordInstructions: "Por favor ingrese su dirección de correo. Le enviaremos las instrucciones para restablecer su contrseña.",
  invalidErrorHint: "Inválido",
  lastLoginInstructions: "La última vez inició sesión con",
  loginAtLabel: "Iniciar en %s",
  loginLabel: "Iniciar sesión",
  loginWithLabel: "Iniciar con %s",
  notYourAccountAction: "¿No es su cuenta?",
  passwordInputPlaceholder: "su contraseña",
  passwordStrength: {
    containsAtLeast: "Contener al menos %d de los siguientes %d tipos de caracteres:",
    identicalChars: "No más de %d caracteres idénticos juntos (ej., \"%s\" no está permitido)",
    nonEmpty: "Se requiere una contraseña no vacía",
    numbers: "Números (ej. 0-9)",
    lengthAtLeast: "Como mínimo de %d caracteres de longitud",
    lowerCase: "Letras minúsculas (a-z)",
    shouldContain: "Debe contener:",
    specialCharacters: "Caracteres especiales (ej. !@#$%^&*)",
    upperCase: "Letras mayúsculas (A-Z)"
  },
  signUpLabel: "Registrarse",
  signUpterms: "",
  signUpWithLabel: "Registrarse con %s",
  socialLoginInstructions: "",
  socialSignUpInstructions: "",
  ssoEnabled: "Single Sign-On enabled",
  unrecoverableError: "Something went wrong.<br />Please contant technical support.",
  usernameFormatErrorHint: "1-15 letras, números y \"_\"",
  usernameInputPlaceholder: "su usuario",
  title: "Auth0",
  welcome: "Bienvenido %s!",
  windowsAuthInstructions: "Usted se encuentra conectado desde su red corporativa&hellip;",
  windowsAuthLabel: "Autenticación de Windows"
};
