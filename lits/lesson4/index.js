const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let today = new Date();
let date = document.getElementById("month");
let year = document.getElementById("year");
let nowMonth = today.getMonth()
let nowYear = today.getFullYear()
date.innerHTML = monthNames[nowMonth];
year.innerHTML = nowYear;



let daysNumbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
];

let days = document.querySelectorAll("ul.days > li");

for (let i = 0; i < days.length; i++) {
  days[i].innerHTML = daysNumbers[i];

  if (daysNumbers[i] === undefined) {
    days[i].innerHTML = " ";
  };
  
 
}

let secondButton = document.querySelectorAll(" button.secondmage")[0];
let thirdButton = document.querySelectorAll(" button.thirdmage")[0];

let yearNum = 0;

secondButton.addEventListener("click", () => {
  if (nowMonth === 0 ) {
    nowMonth = 11;
    yearNum -= 11;
  }
  date.innerHTML = monthNames[nowMonth -= 1];
  year.innerHTML = nowYear + (yearNum/11)
});

thirdButton.addEventListener("click", () => {
  if (nowMonth === 11 ) {
    nowMonth = 0;
    yearNum += 11;
  };
  date.innerHTML = monthNames[nowMonth += 1];
  year.innerHTML = nowYear + (yearNum/11)
});

let getEl = document.querySelectorAll("ul.days ");


window.addEventListener("click", function(event) {
  let target = event.target;

  if (target.tagName != 'LI') return;

  target.classList.add("circle")
})