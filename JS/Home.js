function updateClock() {
    const clockContainer = document.getElementById("ClockContainer");
    const timpul = new Date();
    const ora = String(timpul.getHours()).padStart(2, '0');
    const minute = String(timpul.getMinutes()).padStart(2, '0');
    const secunde = String(timpul.getSeconds()).padStart(2, '0');

    clockContainer.textContent = `${ora}:${minute}:${secunde}`;
}

setInterval(updateClock, 1000);
document.addEventListener("DOMContentLoaded", updateClock);
x=0
function disp(){
    if(x==0){
        document.getElementById("DropDown").style.display="grid";
        x = 1;
    }
    else{
        document.getElementById("DropDown").style.display="none";
        x = 0;
    }
    setInterval(Drop, 1)
}
function Drop(){
    if(window.innerWidth>=720)
        document.getElementById("DropDown").style.display="none";
}
document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById("Overlay");
    const editButton = document.getElementById("Editor");
    const editMenu = document.getElementById("EditMenu");
    const closeButton = document.getElementById("CloseButton");

    editButton.addEventListener("click", () => {
        editMenu.style.display = "block";
        overlay.style.display = "block";
    });

    closeButton.addEventListener("click", () => {
        editMenu.style.display = "none";
        overlay.style.display = "none";
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const navBar = document.querySelector('.Bara');
    const editor = document.getElementById('Editor');
    const textineditor=document.getElementById('culoare')
    if (navBar && editor) {
        const navBarColor = getComputedStyle(navBar).backgroundColor;
        textineditor.textContent = `Culoarea barei de navigare este: ${navBarColor}`;
    } 
});

document.addEventListener("DOMContentLoaded", () => {
    const colorPicker = document.getElementById("colorPicker");
    colorPicker.addEventListener("input", (event) => {
        const selectedColor = event.target.value;
        document.documentElement.style.setProperty("--navbar-color", selectedColor);
        localStorage.setItem("navbarColor", selectedColor);
    });

    const savedColor = localStorage.getItem("navbarColor");
    if (savedColor) {
        document.documentElement.style.setProperty("--navbar-color", savedColor);
        colorPicker.value = savedColor;
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const removeImageInput = document.getElementById("removeImage");
    const removeImageButton = document.getElementById("removeImageButton");

    removeImageButton.addEventListener("click", () => {
        const imageNumber = parseInt(removeImageInput.value, 10);
        if (isNaN(imageNumber) || imageNumber < 1 || imageNumber > 36) {
            alert("Introdu un număr valid între 1 și 36.");
            return;
        }

        const imageElement = document.querySelector(`.ContainerPoze a:nth-child(${imageNumber})`);
        if (imageElement) {
            imageElement.style.display = "none";
        } 
    });
});

const pozaIon = document.querySelector('.PozaIon');

function rotateElement(element) {
    let angle = -5;

    setInterval(() => {
        angle = angle === -5 ? 5 : -5;
        element.style.transform = `rotate(${angle}deg)`;
    }, 200);
}

rotateElement(pozaIon);
//quiz "ion mihalache"
const quizQuestions = [
    {
        question: "Unde se află L.T.I.M.",
        answers: ["Pitești", "Topoloveni", "Ștefănești"],
        correct: 1,
    },
    {
        question: "Cate clase de real are liceul?",
        answers: ["6", "5", "3"],
        correct: 2,
    },
    {
        question: "Pe ce loc e în Argeș în funcție de notele de la BAC?",
        answers: ["22", "14", "15"],
        correct: 0,
    },
];

let QuestionIndex = 0;
let score = 0; 

function startQuiz() {
    document.getElementById("StartQuizButton").style.display = "none";
    document.getElementById("QuizContainer").style.display = "block";
    showQuestion();
}


function showQuestion() {
    const questionElement = document.getElementById("Question");
    const answersElement = document.getElementById("Answers");

    const currentQuestion = quizQuestions[QuestionIndex];
    questionElement.textContent = currentQuestion.question;

    const buttons = answersElement.querySelectorAll(".AnswerButton");
    buttons.forEach((button, index) => {
        button.textContent = currentQuestion.answers[index];
    });
}

function submitAnswer(answerIndex) {
    const currentQuestion = quizQuestions[QuestionIndex];

    if (answerIndex === currentQuestion.correct) {
        score++;
    }

    QuestionIndex++;
    if (QuestionIndex < quizQuestions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    const quizContainer = document.getElementById("QuizContainer");
    quizContainer.innerHTML = `<h2>Ai terminat!</h2><p>Scorul tău este ${score}/${quizQuestions.length}.</p>`;
}
