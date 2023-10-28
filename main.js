const formStudent = document.querySelector(".sort");
const inputField = document.querySelector("#form-control");

formStudent.addEventListener("click", search);

function search(event) {
  //  Prevents the form from submitting and the page from reloading
  event.preventDefault();
  const userInput = inputField.value.toLowerCase();
  console.log(userInput);
}
