const formStudent = document.querySelector(".container");
const startSortingButton = document.querySelector("#startSorting");
//  add the event listener to the start sorting button at the welcome card
startSortingButton.addEventListener("click", studentsForms);

const studentsArray=[]; 
function studentsForms(event) {
    document.querySelector(".card").remove();
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
formStudent.querySelector('form').addEventListener("submit", function(event) {
    // Prevents the form from submitting and the page from reloading
    event.preventDefault();
    // create a sorting function
    sortStudent();
    
    

})
}

 
function sortStudent(){
const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
// randomHouse will hold the array and the random  index number 
// const house = ['house1','house2', 'house3', 'house4'];
// const randomHouses = Math.random() * house.length;
// const indexHouse = Math.floor(randomHouses);
// console.log(randomHouses);
// console.log(indexHouse);
// console.log(house[indexHouse]);
const randomHouse = houses[Math.floor(Math.random() * houses.length)];
const studentName = document.querySelector('#form-control').value;

const studentCard = `
<div class="card mt-3">
  <div class="card-body">
    <h5 class="card-title">${studentName}</h5>
    <p class="card-text">House: ${randomHouse}</p>
    <button class="btn btn-danger expel">Expel</button>
  </div>
</div>
`;

document.querySelector('.studentsList').innerHTML += studentCard;
document.querySelector('#form-control').value = ''; // Clear the form
}
    







  
  
