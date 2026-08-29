const questions = [
    {
        question: "What should you feed the ducks at the lake?",
        options: ["Bread", "Healthy seeds", "Chips"],
        correct: 1
    },
    {
        question: "What happens when bread rots in the water?",
        options: ["Nothing changes", "It lowers oxygen levels", "It feeds the fish"],
        correct: 1
    },
    {
        question: "Why is litter dangerous to wildlife?",
        options: ["It can trap or injure animals", "It makes the park look tidy", "Animals never notice it"],
        correct: 0
    },
    {
        question: "What can happen if an animal eats plastic?",
        options: ["It helps digestion", "It can cause serious harm", "It gives them energy"],
        correct: 1
    },
    {
        question: "What's a good way to help protect the park?",
        options: ["Leave rubbish behind", "Bring healthy snacks and take rubbish home", "Feed animals lots of bread"],
        correct: 1
    }
];
 
const POINTS_PER_CORRECT = 20;
 
const progressEl = document.getElementById('quizProgress');
const questionEl = document.getElementById('quizQuestion');
const optionsEl = document.getElementById('quizOptions');
const nextBtn = document.getElementById('nextBtn');
const pointsTotal = document.getElementById('pointsTotal');
 
let current = 0;
let score = 0;
let answered = false;
 
function loadQuestion() {
    const q = questions[current];
    answered = false;
 
    progressEl.textContent = `Question ${current + 1} of ${questions.length}`;
    questionEl.textContent = q.question;
 
    optionsEl.innerHTML = '';
    q.options.forEach((optionText, index) => {
        const button = document.createElement('button');
        button.className = 'quiz-option';
        button.textContent = optionText;
        button.addEventListener('click', () => selectAnswer(index, button));
        optionsEl.appendChild(button);
    });
 
    nextBtn.style.display = 'none';
}
 
function selectAnswer(index, button) {
    if (answered) return;
    answered = true;
 
    const q = questions[current];
    const optionButtons = optionsEl.querySelectorAll('.quiz-option');
 
    optionButtons.forEach((btn, i) => {
        btn.disabled = true;
        if (i === q.correct) {
            btn.classList.add('correct');
        } else if (i === index) {
            btn.classList.add('incorrect');
        }
    });
 
    if (index === q.correct) {
        score += POINTS_PER_CORRECT;
        pointsTotal.textContent = score;
    }
 
    nextBtn.textContent = current === questions.length - 1 ? 'Restart quiz' : 'Next question';
    nextBtn.style.display = 'block';
}
 
nextBtn.addEventListener('click', () => {
    if (current === questions.length - 1) {
        current = 0;
        score = 0;
        pointsTotal.textContent = score;
    } else {
        current++;
    }
    loadQuestion();
});
 
loadQuestion();