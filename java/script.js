// CODIGOS HECHOS CON AYUDA DE IA PARA EL CURSO DE MARKETING DIGITAL DEL CFL 403 DE TEMPERLEY
// Preguntas sobre Mitos de Redes Sociales
const questions = [
  {
    text: '“Si tengo muchas visualizaciones, voy a ganar muchos seguidores”.',
    correctAnswer: false, // Falso = Es un mito
    explanation: 'Las visualizaciones generan exposición, pero no garantizan que las personas quieran seguirte. Para convertir espectadores en seguidores, el contenido tiene que resultarles relevante y darles un motivo para volver.'
  },
  {
    text: '“Si hago un sorteo y pido que me sigan, voy a conseguir una comunidad fiel”.',
    correctAnswer: false,
    explanation: 'Podés conseguir muchos seguidores en poco tiempo, pero la mayoría solo busca el premio. Si no les interesa lo que vendés o publicás, no interactuarán a futuro o te dejarán de seguir.'
  },
  {
    text: '“Cuantos más seguidores tenga, mejor me va a ir”.',
    correctAnswer: false,
    explanation: 'Importa la calidad de la audiencia. Una cuenta con 800 seguidores interesados en sus productos puede vender mucho más que otra con 20.000 seguidores que nunca compran.'
  },
  {
    text: '“Si sigo a muchas cuentas, me van a seguir de vuelta”.',
    correctAnswer: false,
    explanation: 'El "seguir por seguir" no construye una comunidad sólida. Puede generar números inflados, pero no personas realmente interesadas en tu propuesta.'
  },
  {
    text: '“Tengo que comentar en cientos de publicaciones para crecer”.',
    correctAnswer: false,
    explanation: 'Interactuar genuinamente con otras cuentas genera vínculos reales. Comentar de manera masiva, repetitiva o sin aportar valor parece spam y no garantiza crecimiento.'
  },
  {
    text: '“Para que me sigan, todos mis contenidos tienen que ser virales”.',
    correctAnswer: false,
    explanation: 'El contenido viral atrae curiosos, pero el contenido útil, específico y constante es lo que ayuda a que la audiencia adecuada encuentre razones para quedarse.'
  },
  {
    text: '“Si no publico todos los días, el algoritmo me castiga”.',
    correctAnswer: false,
    explanation: 'No existe una regla universal que castige por no publicar diario. La calidad, la relevancia y la respuesta del público importan mucho más que la frecuencia masiva.'
  },
  {
    text: '“Si publico a una hora equivocada, mi contenido fracasa”.',
    correctAnswer: false,
    explanation: 'Los horarios influyen en la tracción inicial, pero no determinan por sí solos el éxito del contenido. Conviene probar distintas franjas y analizar las métricas.'
  },
  {
    text: '“Cuantos más hashtags use, más alcance voy a tener”.',
    correctAnswer: false,
    explanation: 'Los hashtags ayudan a contextualizar el tema, pero llenar la publicación con etiquetas genéricas no garantiza mayor alcance ni ventas.'
  },
  {
    text: '“Si mi publicación tiene pocos likes, el contenido es malo”.',
    correctAnswer: false,
    explanation: 'Los likes son solo una métrica superficial. Hay que observar guardados, compartidos, comentarios relevantes, visitas al perfil y mensajes o ventas generadas.'
  },
  {
    text: '“Tengo que hacer Reels porque las fotos ya no sirven”.',
    correctAnswer: false,
    explanation: 'Cada formato cumple una función. Los Reels ayudan al descubrimiento por parte de gente nueva, mientras que los carruseles e historias educan, generan confianza y venden.'
  },
  {
    text: '“El algoritmo no muestra mis publicaciones porque tengo pocos seguidores”.',
    correctAnswer: false,
    explanation: 'Tener pocos seguidores no impide llegar a gente nueva. El alcance depende de la calidad del contenido y de las señales de interés que recibe la plataforma.'
  },
  {
    text: '“Si un Reel funciona mal, tengo que borrarlo y subirlo otra vez tal cual”.',
    correctAnswer: false,
    explanation: 'Volver a publicarlo sin revisar qué falló no arregla el problema. Es mejor analizar el gancho de los primeros segundos, el tema y la retención del público.'
  }
];

