
// let name = "Nick";
//  console.log("Hello "+ name);
// if (name.length > 7) {
// 	console.log("Your name is REALLY long");
// } else {
// 	console.log("Your name isn't very long");
// }

// let lemonChicken = false;
// let beefWithBkackBean = true;
// let sweetAndSoulPork = true;

// if (lemonChicken) {
// 	console.log("Great! I'm having lemon chicken!" );
// } else if (beefWithBkackBean) {
// 	console.log("I'm having beef.");
// } else if (sweetAndSoulPork) {
// 	console.log("OK I'll have the pork")
// } else {
// 	console.log("Well, I guess I'll have rice then");
// }

// let name = "Nick";
// if (name === "Alex") {
// 	console.log("Hellow me!");
// } else {
// 	console.log("Hello stranger");
// }

// let sheepCounted = 0;
// while (sheepCounted < 10) {
// 	console.log("I have counted " + sheepCounted + "sheep!" );
// 	sheepCounted++;
// }
// console.log("zzzzzzz");

// for ( let sheepCounted = 0; sheepCounted < 10; sheepCounted++) {
// 	console.log("I have counted " + sheepCounted + " sheep!");
// }

// let animals = ["Lion", "Flamingo", "Polar bear", "Boa Constriktor" ];

// for (let i = 0; i < animals.length; i++) {
// 	console.log("This zoo contained a " + animals[i] + ",");
// }
// console.log(animals.length);

// let name = "Nick";

// for ( let i = 0; i < name.length; i ++) {
// 	console.log("My name contains letter " + name[i] + ".");
// }

// for (let x = 2; x < 10000; x = x + 2) {
// 	console.log(x);
// }

// for ( i = 3; i < 10000; i = i * 3) {
// 	console.log(i);
// }

// let x = 3;
// while ( x < 10000 ) {
// console.log(x);
// x = x * 3;	
// }

// let animals = ["Cat", "Fish", "Lemur", "Komodo dragon"];

// for ( i = 0; i < animals.length; i++) {
// 	console.log( animals[i] = "Awesome " + animals[i]);
// }

// let alphabet = "abcdefghijklmnopqrstuvwxyz";
// let randomString = "";
// while ( randomString.length < 6) {
// 	randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
// }
// console.log(randomString);

let input = "javascript is awesome";
let output = "";
 for (let letter = 0; letter < input.length; letter++ ) {
	if (( input[letter] != "a") && ( input[letter] != "e") && ( input[letter] != "i") && ( input[letter] != "o"))  {
		 output += input[letter];
	}  else if ( input[letter] =="a" ) {
		output += "4";
	}  else if ( input[letter] =="e" ) {
		output += "3";
	}  else if ( input[letter] =="i" ) {
		output += "1";
	}  else if ( input[letter] =="0" ) {
		output += "0";
	}
}
 console.log(output);
