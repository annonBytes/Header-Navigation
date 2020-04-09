// Import stylesheets
import './style.css';

const burger = document.getElementById('burger');
const ul = document.querySelector('nav ul');

burger.addEventListener('click', () => {

burger.classList.toggle('show-burg');
ul.classList.toggle('show');
  
});