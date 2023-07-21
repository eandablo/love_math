document.addEventListener('DOMContentLoaded',function (){
  let buttons=document.getElementsByTagName('button');
  for (let button of buttons){
    button.addEventListener('click',function(){
        if (this.getAttribute('data-type')==='submit'){
            alert("You clicked submit");
        } else{
            let gameType=this.getAttribute('data-type');
            alert(`you clicked ${gameType}`);
        }
    });
  }
}
);
function runGame(){

}
function aswerCheck(){

}
function calculateCorrectAnswer(){

}
function incrementScore(){

}
function incrementWrongAnswer(){

}
function displayAdditionQuestion(){

}
function displaySubstractQuestion() {

}
function displayMultiplyQuestion() {

}
