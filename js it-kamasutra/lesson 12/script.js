function alertValues(elementParameter) {
	debugger;
	console.log(elementParameter.value);
	console.log(elementParameter.className);
}

var firstNameId = "first-name";
var firstNameEl = document.getElementById(firstNameId);
alertValues(firstNameEl);

var lastNameId = "last-name";
var lastNameEl = document.getElementById(lastNameId);
alertValues(lastNameEl);

var addressId = "address";
var addressEl = document.getElementById(addressId);
alertValues(addressEl);

var citiesId = "cities";
var citiesEl = document.getElementById(citiesId);
var hobbiesId = "hobbies";
var hobbiesEl = document.getElementById(hobbiesId);
alertValues(hobbiesEl);
var avatarWrapperId = "avatar-wrapper";
var avatarWrapperEl = document.getElementById(avatarWrapperId);
var avatarId = "avatar";
var avatarEl = document.getElementById(avatarId);

firstNameEl.value = "Andrey";
//alertValues(firstNameEl);
lastNameEl.value = "rxte";
//alertValues(lastNameEl);
lastNameEl.className = "last=name-input default-input error-input";
//alertValues(lastNameEl);
lastNameEl.title = "Wrong last name"
//alertValues(lastNameEl);
