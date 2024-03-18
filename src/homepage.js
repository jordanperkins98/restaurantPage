import myImagePath from './assets/_Burger-and-Beer.jpg';
import './style.css';


const homepage = () => {

const content = document.getElementById('content');

const hero = document.createElement('div');
hero.classList.add('hero');

const myImage = new Image();

myImage.src = myImagePath;

hero.appendChild(myImage);



content.appendChild(hero);

}

export default homepage



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