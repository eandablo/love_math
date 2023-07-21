document.addEventListener('DOMContentLoaded',function (){
  let buttons=document.getElementsByTagName('button');
  for (let button of buttons){
    button.addEventListener('click',function(){
        if (this.getAttribute('data-type')==='submit'){
            alert("You clicked submit");
        } else{
            let gameType=this.getAttribute('data-type');
            runGame(gameType);
        }
    });
  }
  runGame("addition");
}
);
/**
 * The main game 'loop' called when script is first loaded
 * and after the user´s answer has been processed
 */
function runGame(gameType){
  let num1=Math.floor(Math.random()*25+1);
  let num2 = Math.floor(Math.random() * 25 + 1);
  if (gameType==="addition") {
    displayAdditionQuestion(num1,num2);
  } else {
    alert("Type of game unknown");
    throw 'Unknown game type, Aborting';
  }
}
function aswerCheck(){

}
function calculateCorrectAnswer(){

}
function incrementScore(){

}
function incrementWrongAnswer(){

}
function displayAdditionQuestion(operand1,operand2){
    document.getElementById('operand-1').textContent=operand1;
    document.getElementById('operand-2').textContent=operand2;
    document.getElementById('operator').textContent='+';
}
function displaySubstractQuestion() {

}
function displayMultiplyQuestion() {

}
