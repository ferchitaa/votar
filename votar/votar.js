const userName = document.getElementById("txt-name");
const birthday = document.querySelector("#txt-birthdate");
const btnCalculate = document.getElementById("btn-calculate");
const response = document.getElementById("p-result");

btnCalculate.addEventListener("click", getData);
birthday.addEventListener("keydown", calculateAge)

function getData(){
  let currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth();  
  const currentYear = currentDate.getFullYear();
  console.log(`${currentDay}-${currentMonth+1}-${currentYear}` + " Fecha del dia");

  let currentBirthday = birthday.value.split('-');
  console.log(currentBirthday);  
  let yearBirth =  parseInt(currentBirthday[0]);
  let monthBirth = parseInt(currentBirthday[1]);
  let dayBirth = parseInt(currentBirthday[2]);
  console.log(`${yearBirth}-${monthBirth}-${dayBirth}`+ " Fecha de nacimiento");

  calculateAge(currentDay,currentMonth,currentYear,yearBirth,monthBirth,dayBirth);
}

function calculateAge(currentDay,currentMonth,currentYear,yearBirth,monthBirth,dayBirth){
  let age = currentYear - yearBirth;
  if(currentMonth < monthBirth){
    age --;
  }else if(currentMonth === monthBirth){
    if(currentDay < dayBirth){
      age --;
    }
  }

  let username = userName.value;
  if (age >= 18) {
    response.textContent = `Sr(a), ${username}, You can vote!`
    response.style.color = "green";
  } else {
    response.textContent = `Sr(a), ${username}, You can't vote`    
    response.style.color = "red";
  }

  console.log(age);
}




























// const userName = document.getElementById("txt-name");
// const userAge = document.getElementById("txt-age");
// const btnCalculate = document.getElementById("btn-calculate");
// const response = document.getElementById("p-result");

// btnCalculate.addEventListener("click", calculateAge);
// userAge.addEventListener("keydown", tryAge);

// function tryAge(event) {  
//     let username = userName.value;
//     let age = userAge.value.split('-');
//     if (event.code === "Enter") {
//       if (age >= 18) {
//         response.textContent = `Sr(a), ${username},with the ${age} You can vote!`
//         response.style.color = "pink";
//       } else {
//         response.textContent = `Sr(a), ${username},with the ${age} You can't vote`    
//         response.style.color = "black";
//       }
//     }
// }



// function calculateAge() {
//   let username = userName.value;
//   let age =  userAge.value;

//   if (age >= 18) {
//     response.textContent = `Sr(a), ${username},with the ${age} You can vote!`
//     response.style.color = "pink";
//   } else {
//     response.textContent = `Sr(a), ${username},with the ${age} You can't vote`    
//     response.style.color = "black";
//   }

//     let currentDate = new Date();
//     const currentDay = currentDate.getDate();
//     const currentMonth = currentDate.getMonth();  
//     const currentYear = currentDate.getFullYear();
//     console.log(`${currentDay}-${currentMonth+1}-${currentYear}`);
  
  
//     let currentage = age.value;
//     console.log(currentage);
//     console.log(typeof currentage);
//   }



  

  
  




// const userName = document.getElementById("txt-name");
// const userAge = document.querySelector("#txt-age");
// const btnCalculate = document.getElementById("btn-calculate");
// const response = document.getElementById("p-result");

// btnCalculate.addEventListener("click", calculateAge);
// userAge.addEventListener("keydown", tryAge);


// function tryAge(event) {  
//     let username = userName.value;
//     let age = parseInt(userAge.value);
//     if (event.code === "Enter") {
//       if (age >= 18) {
//         response.textContent = `Sr(a), ${username}, You can vote!`
//         response.style.color = "green";
//       } else {
//         response.textContent = `Sr(a), ${username}, You can't vote`    
//         response.style.color = "red";
//       }
//     }
// }

// function calculateAge() {
//   let username = userName.value;
//   let age = parseInt(userAge.value);
//   if (age >= 18) {
//     response.textContent = `Sr(a), ${username}, You can vote!`
//     response.style.color = "pink";
//   } else {
//     response.textContent = `Sr(a), ${username}, You can't vote`    
//     response.style.color = "black";
//   }

  

