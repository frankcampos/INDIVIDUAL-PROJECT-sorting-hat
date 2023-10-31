const formStudent = document.querySelector(".container");
const startSortingButton = document.querySelector("#startSorting");
//  add the event listener to the start sorting button at the welcome card
startSortingButton.addEventListener("click", studentsForms);

let studentsArray = [];
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
formStudent.querySelector('#form').addEventListener("submit", function(event) {
    // Prevents the form from submitting and the page from reloading
    event.preventDefault();
    // create a sorting function
    sortStudent(studentsArray);
    
    

})
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

const studentCard = `
<div class="container mt-5">
    <div class="card" style="width: 18rem;">
        
        <img src=${image} class="card-img-top" alt="Student">
        
      
        <div class="card-body">
            <h5 style="background-color:${nameBackGroundColor}" class="card-title studentName">${studentName}</h5>
            <p class="card-text">House: ${randomHouse}</p>
            <button class="btn btn-danger expel">Expel</button>
        </div>
    </div>
</div>`;


document.querySelector('.studentsList').innerHTML += studentCard;
document.querySelector('#form-control').value = ''; // Clear the form



 studentObject = {id :studentsArray.length + 1,
                     name:`${studentName}`,
                     house:`${randomHouse}`
                    }
                    studentsArray.push(studentObject);
                    
                    console.log(studentsArray);


}
console.log('studensArray out of its function')
console.log(studentsArray);





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

   
    







  
  
