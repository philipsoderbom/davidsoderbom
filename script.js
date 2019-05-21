/*================Visa/Döls sidomeny=============*/
const sidomeny = document.getElementById('sidomeny');
const menyKnapp = document.getElementById('meny-knapp');


function visaMeny() {
	sidomeny.classList.toggle('active');
	menyKnapp.classList.toggle('active');
}


/*============showInfoLeft===============*/
const showInfoButtonLeft = document.querySelector('.card-button-left');
const hideImageLeft = document.querySelector('.img-wrapper#left');
const showInfoLeft = document.querySelector('.hidden-info-card-left');


showInfoButtonLeft.addEventListener('click', function(){
	showInfoLeft.classList.toggle('showInfo');
	hideImageLeft.classList.toggle('fadeOut');

	var buttonLabel = document.querySelector(".card-button-left");
	if (buttonLabel.innerHTML == "View Details") {
		buttonLabel.innerHTML = "Hide Details";
	} else {
		buttonLabel.innerHTML = "View Details";
	}

})

/*============showInfoRight===============*/
const showInfoButtonRight = document.querySelector('.card-button-right');
const hideImageRight = document.querySelector('.img-wrapper#right');
const showInfoRight = document.querySelector('.hidden-info-card-right');


showInfoButtonRight.addEventListener('click', function(){
	showInfoRight.classList.toggle('showInfo');
	hideImageRight.classList.toggle('fadeOut');


	var buttonLabel2 = document.querySelector(".card-button-right");
	if (buttonLabel2.innerHTML == "View Details") {
		buttonLabel2.innerHTML = "Hide Details";
	} else {
		buttonLabel2.innerHTML = "View Details";
	}
})




/*============Scrollanimation==========*/
$(document).ready(function(){
	$(window).scroll(function(event){
		var y = $(this).scrollTop();
		var count = 0;

		if (y > 180) {
			$('.left').addClass('scrollAnimation');
			$('.right').addClass('scrollAnimation');
			count++;
		}
		else {
			$('.left').removeClass('scrollAnimation');
			$('.right').removeClass('scrollAnimation');
		}
 	})
})


/*============Rotate profile image=========*/
 const profilePic = document.querySelector('.profile img');

 profilePic.addEventListener('mouseover', function(){
  	profilePic.classList.toggle('scaleProfile');

  })


/*================Call-to-Action=============*/

const frontPage = document.querySelector('#home');
const callToAction = document.querySelector('#callToAction');

frontPage.addEventListener('mouseover', function() {
	setTimeout(seekAttention, 1500);
})

function seekAttention() {
	callToAction.classList.toggle('attention');
}





/*=================PlayBar==================*/

$(document).ready(function(){
	$(window).scroll(function(event){
		var x = $(this).scrollTop();

		if (x > 1300 && x < 2600) {
			$('.play-music').addClass('showPlayBar');
			$('#playBarBtn').addClass('showPlayBar');
		}
		else{
			$('.play-music').removeClass('showPlayBar');
		}
		
 	})
})


/*==============Loader===============*/

window.addEventListener('load', function() {
	const loader = document.querySelector('.loadingScreen');
	loader.className += ' hidden';
})

