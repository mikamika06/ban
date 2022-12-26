// let timeUp = function() {
// 	alert("Time is up");
// };

// setTimeout(timeUp, 3000);

// let doHomeworkAlarm = function () {
// 	alert("Hey! You need to do your homework");
// };

// let timeoutId = setTimeout(doHomeworkAlarm, 60000);
// clearTimeout(timeoutId);

// let counter = 5;
// let printMessege = function() {
// 	console.log("You have been staring at your console for " + counter + " seconds");
// 	counter += 5 ;
// }

// let intervalId = setInterval(printMessege, 5000)

// clearInterval(intervalId);

// let leftOffset = 0;

// let moveHeading = function () {
// 	$("#heading").offset({top: leftOffset});

// 	leftOffset++;

// 	if(leftOffset > 200) {
// 		leftOffset = 0;
// 	}
// };

// setInterval(moveHeading, 30);

// let clickHandler = function(even) {
// 	console.log("Click " + even.pageX + " " + even.pageY);
// };

// $("h1").click(clickHandler);

// $("html").click(function (even) {
// 	$("#heading").offset({
// 		left: even.pageX,
// 		top: even.pageY,
// 	});
// });

let first = 0;

let moveSquare = function () {
	let  = function () {
		$("h1").offset({left: first});
	};
	let moveSquare2 = function () {
		$("h1").offset({left: first + 200});
	};
	let moveSquare3 = function () {
		$("h1").offset({left: first + 200, top: first + 200});
	};
	let moveSquare4 = function () {
		$("h1").offset({top: first + 200});
	};
	first++;
};


setInterval(moveSquare, 30);

// $("h1").offset({left: first});
// 	$("h1").offset({left: first + 200});
// 	$("h1").offset({left: first + 200, top: first + 200});
// 	$("h1").offset({top: first + 200});