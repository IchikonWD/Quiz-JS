//? Objeto que almacena las answers de cada pregunta

const answers = {
  director: "Shigeru Miyamoto y Takashi Tezuka",
  date: "1987",
  inspiration: "Sus propias aventuras",
  triforce: "Poder, sabiduría y coraje",
  temple: "El templo de la Luz",
};

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
    event.target.submit();
  } else if (validateForm() === false) {
    console.log("No has respondido a todas las preguntas");
  } else {
    console.log("No eran las respuestas correctas");
    document.querySelector("fieldset").scrollIntoView({
      behavior: "smooth",
    });
  }
});

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
