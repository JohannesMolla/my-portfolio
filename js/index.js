// Varaibles
const myPhoto = document.getElementById("my-photo");
const yohannes = document.querySelector(".nav__heading");

if (window.innerWidth <= 488) {
	myPhoto.src = "images/my-photo-mobile.png";
}

if (window.innerWidth <= 630) {
	yohannes.textContent = "{Yohannes}";
}
