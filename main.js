// Shrinking Navbar

const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
   if(window.scrollY > 99) {
      navbar.classList.add('navbar_shrink')
   } else {
      navbar.classList.remove('navbar_shrink')
   }
})


// Mobile navigation button toggling

const mobileNavBtn = document.querySelector('#bars');
const mobileNavContent = document.querySelector('.navbar-mobile__content')

mobileNavBtn.addEventListener('click', () => {
   mobileNavContent.classList.toggle('navbar-mobile__content_show')
   setTimeout(()=> {
      mobileNavBtn.style.animation = '';
   },200)
   if(mobileNavBtn.className === 'fas fa-bars') {
      mobileNavBtn.className = 'fas fa-times';
      mobileNavBtn.style.animation = 'rotate 0.5s ease';
   } else {
      mobileNavBtn.className = 'fas fa-bars';
      mobileNavBtn.style.animation = 'rotate 0.5s ease';
   }
})


// Carousel (needs to reaload the page each time browser width changes)

const nextArrivalBtn = document.querySelector('.arrival-carousel__button_right');
const prevArrivalBtn = document.querySelector('.arrival-carousel__button_left');
const arrivalProducts = document.querySelectorAll('.arrival-carousel__body .product');

const nextBestBtn = document.querySelector('.best-sellers-carousel__button_right');
const prevBestBtn = document.querySelector('.best-sellers-carousel__button_left');
const bestSellersProducts = document.querySelectorAll('.best-sellers-carousel__body .product');

const carouselWidth = document.querySelector('.arrival-carousel__wrapper').offsetWidth;

let translateBy;
window.innerWidth < 600 ? translateBy = 309 : translateBy = 409; 

function carousel(array, nextBtn, prevBtn) {
   let current = Math.round(carouselWidth/translateBy);
   const slides = current;

   nextBtn.addEventListener('click', () => {
      current ++;
   
      array.forEach((i) => {
         i.style.transform += `translateX(-${translateBy}px)`;           
      })
   
      if(current > array.length) {
         array.forEach((i) => {
            i.style.transform = 'translateX(0)'; 
            current = Math.round(carouselWidth/translateBy);          
         })
      }
   })
   
   prevBtn.addEventListener('click', () => {  
      if(current > Math.round(carouselWidth/translateBy)) {
         current --;  
   
         array.forEach((i) => {
            i.style.transform += `translateX(${translateBy}px)`;           
         })
      } else {
         array.forEach((i) => {
            i.style.transform = `translateX(-${translateBy * (array.length-slides)}px)`;
            current = array.length           
         })
      }
   })
}

carousel(arrivalProducts, nextArrivalBtn, prevArrivalBtn);
carousel(bestSellersProducts, nextBestBtn, prevBestBtn);


// Scrolling animation

const sections = document.querySelectorAll('nav, section, footer');
document.addEventListener('scroll', showSections);

function showSections() {
   const trigerPoint = window.innerHeight * 0.85;

   sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;

      section.style.opacity = '0';
      section.style.transition = '1.6s ease';

      if(sectionTop < trigerPoint){
         section.style.opacity = '1';         
      }
   })
}

showSections();