// Variables de Estado
let currentQuestionIndex = 0;
let score = 0;

// Referencias del DOM
const screenWelcome = document.getElementById('screen-welcome');
const screenQuiz = document.getElementById('screen-quiz');
const screenResult = document.getElementById('screen-result');

const btnStart = document.getElementById('btn-start');
const questionNumber = document.getElementById('question-number');
const scoreLive = document.getElementById('score-live');
const progressBarFill = document.getElementById('progress-bar-fill');
const questionText = document.getElementById('question-text');

const btnVerdadero = document.getElementById('btn-verdadero');
const btnFalso = document.getElementById('btn-falso');

const feedbackCard = document.getElementById('feedback-card');
const feedbackIcon = document.getElementById('feedback-icon');
const feedbackTitle = document.getElementById('feedback-title');
const feedbackText = document.getElementById('feedback-text');

const finalScore = document.getElementById('final-score');
const resultMessage = document.getElementById('result-message');

// Event Listener para comenzar
btnStart.addEventListener('click', startQuiz);

// Función Iniciar Quiz
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  
  // Activa la imagen de fondo en la página
  document.body.classList.add('quiz-active');
  
  screenWelcome.classList.add('hidden');
  screenResult.classList.add('hidden');
  screenQuiz.classList.remove('hidden');
  loadQuestion();
}

// Cargar Pregunta Actual
function loadQuestion() {
  const currentQ = questions[currentQuestionIndex];
  
  // Actualizar indicadores
  questionNumber.textContent = `Pregunta ${currentQuestionIndex + 1} de ${questions.length}`;
  scoreLive.textContent = `Puntos: ${score}`;
  
  const progressPercent = ((currentQuestionIndex + 1) / questions.length) * 100;
  progressBarFill.style.width = `${progressPercent}%`;

  // Cargar texto de la pregunta
  questionText.textContent = currentQ.text;

  // Restaurar estado de botones y feedback
  btnVerdadero.disabled = false;
  btnFalso.disabled = false;
  feedbackCard.classList.add('hidden');
}

// Manejar la selección de respuesta
function selectAnswer(userChoice) {
  const currentQ = questions[currentQuestionIndex];
  const isCorrect = userChoice === currentQ.correctAnswer;

  // Bloquear interacción de botones
  btnVerdadero.disabled = true;
  btnFalso.disabled = true;

  // Sumar punto si es correcto
  if (isCorrect) {
    score++;
    scoreLive.textContent = `Puntos: ${score}`;
  }

  // Mostrar tarjeta de retroalimentación
  feedbackCard.classList.remove('hidden', 'correct', 'incorrect');
  
  if (isCorrect) {
    feedbackCard.classList.add('correct');
    feedbackIcon.textContent = '🎉';
    feedbackTitle.textContent = '¡Correcto!';
  } else {
    feedbackCard.classList.add('incorrect');
    feedbackIcon.textContent = '❌';
    feedbackTitle.textContent = 'Error'; // <-- Cambio aplicado aquí
  }

  feedbackText.textContent = currentQ.explanation;
}

// Pasar a la siguiente pregunta o mostrar resultados
function nextQuestion() {
  currentQuestionIndex++;
  
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    showResults();
  }
}

// Pantalla Final de Resultados
function showResults() {
  screenQuiz.classList.add('hidden');
  screenResult.classList.remove('hidden');

  finalScore.textContent = `${score} / ${questions.length}`;

  // Mensaje personalizado según el puntaje obtenido
  if (score === 13) {
    resultMessage.textContent = '🌟 ¡Excelente! Tenés un dominio total sobre las estrategias de Redes Sociales y Marketing Digital.';
  } else if (score >= 9) {
    resultMessage.textContent = '👏 ¡Muy buen trabajo! Tenés claros los conceptos principales sobre algoritmos y audiencia.';
  } else if (score >= 5) {
    resultMessage.textContent = '👍 ¡Buen intento! Conocés varios mitos, pero aún hay detalles clave por seguir aprendiendo.';
  } else {
    resultMessage.textContent = '📚 ¡A no aflojar! Las redes cambian rápido; revisar estas explicaciones te ayudará a mejorar tu estrategia.';
  }
}

// Reiniciar Quiz
function restartQuiz() {
  startQuiz();
}