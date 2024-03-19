// Select the button for the list & Form
// Show/hide the list & Form on mobile if button clicked

// [1] LEFT - PLL DOWN MENU
// let pulldownBtn = document.querySelector("#pld-btn");
// let pulldownList = document.querySelector("#pld-list");

// pulldownBtn.onclick = () => {
//   pulldownList.classList.toggle("show-pulldown");
// }

// [2] LEFT - LOGIN FORM
// let logInBtn = document.querySelector("#log-btn");
// let logInForm = document.querySelector("#log-form");
//let closeBtn = document.querySelector("#cls-btn");

// logInBtn.onclick = () => {
//   logInForm.classList.toggle("show-form");
// }


// [3] RIGHT - MOBILE MENU
let navBtn = document.querySelector("#nav-btn");
let nav = document.querySelector("#nav-list");

navBtn.onclick = () => {
  nav.classList.toggle("show-navigation");
}

// [4] RIGHT - DESK TOP LOGIN FORM
// let logInRightBtn = document.querySelector("#log-right-btn");
// let logInRightForm = document.querySelector("#log-dsk-form");
 
// logInRightBtn.onclick = () => {
//   logInRightForm.classList.toggle("show-log-dsk-form");
// }


// Hide the list if a link is clicked
// Important for on-page list

// [1] LEFT - PLL DOWN MENU
// pulldownList.onclick = function () {
//   if (pulldownList.classList.contains("show-pulldown")) {
//     pulldownList.classList.remove("show-pulldown");
//   }
// }

// [3] RIGHT - MOBILE MENU
nav.onclick = function () {
  if (nav.classList.contains("show-navigation")) {
    nav.classList.remove("show-navigation");
  }
}

//CLOSE BUTTON
//closeBtn.onclick = function () {
  //loginForm.classList.remove("show-form");
//}

