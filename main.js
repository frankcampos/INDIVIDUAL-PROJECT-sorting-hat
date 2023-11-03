const formStudent = document.querySelector(".container");
const buttons = document.querySelector(".buttons")
const startSortingButton = document.querySelector("#startSorting");
//  add the event listener to the start sorting button at the welcome card
startSortingButton.addEventListener("click", studentsForms);
let studentCard = ""



let studentsArray = [];
function studentsForms(event) {
    document.querySelector(".card").remove();
    buttons.innerHTML =`<h1>Filter Students</h1>
    <button class="gryffindor btn btn-danger mr-2">Gryffindor</button>
    <button class="hufflepuff btn btn-warning mr-2">Hufflepuff</button>
    <button class="ravenclaw btn btn-primary mr-2">Ravenclaw</button>
    <button class="slytherin btn btn-success mr-2">Slytherin</button>
    <button id="all" class="all btn btn-dark">All</button>`;

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
formStudent.querySelector('#form').addEventListener("submit", function(event) {
    
    // Prevents the form from submitting and the page from reloading
    event.preventDefault();
    // create a sorting function
    sortStudent(studentsArray);
    
    

})
}



function rendertoDom(divId, html){
    const selectedDiv = document.querySelector(divId)
    selectedDiv.innerHTML +=html;
}

let studentObject;
function sortStudent(studentsArray){
const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
// randomHouse will hold the array and the random  index number 
// const house = ['house1','house2', 'house3', 'house4'];
// const randomHouses = Math.random() * house.length;
// const indexHouse = Math.floor(randomHouses);
// console.log(randomHouses);
// console.log(indexHouse);
// console.log(house[indexHouse]);
const randomHouse = houses[Math.floor(Math.random() * houses.length)];        studentName = document.querySelector('#form-control').value;



let nameBackGroundColor;
let image;

switch(randomHouse){
    case "Gryffindor":
        nameBackGroundColor= "red";
        image = "red_hat.jpg"
        break;
    case "Hufflepuff":
        nameBackGroundColor = "yellow";
        image= "yellow_hat.jpg"
        break;
    case "Ravenclaw":
        nameBackGroundColor = "blue";
        image = "blue_hat.jpg"
        break;
    case "Slytherin":
        nameBackGroundColor = 'green';
        image = "green_hat.jpg"
}

 studentCard = `
<div id=studentcard class="container mt-5">
    <div class="card" style="width: 18rem;">
        
        <img src=${image} class="card-img-top" alt="Student">
        
      
        <div class="card-body">
            <h5 style="background-color:${nameBackGroundColor}" class="card-title studentName">${studentName}</h5>
            <p class="card-text">House: ${randomHouse}</p>
            <button class="btn btn-danger expel">Expel</button>
        </div>
    </div>
</div>`;

 rendertoDom('.studentsList',studentCard);
// document.querySelector('.studentsList').innerHTML += studentCard;
document.querySelector('#form-control').value = ''; // Clear the form



 studentObject = {id :studentsArray.length + 1,
                     name:`${studentName}`,
                     house:`${randomHouse}`,
                     backGroundColor:`${nameBackGroundColor}`,
                     image:`${image}`
                    }
                    studentsArray.push(studentObject);
                    
                    console.log(studentsArray);


}








document.querySelector('.studentsList').addEventListener('click', function(e) {
    // e.target property target the specif elemetn  of html clicked 
    // classList property list of the class attributes of the Element
//    contains('expel') This method checks if the list of classes contanin expel class
//    It returns a boolean: true if the class exists and false if it doesn't.
    console.log(e.target);
    if(e.target.classList.contains('expel')) { 
        
        
        // parentElement property will navigate to its parent element in this case is div .card-body
        // Within that parent element, it's finding the <h5> tag with the class studentName
        // textContent property get the name of the Student from <h5>tag
        let name = e.target.parentElement.querySelector('.studentName').textContent;
        let expelledStudentCard = e.target.closest('.container');
        expelledStudentCard.remove();
        const removedStudent = studentsArray.pop();
        
        document.querySelector("#notBeNamed").innerHTML = "He Who Must Not Be Named's Army";
        
        const enemyArmy = `
        <div class="container mt-5">
            <div class="card" style="width: 18rem;">
                
                <img src="army.jpg" class="card-img-top" alt="Moldy Voldy's Army">
                
               
                <div class="card-body">
                    <h5 class="card-title">Moldy Voldy's Army </h5>
                    <p class="card-text">Sadly, ${name} went over to the dark side! </p>
                </div>
            </div>
        </div>`;
   
        document.querySelector('.army').innerHTML += enemyArmy;
    }

    // I can access to students array from anywhere
    console.log(studentsArray);
    console.log("I can access to students array from anywhere")
});




// event function of the buttons
document.querySelector('#allButtons').addEventListener('click', function(e) {
    if (e.target.classList.contains('all')) { 
        // Display all students
        renderAllStudents();
    } else if (e.target.classList.contains('gryffindor')) {
        // Filter and display Gryffindor students
        const gryffindorStudents = studentsArray.filter((student) => student.house === "Gryffindor");
        renderFilteredStudents(gryffindorStudents);
    } else if (e.target.classList.contains('hufflepuff')) {
        // Filter and display Hufflepuff students
        const hufflepuffStudents = studentsArray.filter((student) => student.house === "Hufflepuff");
        renderFilteredStudents(hufflepuffStudents);
    } else if (e.target.classList.contains('ravenclaw')) {
        // Filter and display Ravenclaw students
        const ravenclawStudents = studentsArray.filter((student) => student.house === "Ravenclaw");
        renderFilteredStudents(ravenclawStudents);
    } else if (e.target.classList.contains('slytherin')) {
        // Filter and display Slytherin students
        const slytherinStudents = studentsArray.filter((student) => student.house === "Slytherin");
        renderFilteredStudents(slytherinStudents);
    }
});

// Function to render all students
function renderAllStudents() {
    const studentsListDiv = document.querySelector('.studentsList');
    studentsListDiv.innerHTML = ""; // Clear the existing content
    
    studentsArray.forEach((student) => {
        const studentCard = createStudentCard(student);
        
        studentsListDiv.innerHTML += studentCard;
    });
}

// Function to render filtered students
function renderFilteredStudents(filteredStudents) {
    const studentsListDiv = document.querySelector('.studentsList');
    studentsListDiv.innerHTML = ""; // Clear the existing content
    
    filteredStudents.forEach((student) => {
        const studentCard = createStudentCard(student);
        
        studentsListDiv.innerHTML += studentCard;
    });
}

// Function to create a student card
function createStudentCard(student) {
    
    
    
    const studentCard= `
    <div class="container mt-5">
        <div class="card" style="width: 18rem;">
            <img src="${student.image}" class="card-img-top" alt="Student">
            <div class="card-body">
                <h5 style="background-color:${student.backGroundColor}" class="card-title studentName">${student.name}</h5>
                <p class="card-text">House: ${student.house}</p>
                <button class="btn btn-danger expel">Expel</button>
            </div>
        </div>
    </div>`;
    
    return studentCard;
}


  
