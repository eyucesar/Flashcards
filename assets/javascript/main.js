
$(document).ready(function() {

	// function for the carousel
	$('#media').carousel({
    	pause: true,
    	interval: false,
  	});

	// cloze deleted card constructor function
	var ClozeCard = function(fullText, clozeDeleted) {
		this.fullText = fullText;
		this.clozeDeleted = clozeDeleted;
		this.partialText = fullText.replace(clozeDeleted, "___");
		this.inFullText = function() {
			if (this.fullText.includes(this.clozeDeleted)) {
				console.log("Cloze deleted text is found in the full text.");
			} else {
				console.log("Cloze deleted text is not found in the full text.");
				this.partialText = "Cannot be generated due to cloze deletion error.";
			}
		}
	}

	// basic card constructor function
	var BasicCard = function(front, back) {
		this.front = front;
		this.back = back;
	}

	//creating a bunch of cloze deleted card objects with the ClozeCard construction function
	var numberCards = [
		new ClozeCard("42 is the number of US gallons in a barrel of oil.", "42"),
		new ClozeCard("12 is the largest number that has just one syllable.", "12"),
		new ClozeCard("82 is the number of games in an NBA or NHL regular season.", "82"),
		new ClozeCard("29 is the number of days February has in leap years.", "29"),
		new ClozeCard("10 is the highest score possible in Olympics gymnastics competitions.", "10"),
		new ClozeCard("98.6 is the temperature (F) of the normal body.", "98.6"),
		new ClozeCard("13 is the speed of rush hour traffic on average in km/h in London.", "13"),
		new ClozeCard("0 is the coldest possible temperature on the Kelvin scale.", "0")
	];

	var catCards = [
		new ClozeCard("A cat has 24 whiskers on average.", "24"),
		new ClozeCard("Outdoor-only cats live 5 years on average.", "5"),
		new ClozeCard("A term for a group of cats is clowder.", "clowder"),
		new ClozeCard("A cat can travel at a top speed of 31 mph over a short distance.", "31"),
		new ClozeCard("The most popular pedigreed cat is the Persian cat.", "Persian"),
		new ClozeCard("The thick hair around the face of some cats is called ruff.", "ruff"),
		new ClozeCard("Most house cats have a total of 18 claws.", "18"),
		new ClozeCard("A term for a group of kittens is kindle.", "kindle")
	];

	var movieCards = [
		new ClozeCard("Michael Keaton starred as Batman in 1989 movie Batman.", "Michael Keaton"),
		new ClozeCard("Avatar is the highest grossing film of all time (disregarding inflation).", "Avatar"),
		new ClozeCard("Milla Jovovich plays Alice in the Resident Evil movies.", "Milla Jovovich"),
		new ClozeCard("Steven Spielberg directed 'E.T. the Extra-Terrestrial'.", "Steven Spielberg"),
		new ClozeCard("Aladdin was the first movie to feature a celebrity as a voice actor.", "Aladdin"),
		new ClozeCard("Uma Thurman danced the twist with John Travolta in 'Pulp Fiction'.", "Uma Thurman"),
		new ClozeCard("The title of the first Bond movie was Dr. No.", "Dr. No"),
		new ClozeCard("The name of the orange and white bot in 'Star Wars: The Force Awakens' is BB-8.", "BB-8")
	];

	var sportsCards = [
		new ClozeCard("In golf, eagle is the name given to a hole score of two under par.", "eagle"),
		new ClozeCard("Japan will host the 2020 Summer Olympics.", "Japan"),
		new ClozeCard("Russia will host the 2018 FIFA World Cup.", "Russia"),
		new ClozeCard("Michael Schumacher has been the Formula 1 world champion 7 times.", "Michael Schumacher"),
		new ClozeCard("Which Grand Slam tennis tournament occurs last?", "US Open"),
		new ClozeCard("What is the oldest team in Major League Baseball?", "Atlanta Braves"),
		new ClozeCard("New Orleans Saints won the Super Bowl in 2009.", "2009"),
		new ClozeCard("22 soccer players should be on the field at the same time.", "22")
	];

	//creating a bunch of basic card objects with the BasicCard construction function
	var boardGameCards = [
		new BasicCard("In a game of Monopoly, what colour are the two cheapest properties?", "Brown"),
		new BasicCard("How many dice are used in the game of Yahtzee?", "5"),
		new BasicCard("There is a Donald Trump board game, which was made in 1989. True or False?", "True"),
		new BasicCard("How many pieces are there on the board at the start of a game of chess?", "32"),
		new BasicCard("In which board game will you find a game piece such as a candlestick?", "Clue"),
		new BasicCard("What game involves answering questions to earn 'pie pieces'?", "Trivial Pursuit"),
		new BasicCard("What board game is the most popular game in America?", "Scrabble"),
		new BasicCard("'Hit' and 'Miss' are said in this sea battle, what game is it?", "Battleship")
	];

	var artCards = [
		new BasicCard("Who painted the famous Dutch Golden age painting 'The Night Watch'?", "Rembrandt"),
		new BasicCard("What French sculptor designed the Statue of Liberty?", "Auguste Bartholdi"),
		new BasicCard("Who painted a late 15th-century mural known as the Last Supper?", "Leonardo da Vinci"),
		new BasicCard("What American artist is known for paintings of flags?", "Jasper Johns"),
		new BasicCard("Which painter started the impressionist movement?", "Claude Monet"),
		new BasicCard("The art of paper folding is known as what?", "Origami"),
		new BasicCard("Which artist created the sculpture 'The Thinker'?", "Auguste Rodin"),
		new BasicCard("Who painted the Sistine Chapel?", "Michelangelo")
	];

	var historyCards = [
		new BasicCard("What was William Frederick Cody better known as?", "Buffalo Bill"),
		new BasicCard("King Henry VIII was the second monarch of which European royal house?", "Tudor"),
		new BasicCard("Who discovered Penicillin?", "Alexander Flemming"),
		new BasicCard("The collapse of the Soviet Union took place in which year?", "1991"),
		new BasicCard("Who was the Prime Minister of Japan when Japan declared war on the US?", "Hideki Tojo"),
		new BasicCard("What was the first sport to have been played on the moon?", "Golf"),
		new BasicCard("In 1939, Britain and France declared war on Germany after it invaded which country?", "Poland"),
		new BasicCard("To what political party did Abraham Lincoln belong when elected POTUS?", "Republican")
	];

	var computerCards = [
		new BasicCard("Which computer language would you associate Django framework with?", "Python"),
		new BasicCard("The programming language 'Swift' was created to replace which language?", "Objective-C"),
		new BasicCard("How many bytes are in a kilobyte of RAM?", "1024"),
		new BasicCard("What does CPU stand for?", "Central Processing Unit"),
		new BasicCard("Linus Horvaldz created Linux and Git. True or False?", "False"),
		new BasicCard("In web design, what does CSS stand for?", "Cascading Style Sheet"),
		new BasicCard("What is the code name for the mobile operating system Android 7.0?", "Nougat"),
		new BasicCard("In 'Hexadecimal', what color would be displayed from the color code '#00FF00'?", "Green")
	];

	// function that will generate cloze cards and append them to the card row
	function generateClozeCards(cardSet) {
		$("#cardRow").empty();
		for (var i = 0; i < cardSet.length; i++) {
			$("#cardRow").append("<div class='col-sm-6 col-md-3 flip'><div class='thumbnail flashCardThumbnail'><div class='caption cardCaption front'><h4 class='text-center question'>" + cardSet[i].partialText + "</h4></div><div class='caption cardCaption back'><h5 class='text-center question'>" + cardSet[i].clozeDeleted + "</h5></div></div></div>");
		}
	}

	// function that will generate basiccards and append them to the card row
	function generateBasicCards(cardSet) {
		$("#cardRow").empty();
		for (var i = 0; i < cardSet.length; i++) {
			$("#cardRow").append("<div class='col-sm-6 col-md-3 flip'><div class='thumbnail flashCardThumbnail'><div class='caption cardCaption front'><h4 class='text-center question'>" + cardSet[i].front + "</h4></div><div class='caption cardCaption back'><h5 class='text-center question'>" + cardSet[i].back + "</h5></div></div></div>");
		}
	}

	// generate card functions will be called on click to thumbnails
	$("#numbers").on("click", function() {
		generateClozeCards(numberCards);
	});

	$("#cats").on("click", function() {
		generateClozeCards(catCards);
	});

	$("#movies").on("click", function() {
		generateClozeCards(movieCards);
	});

	$("#sports").on("click", function() {
		generateClozeCards(sportsCards);
	});

	$("#boardGames").on("click", function() {
		generateBasicCards(boardGameCards);
	});

	$("#computers").on("click", function() {
		generateBasicCards(computerCards);
	});

	$("#history").on("click", function() {
		generateBasicCards(historyCards);
	});

	$("#art").on("click", function() {
		generateBasicCards(artCards);
	});

	//function that flips the cards using flip.js jquery library
	$("body").on("DOMNodeInserted", function(){
	    $(".flip").flip({
	    	speed: 700,
	    	axis: 'y',
	        trigger: 'click'
	    });
	});

});