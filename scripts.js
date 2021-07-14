//? Objeto que almacena las respuestas de cada pregunta

const answers = {
  director: "Shigeru Miyamoto y Takashi Tezuka",
  date: "1987",
  inspiration: "Sus propias aventuras",
  triforce: "Poder, sabiduría y coraje",
  temple: "El templo de la Luz",
};

//? Funcion que selecciona los labels de las respuestas seleccionadas

//TODO FIX SELECTOR CON UN IF

function selectLinkedLabel() {
  const selected = document.querySelectorAll("input[type='radio']:checked");
  const unselected = document.querySelectorAll("input[type='radio']");
  for (let i = 0; i < selected.length; i++) {
    const label = selected[i].nextElementSibling;
    const unlabel = unselected[i].nextElementSibling;
    unlabel.classList.remove("selected");
    label.classList.add("selected");
  }
}

// TODO : Añadir cambio de colores a respuestas correctas y incorrectas

//? Funcion para cambiar el texto del boton de inicio

const cambiarBoton = () => {
  var boton = document.querySelector(".start");
  boton.innerHTML = "Otro intento";
};

//? Funcion para ocultar el mensaje de error con boton de cerrar

const fade = () => {
  var close = document.querySelector(".closebtn");
  close.addEventListener("click", function () {
    setTimeout(function () {
      showAlert();
    }, 300);
  });
};
fade();

//? Funcion para ocultar y mostrar el mensaje de error

function showAlert() {
  var x = document.querySelector(".alert");
  if (x.style.visibility === "visible") {
    x.style.visibility = "hidden";
  } else {
    x.style.visibility = "visible";
  }
}

const form = document.querySelector('form[name="zeldaform"]');

//? Funcion que valida que se haya seleccionado una opcion de cada pregunta

function validateForm() {
  let inputs = document.querySelectorAll('input[type="radio"]');
  let questions = document.querySelectorAll("fieldset");
  checks = [];
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].checked) {
      checks.push(inputs[i].value);
    }
  }
  if (checks.length == questions.length) {
    return true;
  } else {
    return false;
  }
}

//? Comprobacion de answers

form.addEventListener("submit", (event) => {
  event.preventDefault();
  selectLinkedLabel();

  const director = event.target.elements.director.value;
  const date = event.target.elements.date.value;
  const inspiration = event.target.elements.inspiration.value;
  const triforce = event.target.elements.triforce.value;
  const temple = event.target.elements.temple.value;

  const answer = {
    director,
    date,
    inspiration,
    triforce,
    temple,
  };

  if (
    answer.director === answers.director &&
    answer.date === answers.date &&
    answer.inspiration === answers.inspiration &&
    answer.triforce === answers.triforce &&
    answer.temple === answers.temple &&
    validateForm() === true
  ) {
    console.log("¡Correcto!");
    console.log("\n");
    console.log("Las respuestas correctas eran:");
    console.log(answer);
  } else if (validateForm() === false) {
    console.log("No has respondido a todas las preguntas");
  } else {
    console.log("No eran las respuestas correctas");
    showAlert();
    cambiarBoton();
    document.querySelector(".greeting").scrollIntoView({
      behavior: "smooth",
    });
  }
});

// event.target.submit();

//? Funcion que mueve a la primera pregunta desde el inicio.

let scrollToFirstQuestion = document.querySelector(".start");
scrollToFirstQuestion.addEventListener("click", () => {
  document.querySelector("fieldset").scrollIntoView({
    behavior: "smooth",
  });
});

//? Funcion desplaza la ventana hacia la siguiente pregunta con scrolls

let fieldset = document.querySelectorAll("fieldset");
for (let i = 0; i < fieldset.length; i++) {
  fieldset[i].addEventListener("click", () => {
    if (i < fieldset.length - 1) {
      document.querySelectorAll("fieldset")[i + 1].scrollIntoView({
        behavior: "smooth",
      });
    } else {
      document.querySelector(".submit").scrollIntoView({
        behavior: "smooth",
      });
    }
  });
}

//TODO: Añadir efectos de animacion a la respuesta correcta e incorrecta

// const correct = Object.keys(answers).every(function (key) {
//   return answer[key] === answers[key];
// });
// if (correct) {
//   document.querySelector(".selected").classList.add("correct");
// } else {
//   document.querySelector(".selected").classList.add("incorrect");
// }
