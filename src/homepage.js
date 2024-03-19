import myImagePath from './assets/_Burger-and-Beer.jpg';
import secondImagePath from './assets/pexels-roman-odintsov-4552173.jpg';
import myIcon from './assets/map-marker-radius.png';
import './style.css';


// Function to create a div with a class
function createDivWithClass(className) {
  const div = document.createElement('div');
  div.classList.add(className);
  return div;
}

// Function to create a paragraph with a class and text
function createParagraphWithClass(className, text) {
  const p = document.createElement('p');
  p.classList.add(className);
  p.innerHTML = text;
  return p;
}

// Function to create an image with a source
function createImageWithSrc(src) {
  const img = new Image();
  img.src = src;
  return img;
}

// Function to add an image to a div
function addImageToDiv(div, imagePath) {
  const img = createImageWithSrc(imagePath);
  div.appendChild(img);
}

// Main function to create the homepage
function homepage() {
  const content = document.getElementById('content');

  const hero = createDivWithClass('hero');
  addImageToDiv(hero, myImagePath);

  const subHero = createDivWithClass('sub-hero');
  const heroText = createParagraphWithClass('hero-text', 'Good Times <span>with</span><br> Great Friends');
  subHero.appendChild(heroText);

  const subText = createParagraphWithClass('hero-subtext', 'Discover Your Taste');
  subHero.appendChild(subText);

  const addressContainer = createDivWithClass('address-container');
  const mapMarker = createImageWithSrc(myIcon);
  addressContainer.appendChild(mapMarker);

  const address = createParagraphWithClass('address', '123 Main Street<br>Oakville, CA<br>92655');
  addressContainer.appendChild(address);

  subHero.appendChild(addressContainer);
  hero.appendChild(subHero);
  content.appendChild(hero);

  const about = createDivWithClass('about');
  const aboutText = createParagraphWithClass('hero-about', 'Serving Great Food since 99');
  about.appendChild(aboutText);

  addImageToDiv(about, secondImagePath);
  content.appendChild(about);
}

export default homepage;


/* <img src="./assets/_Burger-and-Beer.jpg" />
<div class="sub-hero">
<p class="hero-text">
  Good Times <span>with</span><br />
  Great Friends
</p>
<p class="hero-subtext">Discover Your Taste</p>
<div class="address-container">
  <img src="./assets/map-marker-radius.svg"/>
  <p class="address">123 Main Street<br>
    Oakville, CA <br>92655
  </p>
</div>

</div>

</div>
<div class="about">
<p class="hero-about">
Serving Great Food <br> since 99
</p>
<img src="./assets/pexels-roman-odintsov-4552173.jpg"/> */