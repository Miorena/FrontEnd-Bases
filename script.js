// recupere le bouton et la liste de lien du menu
const burgerButton = document.querySelector('.btn-menu');
const menuList = document.querySelector('.menu ul');

// au clic sur le burger, affiche/cache le menu (.active geree en css)
burgerButton.addEventListener('click', function() {
	menuList.classList.toggle('active');
});
