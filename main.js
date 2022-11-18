//Random number generator for player1

const btn = document.getElementById('btn');
btn.addEventListener('click', function(){
    var player1 = Math.random();
player1 = player1*6;
player1 = Math.floor(player1) + 1;
// alert(player1);

//random number for images
var randomImage
randomImage = "images/dice" + player1 + '.png';
// alert(randomImage);
document.querySelectorAll("img")[0].setAttribute("src", randomImage);

// random number generator for player2
var player2 = Math.random();
player2 = player2*6;
player2 = Math.floor(player2) + 1;
// alert(player2);

//random number generator for player2
var randomImg2
randomImg2 = "images/dice" + player2 + '.png';
// alert(randomImg2);
document.querySelectorAll("img")[1].setAttribute("src", randomImg2);


//the if statement for player1 and player2
if( player1 > player2 ){
    document.querySelector('h1').innerHTML = "Player1 Wins";
}
else if(player1 < player2){
    document.querySelector('h1').innerHTML = "Player2 Wins";
}else{
    document.querySelector('h1').innerHTML = "Draw!";

};
});