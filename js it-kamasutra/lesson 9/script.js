var firstNameId = "first-name";
var firstNameEl = document.getElementById(firstNameId);
var surnameId = "surname";
var surnameEl = document.getElementById(surnameId);
var addressId = "Kiev";
var addressEl = document.getElementById(addressId);
var citiesId = "cities";
var citiesEl = document.getElementById(citiesId);
var hobbiesId = "hobbies";
var hobbiesEl = document.getElementById(hobbiesId);
var avatarWrapperId = "avatar-wrapper";
var avatarWrapperEl = document.getElementById(avatarWrapperId);
var avatarId = "avatar";
var avatarEl = document.getElementById(avatarId);

firstNameEl.value = "Mika";
surnameEl.setAttribute("value", "kamasutra");
avatarEl.src =
  "https://yt3.ggpht.com/ytc/AKedOLS1AZhEVoT69mDznUiqA5tTkS4D47iqYSE7eYpNCg=s88-c-k-c0x00ffffff-no-rj";
surnameEl.className = "surname-input default-input error-input";
avatarEl.title = "it-kamasutra";
citiesEl.value = "Minsk";
hobbiesEl.value = "I have not interest";
avatarWrapperEl.innerHTML = "<ul id='list'><li>1</li><li>2</li><li>3</li></ul>";

var numberList = document.getElementById("list");
console.log(surnameEl).value;
