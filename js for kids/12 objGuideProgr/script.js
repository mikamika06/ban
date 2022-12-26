let dog = {
	name: "Pancake",
	legs: 4,
	isAwesome: true,
	age: 6
};

dog.bark = function() {
	console.log("Woof woof! My name is " + this.name + "!");
};

dog.bark();
