questions = document.querySelectorAll(".question-container");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    questions.forEach((q) => {
      if (q.children[1].classList.contains("active") && question != q) {
        q.children[1].classList.remove("active");
        q.children[0].children[1].classList.remove("flip");
        q.children[0].children[0].classList.remove("color");
      }
    });

    question.children[1].classList.toggle("active");
    question.children[0].children[1].classList.toggle("flip");
    question.children[0].children[0].classList.toggle("color");
  });
});
