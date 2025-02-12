// Obtener elementos del DOM
const userNameInput = document.getElementById('userName');
const weatherConditionInput = document.getElementById('weatherCondition');
const generateButton = document.getElementById('generateButton');
const greetingOutput = document.getElementById('greeting');
const weatherOutput = document.getElementById('weather');
const predictionOutput = document.getElementById('prediction');

// Función para generar una predicción aleatoria
function generarPrediccion() {
  const predicciones = [
    "Hoy será un día increíble, ¡disfrútalo!",
    "Mantente alerta, puede haber sorpresas inesperadas.",
    "Será un día productivo si te organizas bien.",
    "No dejes que los pequeños problemas arruinen tu día.",
    "Hoy es un buen día para probar algo nuevo.",
    "Confía en tu intuición, tomará las mejores decisiones por ti."
  ];

  // Generar un número aleatorio entre 0 y 5
  const randomIndex = Math.floor(Math.random() * 6);
  return predicciones[randomIndex];
}

// Evento al hacer clic en el botón
generateButton.addEventListener('click', () => {
  // Obtener el nombre y el clima
  const userName = userNameInput.value.trim();
  const weatherCondition = weatherConditionInput.value.trim();

  // Mostrar saludo
  greetingOutput.textContent = userName ? `¡Hola, ${userName}!` : "¡Hola!";

  // Mostrar el clima
  weatherOutput.textContent = `El clima actual es: ${weatherCondition || "No especificado"}`;

  // Generar y mostrar la predicción
  predictionOutput.textContent = `Predicción del día: ${generarPrediccion()}`;
});