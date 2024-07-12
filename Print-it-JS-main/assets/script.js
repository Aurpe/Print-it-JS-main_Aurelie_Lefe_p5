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
	console.log(currentSlideIndex)
}

function goToPreviousSlide() {
	currentSlideIndex--
	showSlide(currentSlideIndex)
	console.log(currentSlideIndex)
}

function showSlide(currentSlideIndex) {
	// si le currentIndex est plus petit que zéro, alors on revient au dernier element du tableau.
	if (currentSlideIndex < 0) {
		currentSlideIndex = slides.length-1;
	} else if (currentSlideIndex > slides.length-1) {
		currentSlideIndex = 0;
	}

	tagLineContainer.innerHTML = slides[currentSlideIndex].tagLine;
	bannerImg.src = `./assets/images/slideshow/${slides[currentSlideIndex].image}`
}


// Supprimer les dots du HTML, en laissant que le parent. Les créer en javascript.
// Créer un dots par éléments trouvé dans le tableau slides.

//Exemple : Si currentSlideIndex = 2      -> alors j'ajoute la classe dot_selected au deuxieme dots


let bulletPoints= 4

//let HTML= div.innerHTML;
//console.log(div.HTML)
//div.html="dot";

const div= document.querySelector(".dot")
if (div) {
	for (let i = 0; i < nombreDePoints; i++){

		let spanElement= document.createElement("span");

		spanElement.classList.add("dots");

		div.appendChild(spanElement);
	
}
}

function updateDot (){

	const bulletPoints = document.querySelectorAll(".dot");
   for (let i = 0; i < bulletPoints.length; currentSlideIndex++) {
   
    const dot = bulletPoints[currentSlideIndex];
	if (i == currentSlideIndex){
		dot.classList.add('dot_selected');		
  }
  else{
    dot.classList.remove('dot_selected');	 
  }
    
	}  
}

function addDot (){
	const dots = document.querySelector(".dots");
	for (let i = 0; i< slides.length; i++) {

		const dot= document.createElement("div");
		dot.setAttribute("class", "dot");
		dots.appendChild(dot);
	}

}


//Si je clique sur dot alors dot selected se remplit



//let spanElement = document.createElement("span");

//const dots = document.querySelector(".dot");
//spanElement.classList.add(".dot");
//dots.appendChild(dots)




// Notions :
// _ Comment mettre des éléments créer en javascript dans un tableau.
// _ Comment ajouter la class d'un élément HTML avec Javascript.












