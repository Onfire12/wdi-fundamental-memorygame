
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


function checkformatch(){
	if(cardsInPlay[0] === cardsInPlay[1]){
		console.log("You found a match!");
		alert("You found a match!!");
	}
	else{
		console.log("Sorry, try again!");
		alert("Sorry,try again");
	}
};

function flipCard(){
	cardID=this.getAttribute('data-id');
	console.log(cardID);
	cardsInPlay.push(cards[cardID].rank);
	//display card front
	//"this" keyword to access the card we click
	this.setAttribute("src",cards[cardID].cardImage);
	//access cardimage property
	console.log(cards[cardID].cardImage);
	console.log(cards[cardID].suit);
	if(cardsInPlay.length === 2){
		checkformatch();
		cardsInPlay=[];
	}
}

var createBoard = function(){
	for(var i = 0; i < cards.length; i++){
		//adding card image and id
		var cardElement= document.createElement("img");
		cardElement.setAttribute("src","file:///Users/zzhao/Downloads/images/back.png");
		cardElement.setAttribute("data-id",i);
		//finalizing the card
		cardElement.addEventListener("click",flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	}
};

createBoard();


//Define Reset button
//refresh page
// function reset(){
// 		window.location.reload();
// }
var resetbutton=document.getElementById("button");
resetbutton.addEventListener("click",function(){
	window.location.reload();
});


