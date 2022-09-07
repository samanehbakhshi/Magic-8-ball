// Selection from DOM
const questionButton = document.getElementById("questionButton");
const answerBox = document.getElementById("answer");
const img = document.getElementById("8ball");
const div = document.querySelector(".ball");

const answerArray = [
  "No",
  "Yes",
  "I don't think so...",
  "Of course!",
  "Indubitably",
  "In your dreams.",
];

function showAnswer() {
  const index = Math.floor(Math.random() * answerArray.length);
  const answer = answerArray[index];
  answerBox.innerHTML = answer;
  removeShake();
}

function askQuestion() {
  const question = prompt('"ASK A YES/NO QUESTION!"');
  div.classList.add("shake-horizontal");
  if (question) {
    addShake();
    img.setAttribute(
      "src",
      "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png"
    );
    showAnswer();
  } else {
    img.setAttribute(
      "src",
      "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png"
    );
  }
}

function addShake() {
  img.classList.add("shake");
}

function removeShake() {
  console.log(img.hasAttribute("class")) ? img.removeAttribute("class") : null;
  console.log(img.attributes);
}

questionButton.addEventListener("click", askQuestion);
