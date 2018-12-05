
console.log("up and running!");



var cards=["queen","queen","king","king"];


var cardOne=cards[0];
console.log(cardOne);
console.log("User flipped " + "" + cardOne);
var cardsInPlay=[];
cardsInPlay.push(cardOne);


var cardTwo=cards[2];
cardsInPlay.push(cardTwo);
console.log(cardsInPlay);

console.log(cardsInPlay.length);
if(cardsInPlay.length === 2){
	alert("works!!")
}
