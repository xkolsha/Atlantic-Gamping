// Get classes and id's to use for JavaScript
const modal = document.querySelector("#modal");
const openModal = document.querySelector(".open-button");
const closeModal = document.querySelector(".close-button");
const questionsBtn = document.querySelector("#gamp-questions-btn");
const gampOptions = document.querySelector("#gamp-options");
const exit = document.querySelector(".exit-btn");
const title = document.querySelector("#modal-title");
let gampQuestions = document.querySelector(".gamp-questions");
let gampAnswers = document.querySelector(".gamp-answers");
let qSection = document.querySelector("#q-section");

// Questions with options
const questions = [
  {
    question: "How adventurous are you?",
    options: ["Not very Adventurous", "Kinda Adventurous", "Very Adventurous"],
  },
  {
    question: "Will you be travelling alone?",
    options: ["Yes, just me", "Me and my partner", "No, family trip"],
  },
  {
    question: "Business? Or pure pleasure?",
  },
];

//Show the modal for gamp
openModal.addEventListener("click", () => {
  let selections = [];
  modal.showModal();
  console.log("click");
  gampOptions.classList.remove("hide");
  qSection.classList.add("hide");
  gampQuestions.textContent = "";
  title.textContent = "Hi I am Gamp, can I help you find a destination today?";
});

//Close the modal for gamp
closeModal.addEventListener("click", () => {
  modal.close();
});

//Select yes for gamp help questions
questionsBtn.addEventListener("click", () => {
  qSection.classList.remove("hide");
  gampOptions.classList.add("hide");
  title.textContent = "Great let me ask you a few questions !";

  //  questions
  let head = document.createElement("h2");
  gampQuestions.appendChild(head);
  gampQuestions.textContent = questions[0].question;

  for (let i = 0; i <= 2; i++) {
    let newLi = document.createElement("li");
    newLi.innerText = questions[0].options[i];
    gampAnswers.append(newLi);
  }
  this.addEventListener("click", (e) => {
    let selection = e.target.innerText;
    console.log(selection);
    // if (selection === "") {
    // }
  });
});

// Exit the Modal
exit.addEventListener("click", () => {
  modal.close();
});
