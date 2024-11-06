const numberHours = document.querySelector(".number-hours");
const barSeconds = document.querySelector(".bar-seconds");

const numberElement = [];
const barElement = [];

//creat number hours
for (let i = 1; i <= 12; i++) {
  numberElement.push(`<span style="--index:${i};"><p>${i}</p></span>`);
}

numberHours.insertAdjacentHTML("afterbegin", numberElement.join(""));

//create bar seconds

for (let i = 1; i <= 60; i++) {
  barElement.push(`<span style="--index:${i};"><p></p></span>`);
}

barSeconds.insertAdjacentHTML("afterbegin", barElement.join(""));

const handHours = document.querySelector(".hand.hours");
const handMinutes = document.querySelector(".hand.minutes");
const handSeconds = document.querySelector(".hand.seconds");

function getCurrentTime() {
  let data = new Date();

  let currentHours = data.getHours();
  let currentMinutes = data.getMinutes();
  let currentSeconds = data.getSeconds();

  handHours.style.transform = `rotate(${
    currentHours * 30 + currentMinutes / 2
  }deg)`;
  handMinutes.style.transform = `rotate(${
    currentMinutes * 6 + currentSeconds / 10
  }deg)`;
  handSeconds.style.transform = `rotate(${currentSeconds * 6}deg)`;
}

getCurrentTime();

setInterval(getCurrentTime, 1000); // call getcurrenttime to have clock hands every second // 1000s = 1s
