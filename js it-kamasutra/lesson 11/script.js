function alertFirstNameValues() {
	console.log(firstNameEl.value);
	console.log(firstNameEl.className);
}

function alertLastNameValues() {
	console.log(lastNameEl.value);
	console.log(lastNameEl.className);
}

function alertAddressValues() {
	console.log(addressEl.value);
	console.log(addressEl.className);
}

function alertHobbiesValues() {
	console.log(hobbiesEl.value);
	console.log(hobbiesEl.className);
}

var firstNameId = "first-name";
var firstNameEl = document.getElementById(firstNameId);
alertFirstNameValues();

var lastNameId = "last-name";
var lastNameEl = document.getElementById(lastNameId);
alertLastNameValues();

var addressId = "address";
var addressEl = document.getElementById(addressId);
alertAddressValues();

var citiesId = "cities";
var citiesEl = document.getElementById(citiesId);
var hobbiesId = "hobbies";
var hobbiesEl = document.getElementById(hobbiesId);
alertHobbiesValues();

var avatarWrapperId = "avatar-wrapper";
var avatarWrapperEl = document.getElementById(avatarWrapperId);
var avatarId = "avatar";
var avatarEl = document.getElementById(avatarId);

firstNameEl.value = "Andrey";
alertFirstNameValues();

lastNameEl.value = "rxte";
alertLastNameValues();

lastNameEl.className = "last=name-input default-input error-input";
alertLastNameValues();

lastNameEl.title = "Wrong last name"
alertLastNameValues();

