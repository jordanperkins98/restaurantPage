import myImagePath from './assets/_Burger-and-Beer.jpg';
import secondImagePath from './assets/pexels-roman-odintsov-4552173.jpg';
import myIcon from './assets/map-marker-radius.png';

import './style.css';
import {addImageToDiv, createDivWithClass, createImageWithSrc, createParagraphWithClass} from "./htmlmaker";


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



