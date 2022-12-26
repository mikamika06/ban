 goToLink = (event, url) => {
	let type = event.type;
	console.log( event)
	if ((type === 'click')|| (type === 'keydown' && event.keyCode === 13)) {
		window.location.href = url;
	
	  }
};
