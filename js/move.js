var btn = document.querySelector('.toggle_btn');
var test = document.querySelector('.test');

btn.onclick = function(){
	test.classList.toggle('test_open');
}
		

var p = 117; // Nombre final du compteur
var cpt = 0; // Initialisation du compteur
var duree = 5; // Durée en seconde pendant laquel le compteur ira de 0 à 15
var delta = Math.ceil((duree * 1000) / p); // On calcule l'intervalle de temps entre chaque rafraîchissement du compteur (durée mise en milliseconde)
var node =  document.getElementById("compteur"); // On récupère notre noeud où sera rafraîchi la valeur du compteur

function countdown() {
	node.innerHTML = ++cpt;
	if( cpt < p ) { // Si on est pas arrivé à la valeur finale, on relance notre compteur une nouvelle fois
		setTimeout(countdown, delta);
	}
	myFunction();
}

setTimeout(countdown, delta);

function myFunction() {
	var x = document.createElement("img");	
	x.setAttribute("src", "img/imageh/1(" + cpt + ").jpg");
	x.setAttribute("alt", "image "+cpt+"/"+p);
	x.setAttribute("style", "background-color: transparent;max-width:400px;")
	x.setAttribute("class", "hover-shadow; demo");
	x.setAttribute("onclick", "openModal(); currentSlide("+ cpt +")");
	document.getElementById('galerie').appendChild(x); 

	var y = document.createElement("div");
	y.setAttribute("id", "slide" + cpt);
	y.setAttribute("class", "mySlide");
	y.setAttribute("style", "background-color:transparent;")
	document.getElementById('content').appendChild(y);

	var z = document.createElement("img");
	z.setAttribute("src", "img/imageh/1(" + cpt + ").jpg");
	z.setAttribute("style", "background-color: transparent;")
	z.setAttribute("alt", "image"+cpt+""+p);
	document.getElementById('slide' + cpt).appendChild(z); 		
	
}



// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function keydown(e){
	if(e.keyCode == 37){
		plusSlides(-1);
	}
	if(e.keyCode == 39){
		plusSlides(1);
	}
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlide");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
  	slideIndex = 1
  }
  if (n < 1) {
  	slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  //dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
