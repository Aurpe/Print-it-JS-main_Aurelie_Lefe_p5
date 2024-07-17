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
//Tableau avec toutes les images et les taglines

console.log(slides)

const arrowLeft = document.querySelector(".arrow_left"); //Recupération de la flèche dans le fichier HTML
const arrowRight = document.querySelector(".arrow_right");
const bannerImg = document.querySelector('.banner-img');
const tagLineContainer = document.querySelector('#banner p');
const dotsContainer = document.querySelector('.dots')


let currentSlideIndex = 0;
//Position image


arrowLeft.addEventListener('click', goToPreviousSlide) //Creation d'un événement "Click"
arrowRight.addEventListener('click', goToNextSlide)

function goToNextSlide() { //Fonction qui appelle la slide à defiler vers l'avant, ainsi que les dots
	currentSlideIndex++
	showSlide(currentSlideIndex)
	updateDots()
	console.log(currentSlideIndex)
}

function goToPreviousSlide() {//Fonction qui appelle la slide à defiler vers l'arrière, ainsi que les dots
	currentSlideIndex--
	showSlide(currentSlideIndex)
	updateDots()
	console.log(currentSlideIndex)
}

function showSlide(index) {
	// si le currentIndex est plus petit que zéro, alors on revient au dernier element du tableau.
	if (index < 0) {
		currentSlideIndex = slides.length - 1;
		console.log(currentSlideIndex)
	} else if (index > slides.length - 1) {
		currentSlideIndex = 0;
		console.log(currentSlideIndex)
	}

	tagLineContainer.innerHTML = slides[currentSlideIndex].tagLine;
	bannerImg.src = `./assets/images/slideshow/${slides[currentSlideIndex].image}`
}

showSlide()

// Supprimer les dots du HTML, en laissant que le parent. Les créer en javascript.
// Créer un dots par éléments trouvé dans le tableau slides.

//Exemple : Si currentSlideIndex = 2      -> alors j'ajoute la classe dot_selected au deuxieme dots
const dots = [];


slides.forEach(function() { 
	const dot = document.createElement('span'); // on crée un élémemnt <span>
	dot.classList.add('dot'); // élément span ajouté à la class 'dot'
	dotsContainer.appendChild(dot) // on lie l'element span <dot> afin qu'il devienne l'enfant de "dots"
	dots.push(dot) // on fait donc un push afin que dot prenne sa place dans le DOM
})

function updateDots() {
	dots.forEach(function(dot) {
		dot.classList.remove('dot_selected')
	})
	dots[currentSlideIndex].classList.add('dot_selected')
	console.log(dots)
}

updateDots()



