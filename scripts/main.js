/* commenting style is the same as css
*/

//but you can also do the java thing

// variable assignment: =;
// equality check: ===;

// Not equal: !==;
let myVariable = 'bob';

alert('WARNING: vibe check failed.\nPlease log off immediately');

//Image changer
let currentImg = document.querySelector('img');

currentImg.onclick = function() {
	let imgSrc = currentImg.getAttribute('src');
	if(imgSrc === 'images/test-image.png') {
		currentImg.setAttribute('src', 'images/curated.png');
	} else {
		currentImg.setAttribute('src', 'images/test-image.png');
	}
}

//Change user
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
	let myName = prompt('Please enter your username.');
	if(!myName || myName === null) {
		setUserName();
	} else {
		localStorage.setItem('name', myName);
		myHeading.textContent = 'CuRated just for you, ' + myName;
	}
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'CuRated just for you, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}


