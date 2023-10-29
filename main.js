const formStudent = document.querySelector(".container");
const startSortingButton = document.querySelector("#startSorting");

function studentsForms(event) {
    formStudent.innerHTML = `
    <div id="form">
        <h1>Enter First Year's Name</h1>
        <form class="row g-3">
            <div class="input">
                <label for="form-control" class="form-label">Student</label>
                <input type="text" class="form-control" id="form-control" value="" required></input>
            </div>
            <div class="col-12">
                <button class="btn btn-primary sort"  type="submit">Sort!</button>
            </div>
        </form>
    </div>`;
    
    // Add event listener to the new form
    formStudent.querySelector('form').addEventListener("submit", search);
}
const studentsArray = [];
function search(event) {
    // Prevents the form from submitting and the page from reloading
    event.preventDefault();
    
    const inputField = document.querySelector("#form-control");
    const userInput = inputField.value.toLowerCase();
    console.log(userInput);
    studentsArray.push(userInput);
    console.log(studentsArray)
    return studentsArray;

    
}



startSortingButton.addEventListener("click", studentsForms);



  
  
