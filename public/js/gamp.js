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

// query selections
let querySelections = [];

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
    question: "Do you enjoy water views?",
    options: ["Not my thing", "does not matter", "I love the water"],
  },
];

//Show the modal for gamp
openModal.addEventListener("click", () => {
  modal.showModal();
  gampOptions.classList.remove("hide");
  gampQuestions.textContent = "";
  querySelections = [];
  title.textContent = "Hi I am Gamp, can I help you find a destination today?";
  gampAnswers.textContent = "";
});

//Close the modal for gamp
closeModal.addEventListener("click", () => {
  modal.close();
});

// Exit the Modal
exit.addEventListener("click", () => {
  modal.close();
});

//Select yes for gamp help questions
questionsBtn.addEventListener("click", () => {
  qSection.classList.remove("hide");
  gampOptions.classList.add("hide");
  question1();
});

//Show results after questions *************************
let showResults = () => {
  gampAnswers.textContent = "";
  gampQuestions.textContent = "";
  title.textContent =
    "Exellent, I think I have found the perfect place for you!";
  runQuery();
};

// Question 1 ******************************************
let question1 = () => {
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
    if (
      e.target.innerText === "Not very Adventurous" ||
      e.target.innerText === "Kinda Adventurous" ||
      e.target.innerText === "Very Adventurous"
    ) {
      selection = e.target.innerText;
      console.log(selection);
      if (selection === "Not very Adventurous") {
        querySelections.push("wifi: true", "cell_service: true");
        question2();
      } else if (selection === "Kinda Adventurous") {
        querySelections.push("shower: false");
        question2();
      } else {
        querySelections.push(
          "wifi: false",
          "cell_service: false",
          "electricity: false",
          "shower: false"
        );
        question2();
      }
      e.target.innerText = "";
    }
  });
};

// Question 2 **************************************
let question2 = () => {
  title.textContent = "Doing good, just a couple more!";
  gampAnswers.textContent = "";

  //  questions
  let head = document.createElement("h2");
  gampQuestions.appendChild(head);
  gampQuestions.textContent = questions[1].question;

  for (let i = 0; i <= 2; i++) {
    let newLi = document.createElement("li");
    newLi.innerText = questions[1].options[i];
    gampAnswers.append(newLi);
  }
  this.addEventListener("click", (e) => {
    if (
      e.target.innerText === "Yes, just me" ||
      e.target.innerText === "Me and my partner" ||
      e.target.innerText === "No, family trip"
    ) {
      selection = e.target.innerText;
      console.log(selection);
      if (selection === "Yes, just me") {
        querySelections.push("num_guests: 2", "num_beds: 1");
        question3();
      } else if (selection === "Me and my partner") {
        querySelections.push("num_beds: 2");
        question3();
      } else {
        querySelections.push("num_guests: 6");
        question3();
      }
      e.target.innerText = "";
    }
  });
};

// Question 3 ***********************************************
let question3 = () => {
  title.textContent = "Fantastic almost there, one more question!";
  gampAnswers.textContent = "";

  //  questions
  let head = document.createElement("h2");
  gampQuestions.appendChild(head);
  gampQuestions.textContent = questions[2].question;

  for (let i = 0; i <= 2; i++) {
    let newLi = document.createElement("li");
    newLi.innerText = questions[2].options[i];
    gampAnswers.append(newLi);
  }
  this.addEventListener("click", (e) => {
    if (
      e.target.innerText === "Not my thing" ||
      e.target.innerText === "does not matter" ||
      e.target.innerText === "I love the water"
    ) {
      selection = e.target.innerText;
      console.log(selection);
      if (selection === "Not my thing") {
        querySelections.push("waterfront: false");
        showResults();
      } else if (selection === "does not matter") {
        querySelections.push("fireplace: true");
        showResults();
      } else {
        querySelections.push("waterfront: true");
        showResults();
      }
      e.target.innerText = "";
    }
  });
};

const runQuery = async () => {
  const response = await fetch("http://localhost:3001/api/locations");
  const data = await response.json();

  for (let i = 0; i < querySelections.length; i++) {
    console.log(querySelections[i]);
  }
};
