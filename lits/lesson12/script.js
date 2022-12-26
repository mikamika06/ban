// function isHere(arr1, arr2) {
// 	if (arr2 in arr1) {
// 		alert("Tаке поле дорівнює: " + arr1[arr2]);
// 	} else {
// 		alert("Не містить");
// 	};

// };

// isHere( {name: "Vika", age: 12, goToSchool: true}, "age");

// let arr = [
// 	{name: 'Petya', age: 18, salary: 6000},
//    	{name: 'Vasya', age: 19, salary: 4000},
//    	{name: 'Katya', age: 31, salary: 13000},
//    	{name: 'Anna', age: 22, salary: 11000},
//    	{name: 'Vika', age: 36, salary: 18000},
// ];

// function func() {
// 	let newArr = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		newArr.push(arr[i].name );
// 	};
// 	newArr.push(0);
// 	for (let j = 0; j < arr.length; j++) {
// 		newArr[5] += arr[j]["salary"];
// 	};
// 	newArr.push(0);
// 	for (let l = 0; l < arr.length; l++) {
// 		newArr[6] += arr[l]["age"];
// 	};
// 	newArr[6] /= arr.length;
// 	return newArr;
// };

// console.log(func());

function Comp() {
	this.model = "PS6",
	this.releaseDate = "12.03.2022",
	this.company = "Sony",
	this.price = "1500$",
	this.specs = "classified",
	this.getModelAndCompany = function() {
		console.log(this.model);
		console.log(this.company);
	},
	this.getReleaseDateSetTimeout = function() {
		setTimeout(() => alert(this.releaseDate), 2000);
	}
};

let getComp = new Comp();
getComp.getReleaseDateSetTimeout();
