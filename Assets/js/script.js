let countNumber = 0;
let btnElements = document.querySelectorAll(".button-container .button");

btnElements.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let elementClass = e.currentTarget.classList;
    if (elementClass.contains("diminuir")) {
      countNumber--;
    } else if (elementClass.contains("aumentar")) {
      countNumber++;
    } else if (elementClass.contains("reset")) {
      countNumber = 0;
    }

    if (countNumber > 0) {
      document
        .querySelector(".number-container p")
        .classList.remove("numberReset");
      document
        .querySelector(".number-container p")
        .classList.remove("numberNegative");
      document
        .querySelector(".number-container p")
        .classList.add("numberPositive");
    }

    if (countNumber < 0) {
      document
        .querySelector(".number-container p")
        .classList.remove("numberReset");
      document
        .querySelector(".number-container p")
        .classList.remove("numberPositive");
      document
        .querySelector(".number-container p")
        .classList.add("numberNegative");
    }

    if (countNumber == 0) {
      document
        .querySelector(".number-container p")
        .classList.remove("numberNegative");
      document
        .querySelector(".number-container p")
        .classList.remove("numberPositive");
      document
        .querySelector(".number-container p")
        .classList.add("numberReset");
    }

    document.querySelector(".number-container p").textContent = countNumber;
  });
});
