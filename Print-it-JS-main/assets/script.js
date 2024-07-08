const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const bannerImg = document.querySelector('.banner-img');
const tagLineContainer = document.querySelector('#banner p');


let currentSlideIndex = 0;

arrowLeft.addEventListener('click', goToPreviousSlide)
arrowRight.addEventListener('click', goToNextSlide)

function goToNextSlide() {
	currentSlideIndex++
	showSlide(currentSlideIndex)
}

function goToPreviousSlide() {
	currentSlideIndex--
	showSlide(currentSlideIndex)
}

function showSlide(data) {
	// si le currentIndex est plus petit que zéro, alors on revient au dernier element du tableau.
	// si le currentIndex est plus grand que la longueur du tableau, on revient au premier element du tableau.
	tagLineContainer.innerHTML = slides[data].tagLine;
	bannerImg.src = `./assets/images/slideshow/${slides[data].image}` 
	
}


const BulletPoints = document.querySelector(".dot");



function updateDot() {
	const bulletPoints = document.querySelectorAll(".dot");	
	 for (let i = 0; i < 4; i ++) {
	 
	  const dot = bulletPoints[i];
	  if ([i] == currentSlideIndex){
		  dot.bulletPoints.add('dot_selected');		
	}
	else{
	  dot.bulletPoints.remove('dot_selected');	 
	}
	  
	  }  
  }

//creation d'une boucle

//le but est de créer une boucle avec les points et qui interagis avec les images en intégrant une condition 
// si j'appuie sur un point il se remplit, si j'arrête d'appuyer dessus il se vide  
// Déclarer l'evenement du BulletPoints vide, créer une fonction click avec ce bullet point