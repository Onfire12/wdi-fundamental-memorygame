
console.log("up and running!");



var cards=[
	{rank:"queen",
	 suit:"hearts",
	 cardImage:"file:///Users/zzhao/Downloads/images/queen-of-hearts.png"
	},
	{rank:"queen",
	 suit:"diamonds",
	 cardImage:"file:///Users/zzhao/Downloads/images/queen-of-diamonds.png"
	},
	{rank:"king",
	 suit:"hearts",
	 cardImage:"file:///Users/zzhao/Downloads/images/king-of-hearts.png"
	},
	{rank:"king",
	 suit:"diamonds",
	 cardImage:"file:///Users/zzhao/Downloads/images/king-of-diamonds.png"
	},
	];

var cardsInPlay=[];

var cardOne=cards[0];
console.log(cardOne);
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne.rank);

var cardTwo=cards[1];
cardsInPlay.push(cardTwo);
console.log("User flipped "  + cardTwo.rank);

var cardThree=cards[2];
cardsInPlay.push(cardThree);
console.log("User flipped " + cardThree.rank);

var cardFour=cards[3];
cardsInPlay.push(cardFour);
console.log("User flipped "  + cardFour.rank);
console.log(cardsInPlay.rank);

console.log(cardsInPlay.length);
// if(cardsInPlay.length === 2){
// 	alert("works!!")
// }
// else{
// 	alert("Please try second time!")
// };

function checkformatch(){
	if(cardsInPlay[0] === cardsInPlay[1]){
		console.log("You found a match!");
	}
	else{
		console.log("Sorry, try again!")
	}
};





var card1=document.getElementById("C1");
card1.addEventListener("click",function(){
	console.log("you click Card1!!");
});

