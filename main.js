import './style.css'
import Alpine from 'alpinejs'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/dist/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { SplitText } from "gsap/dist/SplitText";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, ScrollSmoother, SplitText);

// Alpine JS
console.log(Alpine.directive('isMegaMenu'))

window.Alpine = Alpine
Alpine.start()

const openTableOfContent = document.getElementById('OpenTableOfContent');
const ContentButton = document.getElementById('ContentButton');
const CloseTableOfContent = document.getElementById('CloseTableOfContent');
const MegaMenu = document.getElementById('MegaMenu');
const MegaContent = document.getElementById('MegaContent');
const gotolink = document.querySelectorAll('.gotolink');
const logo = document.getElementById('logo');
const contentbar = document.getElementById('contentbar');


gotolink.forEach(element => {
    
    element.addEventListener('click', (e) => {
        let section = element.getAttribute('data-section')
        closeMegaMenu()
        setTimeout(function() {
            gsap.to(window, { duration: 1, scrollTo: section, ease: "power4.inOut" });
        }, 500);
    })

});


gsap.set(MegaMenu, {height: '3rem'})
gsap.set(MegaContent, {opacity: 0, zIndex: -50})
gsap.set(logo, {width: '6.2rem'})
gsap.set(ContentButton, {width: '15rem'})
gsap.set(CloseTableOfContent, {display: 'none', opacity: 0})

openTableOfContent.addEventListener('click', function() {
    openMegaMenu ()
})

if(CloseTableOfContent){
    CloseTableOfContent.addEventListener('click', function () {
        closeMegaMenu()
    })    
}


let mmtl = gsap.timeline();
function openMegaMenu() {

    mmtl.play()
    mmtl
    .fromTo(MegaMenu, 0.4, {height: '3rem'}, {height: '100vh'}, 'one')
    .fromTo(MegaContent, 0.4, {opacity: 0, zIndex: -50}, {opacity: 1, zIndex:1}, 'one')
    .fromTo(logo, 0.4, {y: 0, width: '6.2rem'}, {y: 20, width: '10rem'}, 'one')
    .fromTo(ContentButton, 0.4, {width: '15rem'}, {width: '5rem'}, 'one')
    .fromTo(openTableOfContent, 0.4, {opacity:1, display:"flex"}, {opacity:0, display:"none"}, 'one')
    .fromTo(CloseTableOfContent, 0.4, {opacity:0, display:"none"}, {opacity:1, display:"flex"}, 'one')
    .fromTo(contentbar, 0.4, {y: 0}, {y: 30}, 'one')
    .fromTo('.content-box', 0.3, { y: -25, opacity: 0, x: -25 }, { y: 0, opacity: 1, x: 0, stagger: 0.1 }, 'one')

}

function closeMegaMenu () {
    mmtl.timeScale(2).reverse()
}


  
// Section3
var splide1 = new Splide( '.splide1', {
    perPage: 2,
    gap    : '1rem',
    pagination: false,
    arrows: true,
    drag: 'free'
} );
  
splide1.mount();

// Section4
var splide2 = new Splide( '.splide2', {
    perPage: 2,
    gap    : '1rem',
    pagination: false,
    arrows: true,
    drag: 'free',
    breakpoints: {
        900: {
            perPage: 1,
        }
    }
} );
splide2.mount();

// Section5
var splide3 = new Splide( '.splide3', {
    perPage: 2,
    gap    : '1rem',
    pagination: false,
    arrows: true,
    drag: 'free',
    breakpoints: {
        900: {
            perPage: 2,
        }
    }
} );
splide3.mount();

// Section9
var splide4 = new Splide( '.splide4', {
    perPage: 3,
    gap    : '1rem',
    pagination: false,
    arrows: true,
    drag: 'free',
    breakpoints: {
        900: {
            perPage: 2,
        }
    }
} );
splide4.mount();

// Section9
var splide5 = new Splide( '.splide5', {
    perPage: 3,
    gap    : '1rem',
    pagination: false,
    arrows: true,
    drag: 'free',
    breakpoints: {
        900: {
            perPage: 2,
        }
    }
} );
splide5.mount();