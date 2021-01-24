let questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    removeActiveClass();
    question.classList.add("active");
  });
});

function removeActiveClass() {
  questions.forEach((question) => {
    question.classList.remove("active");
  });
}
