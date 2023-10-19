<<<<<<< HEAD
var randomNumber1 = Math.round((Math.random()*5)+1);
var randomNumber2= Math.round((Math.random()*5)+1);

var ranImg = 'images/dice'+randomNumber1+'.png'
var ranImg2 = 'images/dice'+randomNumber2+'.png'


document.querySelector('.img1').setAttribute('src',ranImg);
document.querySelector('.img2').setAttribute('src',ranImg2);

function rollDice(){

  location.reload();
}
if(randomNumber1 > randomNumber2){
  document.querySelector('h1').innerHTML = "🏴󠁧󠁢󠁥 Player 1 Wins!";
}
else if(randomNumber1 < randomNumber2){
  document.querySelector('h1').innerHTML = "Player 2 Wins! 🏴󠁧󠁢󠁥";
}
else if(randomNumber1 === randomNumber2){
  document.querySelector('h1').innerHTML = "Draw";
}
=======
var randomNumber1 = Math.round((Math.random()*5)+1);
var randomNumber2= Math.round((Math.random()*5)+1);

var ranImg = 'images/dice'+randomNumber1+'.png'
var ranImg2 = 'images/dice'+randomNumber2+'.png'


document.querySelector('.img1').setAttribute('src',ranImg);
document.querySelector('.img2').setAttribute('src',ranImg2);

function rollDice(){

  location.reload();
}
if(randomNumber1 > randomNumber2){
  document.querySelector('h1').innerHTML = "🏴󠁧󠁢󠁥 Player 1 Wins!";
}
else if(randomNumber1 < randomNumber2){
  document.querySelector('h1').innerHTML = "Player 2 Wins! 🏴󠁧󠁢󠁥";
}
else if(randomNumber1 === randomNumber2){
  document.querySelector('h1').innerHTML = "Draw";
}
>>>>>>> 5b33fc51f122ae30ea353b005528b06d33af2209
