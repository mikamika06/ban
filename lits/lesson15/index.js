// class Comp {
//   constructor(model, releaseDate, company, price, specs) {
//     this.model = model,
//     this.releaseDate = releaseDate,
//     this.company = company,
//     this.price = price,
//     this.specs = specs
//   }
//   getModelAndCompany() {
//     alert(this.model);
// 		alert(this.company);
//   }
//   getReleaseDateSetTimeout() {
//     setTimeout(() => alert(this.releaseDate), 2000);
//   }
// };

// let getComp = new Comp("Ps6", "12.03.2022", "Sony", "1500$", "classified");
// getComp.getModelAndCompany();

let allComp = ["Google", "Apple", "SpaceX", "Lits", "Marvicon", "Yandex", "Microsoft"];

class Func {
  constructor(name, age, job, whereLive) {
  this.name = name,
  this.age = age,
  this.job = job,
  this.whereLive = whereLive,
  this.arr = ["Google", "Apple", "SpaceX"]
}
getValue(smth) {
	if ( this[smth] ) {
	  console.log(1)
	 } else {
	  console.log(2);
	 }
}
  
getArr(comp) { 
	if (this.arr.includes(comp)) {
		console.log(comp);
	} else if (allComp.includes(comp)) {
		console.log(comp)
	} else {
		console.log("Company is undefined")
	}
  }
}

let func = new Func("Sasha", 20, "Programmer", true, "Google");
func.getArr("Google");

