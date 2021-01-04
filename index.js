
var answers = `It is certain. It is decidedly so. Without a doubt. Yes - definitely. You may rely on it. As I see it, yes. Most likely. Outlook good. Yes. Signs point to yes. Reply hazy, try again. Ask again later. Better not tell you now. Cannot predict now. Concentrate and ask again. Don't count on it. My reply is no. Outlook not so good. Very doubtful.`.split('.');
var input = document.querySelector('#input-question');
var eightBall = document.querySelector('.eight-ball');
var clearButton = document.querySelector('.clear-button');
var getAnswerButton = document.querySelector('.get-answer');
var leftBox = document.querySelector('.left-box');
var userQuestion;

getAnswerButton.addEventListener('click', getAnswer);
leftBox.addEventListener('click', clearBox);

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getAnswer() {
  if(input.value !== "") {
    leftBox.innerHTML =
    `<input type="text"id="input-question" placeholder="Ask your question here!">
     <button class="get-answer">Get your answer</button>
     <h1 type="text"class="user-question">"${input.value}?"</h1>
     <h2 type="text"class="random-answer">${getRandomElement(answers)}</h2>
     <button class="clear-button">Clear</button>`;
    userQuestion = leftBox.querySelector('h1');
  }
}

function clearBox(event) {
  if(event.target.classList.contains('clear-button')) {
    leftBox.innerHTML = `<input type="text"id="input-question" placeholder="Ask your question here!">
    <button class="get-answer">Get your answer</button>
    <img class="eight-ball"src="assets/eight-ball.png"alt"8 Ball"></img>
    <button class="clear-button">Clear</button>`;
  }
  }
