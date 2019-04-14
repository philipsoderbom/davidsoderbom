const visaLogga = document.querySelector('.logo-hidden');

$(document).ready(function() {
	$(window).scroll(function() {
		var posTop = $(document).scrollTop();
		

		if (posTop > 1070) {
			visaLogga.classList.add('logo-visible');
		}
		else if (posTop < 1070) {
			visaLogga.classList.remove('logo-visible');
		}
	})
})



const sidomeny = document.getElementById('sidomeny');
const menyKnapp = document.getElementById('meny-knapp');


function visaMeny() {
	sidomeny.classList.toggle('active');
	menyKnapp.classList.toggle('active');
}
