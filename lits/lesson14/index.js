let allComp = ["Google", "Apple", "SpaceX", "Lits", "Marvicon", "Yandex", "Microsoft"];

function Func(name, age, job, whereLive, comp) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.whereLive = whereLive;
  this.getValue = function(smth) {
	  if ( this[smth] ) {
		  console.log(1)
	  } else {
		  console.log(2);
	  }
  }
  this.arr = ["Google", "Apple", "SpaceX"];
  this.getArr = function(comp) { 
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
// func.getValue("age 1");
func.getArr("Lits");
// console.log(func);
// console.log(func.arr);


