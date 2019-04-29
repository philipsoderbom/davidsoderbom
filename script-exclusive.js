window.addEventListener('load', function() {
	const loader = document.querySelector('.loader');
	loader.className += ' hidden';
})


const material = document.querySelector('.locked');
const back = document.querySelector('.background-gradient');


back.addEventListener('click', function() {
	material.classList.remove('locked');
})