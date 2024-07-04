const currentTimeUTC = document.querySelector('[data-testid="currentTimeUTC"]');
const currentDay = document.querySelector('[data-testid="currentDay"]');

setInterval (getTime, 1000)

// Update current time in UTC

function getTime(){
    const now = new Date();
    const utcTime = now.toUTCString();
    currentTimeUTC.textContent = utcTime;
}

// Update current day of the week
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const today = new Date().getDay();
currentDay.textContent = days[today];

const inputName = document.querySelector('[data-testid="nameInput"]')
const inputEmail = document.querySelector('[data-testid="emailInput"]')
const message = document.querySelector('[data-testid="textarea"]')

