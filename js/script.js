

 //Déclaration de l'index de l'image actuelle
let currentImageIndex = 0;

const addqty = parseInt('cartCounter.textContent');
// Déclaration des variables 
const addcta = document.querySelector('.add-to-cart-button');
const quantityInput = document.querySelector('.quantity-input');
const cartCounter = document.querySelector('.cart-counter');
const quantity = parseInt('quantityInput.value');

const prevButton = document.querySelector(".pictures-prev");
const nextButton = document.querySelector(".pictures-img");
const images = [
  "img/canard-jaune-1-l.png",
  "img/canard-jaune-2-l.png",
  "img/canard-jaune-3-l.png",
];

const carouselWidth =('carouselItems[0].offsetWidth');
const translateX = ('-currentCarouselIndex * carouselWidth');

const advantagesTitle = document.querySelector('.advantages-title');
const advantagesContent = document.querySelector('.advantages-content');
const featuresTitle = document.querySelector('.features-title');
const featuresContent = document.querySelector('.features-content');
const carouselPrevButton = document.querySelector('.carousel-prev');
const carouselNextButton = document.querySelector('.carousel-next');
const carouselItems = document.querySelectorAll('.carousel-item');



// Écouteur d'événement pour le bouton "Précédent"
prevButton.addEventListener("click", showPreviousImage);

prevButton.addEventListener("click", () => {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  img.src = images[currentImageIndex];
});


// Fonction pour afficher l'image précédente
 
function showPreviousImage() {

  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;

  img.src = images[currentImageIndex];
}

// Fonction pour afficher l'image suivante
function showNextImage() {
  // Mise à jour de l'index de l'image actuelle pour afficher l'image suivante dans la liste
  currentImageIndex = (currentImageIndex + 1) % images.length;
  
  img.src = images[currentImageIndex];
}

prevButton.addEventListener("click", showPreviousImage);
nextButton.addEventListener("click", showNextImage);




// Fonction pour ajouter le produit au panier
function addToCart() {
  
  
  // Récupération de la quantité de produit à ajouter
  
  addqty += quantity;
  if (addqty > 99) {
    cartCounter.textContent = '99+';
  } else {
    cartCounter.textContent = addqty;
  }
  
  //  Bouton d'ajout au panier désactivé
  addcta.disabled = true;
  addcta.classList.add('disabled');
  addcta.textContent = 'Déjà au panier';
}

// Fonction pour mettre à jour l'état du bouton d'ajout au panier
function updateAddToCartButton() {
  const quantity = parseInt(quantityInput.value);
  if (quantity > 0) {
    addcta.disabled = false;
    addcta.classList.remove('disabled');
  } else {
    addcta.disabled = true;
    addcta.classList.add('disabled');
  }
}


// Sélection des éléments du DOM


// Fonction pour basculer l'état de l'accordéon
function toggleAccordion(event) {
  const target = event.currentTarget;
  const content = target.nextElementSibling;
  target.classList.toggle('closed');
  content.classList.toggle('hidden');
}


// Index de l'élément actuellement affiché dans le carrousel
let currentCarouselIndex = 0;

// Fonction pour afficher l'élément précédent dans le carrousel
function showPreviousItem() {
  currentCarouselIndex--;
  updateCarousel();
}

// Fonction pour afficher l'élément suivant dans le carrousel
function showNextItem() {
  currentCarouselIndex++;
  updateCarousel();
}

// Fonction pour mettre à jour l'affichage du carrousel
function updateCarousel() {

  if (currentCarouselIndex === 0) {
    carouselPrevButton.style.display = 'none';
  } else {
    carouselPrevButton.style.display = 'block';
  }

  if (currentCarouselIndex === carouselItems.length - 1) {
    carouselNextButton.style.display = 'none';
  } else {
    carouselNextButton.style.display = 'block';
  }

  // Animer le défilement horizontal pour afficher l'élément actuel
  const carouselWidth = carouselItems[0].offsetWidth;
  const translateX = -currentCarouselIndex * carouselWidth;
  for (const item of carouselItems) {
    item.style.transform = `translateX(${translateX}px)`;
  }
}
//  affichage  du  carrousel avec le premier élément
updateCarousel();