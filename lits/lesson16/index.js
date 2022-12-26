// let user1 = {
// 	name: "Mike",
// 	age: 20,
// 	hasWork: true,
// 	hasDog : true,
// };

// let user2 = {
// 	name: "Alex",
// 	age: 21,
// 	hasWork: false
	
// };

// Object.defineProperty(user2,"name", {
// 	enumerable: false,
//   });

// user2.__proto__ = user1;

// let user3 = {
// 	name: "Kate",
// 	age: 19,
// 	hasWork: "Yes"
// };
// user3.__proto__ = user2;

// Object.defineProperty(user3 ,"name", {
// 	enumerable: false,
//   });

// user2.__proto__ = user1;

// let user4 = {
// 	name: "Tom",
// 	age: 18,
// 	hasWork: "No",
// 	get getAll() {
// 		for (let value of Object.values(this)) {
// 		console.log(value); 
// 		}	
// 	}
// };

// Object.defineProperty(user4 ,"getAll", {
// 	enumerable: false,
//   });


// user4.__proto__ = user3;

// user4.getAll

// class CalcValue {
// 	constructor(firsNum, secondNum) {
// 		this.firsNum = firsNum;
// 		this.secondNum = secondNum;
// 	}
// }

// class CalcOperator extends CalcValue {
// 	constructor(operator) {
// 		super();
// 		this.operator = operator;
// 	}
	
// 	get getRes() {
// 		this.firsNum = prompt("Введіть перше число: ");
// 		this.secondNum = prompt("Введіть друге число: ");
// 		this.operator = prompt("Введіть оператор: ", "plus or minus or multiple");
		
// 		this.firsNum = Number(this.firsNum);
// 		this.secondNum = Number(this.secondNum);

// 		if ( this.operator === "plus" ) {
// 			alert(this.firsNum + this.secondNum);
// 		} else if ( this.operator === "minus" ) {
// 			alert(this.firsNum - this.secondNum);
// 		} else if ( this.operator === "multiple" ) {
// 			alert(this.firsNum * this.secondNum);
// 		} 
// 	}
// }

// let calc = new CalcOperator;
// calc.getRes;

let obj = {
	company: "Meta", 
	workersCount: 3000, 
	companyMembers: [
	  {
		name: 'Mark', 
		age: 33, 
		birthDate: '01.05.1989', 
		workFrom: new Date(),
		position: 'director'
	  },
	  {
		name: 'James', 
		age: 29, 
		birthDate: '12.02.1993', 
		workFrom: new Date(),
		position: 'marketing'
	  },
	  {
		name: 'Olivia', 
		age: 29, 
		birthDate: '13.11.1993', 
		workFrom: new Date(),
		position: 'HR'
	  },
	],
	get getSentence() {
		alert( "In " + this.company + " works " + this.workersCount + " , and their director is " + this.companyMembers[0].name);
	},
	getDate() {
			this.companyMembers.forEach((item, index) => {
			let copyDate = this.companyMembers[index].workFrom;
			let copyMem = this.companyMembers[index].name;
			let exp = prompt("Введіть скільки років у цій конпанії працює " + copyMem)
			exp = Number(exp);
			// alert( copyMem + " працює у цій компанії з : " + (copyDate.getFullYear() - exp) + "року");
			return copyDate = copyDate.getFullYear() - exp;
  			alert(obj.companyMembers[0].workFrom);
		})
	}
  };
  alert(obj.companyMembers[0].workFrom);
  obj.getDate()

// new Promise((resolve, reject) => {
// 	reject(new Error("Ошибка!"));
//   }).catch(console.log);