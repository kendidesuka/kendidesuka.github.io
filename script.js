const quizData = [
	{
		question: "___ is copying an author's text in verbatim.",
		a: "Paraphrasing",
		b: "Quoting",
		c: "Summarizing",
		correct: "b",
	},
	{
		question: "A legitimate way to borrow from a source.",
		a: "Paraphrasing",
		b: "Quoting",
		c: "Summarizing",
		correct: "a",
	},
	{
		question: "'Vox Poouli' in latin means ___.",
		a: "Voice of the people",
		b: "A prayer",
		c: "Church",
		correct: "a",
	},
	{
		question: "A machinemade in imitation of a human being.",
		a: "Vincenez",
		b: "Vox Populi",
		c: "Robot",
		correct: "c",
	},
	{
		question: "A poltergeist means?",
		a: "A noisy ghost",
		b: "Voice of the people",
		c: "A just punishment; anything that seems to defeat or frustate a person",
		correct: "a",
	},
	{
		question: "A good summary is objective.",
		a: "True",
		b: "False",
		c: "Maybe",
		correct: "a",
	},
	{
		question: "A summary is just another term of a paraphrase.",
		a: "True",
		b: "False",
		c: "Maybe",
		correct: "b",
	},
	{
		question: "Maintain coherence in writing a summary.",
		a: "True",
		b: "False",
		c: "Maybe",
		correct: "a",
	},
	{
		question: "A summary should have the same length as the original.",
		a: "True",
		b: "False",
		c: "Maybe",
		correct: "b",
	},
	{
		question: "Include all the important ideas from the original text.",
		a: "True",
		b: "False",
		c: "Maybe",
		correct: "a",
	},
];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})