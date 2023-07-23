document.addEventListener('DOMContentLoaded', function () {
    let buttons = document.getElementsByTagName('button');
    for (let button of buttons) {
        button.addEventListener('click', function () {
            if (this.getAttribute('data-type') === "submit") {
                answerCheck();
            } else {
                let gameType = this.getAttribute('data-type');
                runGame(gameType);
            }
        });
    }
    document.getElementById('answer-box').addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            answerCheck();
        }
    });
    runGame(gameType);
}
);
/**
 * The main game 'loop' called when script is first loaded
 * and after the user´s answer has been processed
 */
function runGame(gameType) {
    document.getElementById('answer-box').value = "";
    document.getElementById('answer-box').focus();
    let num1 = Math.floor(Math.random() * 25 + 1);
    let num2 = Math.floor(Math.random() * 25 + 1);
    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else if (gameType === "substract") {
        displaySubstractQuestion(num1, num2);
    } else if (gameType === "multiply") {
        displayMultiplyQuestion(num1, num2);
    } else if (gameType === "division") {
        displayDivisionQuestion(num1, num2);
    } else {
        alert("Type of game unknown");
        throw 'Unknown game type, Aborting';
    }
}
/**
 * Obtains the user aswner from the DOM
 * calls calculateCorrectAnswer function to compare with the userAnswer
 * let knows the user whether their answer is correct or not
 */
function answerCheck() {
    let userAnswer = parseInt(document.getElementById('answer-box').value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = (userAnswer === calculatedAnswer[0]);
    if (isCorrect) {
        alert('Congratulations, your asnwer is correct');
        incrementScore();
    } else {
        alert(`Your answer ${userAnswer}, the correct answer is ${calculatedAnswer[0]}`);
        incrementWrongAnswer();
    }
    runGame(calculatedAnswer[1]);
}
/**
 * Function obtains operands and operator from DOM
 * calculates the correct answer using DOM values
 */
function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById('operand-1').innerText);
    let operand2 = parseInt(document.getElementById('operand-2').innerText);
    let operator = document.getElementById('operator').innerText;
    if (operator === '+') {
        return [operand1 + operand2, "addition"];
    } else if (operator === '-') {
        return [operand1 - operand2, "substract"];
    } else if (operator === '*') {
        return [operand1 * operand2, "multiply"];
    } else if (operator === '/') {
        return [operand1 / operand2, "division"];
    } else {
        alert('Unimplemented operator');
        throw `Operator ${operator} unknown, abort game`;
    }
}
/**
 * Obtains score values from DOM element
 * increments the value by one if the answer is correct
 */
function incrementScore() {
    let score = parseInt(document.getElementById('score').innerText);
    document.getElementById('score').textContent = ++score;
}
/**
 * Obtains incorrect answers from DOM element
 * increments the value by one if the answer is incorrect
 */
function incrementWrongAnswer() {
    let score = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').textContent = ++score;
}
/**
 * writes + operator and operands to the DOM
 */
function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand-1').textContent = operand1;
    document.getElementById('operand-2').textContent = operand2;
    document.getElementById('operator').textContent = '+';
}
/**
 * writes - operator and operands to the DOM
 */
function displaySubstractQuestion(operand1, operand2) {
    if (operand1 >= operand2) {
        document.getElementById('operand-1').textContent = operand1;
        document.getElementById('operand-2').textContent = operand2;
        document.getElementById('operator').textContent = '-';
    } else {
        document.getElementById('operand-1').textContent = operand2;
        document.getElementById('operand-2').textContent = operand1;
        document.getElementById('operator').textContent = '-';
    }

}
/**
 * writes * operator and operands to the DOM
 */
function displayMultiplyQuestion(operand1, operand2) {
    document.getElementById('operand-1').textContent = operand1;
    document.getElementById('operand-2').textContent = operand2;
    document.getElementById('operator').textContent = '*';
}
/**
 * writes / operator and operands to the DOM
 */
function displayDivisionQuestion(operand1, operand2) {
    document.getElementById('operand-1').textContent = operand1;
    document.getElementById('operand-2').textContent = operand2;
    document.getElementById('operator').textContent = '/';
}