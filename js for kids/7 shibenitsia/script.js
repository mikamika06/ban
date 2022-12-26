let words = [
	"javascript",
	"monkey",
	"amazing",
	"pancake",
	"chocolate",
	"capuchino"
];

let word = words[Math.floor(Math.random() * words.length)];

let answerArray = [];
for (let i = 0; i < word.length; i++) {
	answerArray[i] = "_";
};
let remainingLetters = word.length;

while (remainingLetters > 0) {
	alert(answerArray.join(" "));
	let guess = prompt("Guess a letter, or click Cancel to stop playing");
	if ( guess === null) {
		alert("Please enter a single letter");
	} else {
		for ( let j = 0; j < word.length; j++) {
			if (word[j] === guess ) {
				answerArray[j] = guess;
				remainingLetters--;
			}
		}
	}

}
alert(answerArray.join(" "));
alert("Good job! The answer was " + word);
