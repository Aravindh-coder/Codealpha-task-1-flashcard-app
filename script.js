let flashcards = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "Who wrote '1984'?", answer: "George Orwell" }
];

let currentIndex = 0;

const flashcardEl = document.getElementById('flashcard');
const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');
const showBtn = document.getElementById('showBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const addBtn = document.getElementById('addBtn');
const editBtn = document.getElementById('editBtn');
const deleteBtn = document.getElementById('deleteBtn');
const newQuestion = document.getElementById('newQuestion');
const newAnswer = document.getElementById('newAnswer');

function displayCard(index) {
  if (flashcards.length === 0) {
    questionEl.textContent = "No flashcards available!";
    answerEl.textContent = "";
    return;
  }
  flashcardEl.classList.remove('flipped');
  questionEl.textContent = flashcards[index].question;
  answerEl.textContent = flashcards[index].answer;
}

showBtn.addEventListener('click', () => {
  flashcardEl.classList.toggle('flipped');
});

prevBtn.addEventListener('click', () => {
  if (flashcards.length === 0) return;
  currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
  displayCard(currentIndex);
});

nextBtn.addEventListener('click', () => {
  if (flashcards.length === 0) return;
  currentIndex = (currentIndex + 1) % flashcards.length;
  displayCard(currentIndex);
});

addBtn.addEventListener('click', () => {
  const question = newQuestion.value.trim();
  const answer = newAnswer.value.trim();
  if (question && answer) {
    flashcards.push({ question, answer });
    newQuestion.value = "";
    newAnswer.value = "";
    currentIndex = flashcards.length - 1;
    displayCard(currentIndex);
  } else {
    alert("Enter both question and answer!");
  }
});

editBtn.addEventListener('click', () => {
  if (flashcards.length === 0) return;
  const question = newQuestion.value.trim();
  const answer = newAnswer.value.trim();
  if (question && answer) {
    flashcards[currentIndex] = { question, answer };
    displayCard(currentIndex);
  } else {
    alert("Enter both question and answer to edit!");
  }
});

deleteBtn.addEventListener('click', () => {
  if (flashcards.length === 0) return;
  flashcards.splice(currentIndex, 1);
  if (currentIndex >= flashcards.length) currentIndex = flashcards.length - 1;
  displayCard(currentIndex);
});

// Initial display
displayCard(currentIndex);
