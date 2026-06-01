
// ============================
// POMODORO TIMER
// ============================
const user = localStorage.getItem("loggedInUser");

const welcomeText =
document.getElementById("welcomeText");

if(user && welcomeText){
    welcomeText.innerText =
    `Welcome ${user} 👋`;
}

const profileName =
document.getElementById("profileName");

const user =
localStorage.getItem("loggedInUser");

if(profileName && user){
    profileName.innerText = user;
}

const loggedInUser =
localStorage.getItem("loggedInUser");

if(
    !loggedInUser &&
    window.location.pathname.includes("dashboard.html")
){
    window.location.href = "login.html";
}

const user =
localStorage.getItem("loggedInUser");

const welcome =
document.getElementById("welcomeText");

if(user && welcome){
    welcome.innerText =
    `Welcome ${user} 👋`;
}

const userName =
localStorage.getItem("loggedInUser");

if(userName){

    const heading =
    document.querySelector(".dashboard-header h1");

    if(heading){
        heading.innerText =
        `Welcome ${userName} 👋`;
    }

}

const logoutBtn =
document.getElementById("logoutBtn");

if(logoutBtn){

    logoutBtn.addEventListener("click",()=>{

        localStorage.removeItem(
            "loggedInUser"
        );

        window.location.href =
        "login.html";

    });

}

let time = 1500; // 25 minutes
let timerRunning = false;
let interval;

function startTimer() {

    if (timerRunning) return;

    timerRunning = true;

    interval = setInterval(() => {

        let minutes = Math.floor(time / 60);
        let seconds = time % 60;

        document.getElementById("timer").innerText =
            `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

        time--;

        if (time < 0) {
            clearInterval(interval);

            alert("🎉 Pomodoro Session Completed!");

            timerRunning = false;
            time = 1500;

            document.getElementById("timer").innerText = "25:00";
        }

    }, 1000);
}


// ============================
// TASK COUNTER
// ============================

const checkboxes = document.querySelectorAll(
    '.task input[type="checkbox"]'
);

checkboxes.forEach(box => {

    box.addEventListener("change", updateGoals);

});

function updateGoals() {

    let completed = 0;

    checkboxes.forEach(box => {

        if (box.checked) {
            completed++;
        }

    });

    const goalCard =
        document.querySelector(
            ".dashboard-cards .dash-card:last-child h2"
        );

    if (goalCard) {
        goalCard.innerText = `${completed} / ${checkboxes.length}`;
    }
}


// ============================
// NOTES SAVER
// ============================

const notesArea = document.querySelector("textarea");

if (notesArea) {

    notesArea.value =
        localStorage.getItem("prepNotes") || "";

    notesArea.addEventListener("keyup", () => {

        localStorage.setItem(
            "prepNotes",
            notesArea.value
        );

    });
}


// ============================
// GREETING MESSAGE
// ============================

const currentHour = new Date().getHours();

let greeting = "Welcome Shivani 👋";

if (currentHour < 12) {
    greeting = "Good Morning Shivani ☀️";
}
else if (currentHour < 18) {
    greeting = "Good Afternoon Shivani 🌤️";
}
else {
    greeting = "Good Evening Shivani 🌙";
}

const heading =
    document.querySelector(".dashboard-header h1");

if (heading) {
    heading.innerText = greeting;
}


// ============================
// PROGRESS ANIMATION
// ============================

window.addEventListener("load", () => {

    const progressBars =
        document.querySelectorAll(".progress-fill");

    progressBars.forEach(bar => {

        const width = bar.style.width;

        bar.style.width = "0";

        setTimeout(() => {

            bar.style.transition =
                "width 1.5s ease";

            bar.style.width = width;

        }, 300);

    });

});
const logoutBtn = document.getElementById("logoutBtn");

if(logoutBtn){
    logoutBtn.addEventListener("click", () => {

        localStorage.removeItem("loggedInUser");

        window.location.href = "login.html";
    });
}