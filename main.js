import './style.css'
import Alpine from 'alpinejs'
import Splide from '@splidejs/splide'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Alpine JS
console.log(Alpine.directive('isMegaMenu'))

window.Alpine = Alpine
Alpine.start()

const OpenTableOfContentBurger = document.getElementById('OpenTableOfContentBurger');
const CloseTableOfContentBurger = document.getElementById('CloseTableOfContentBurger');
const openTableOfContent = document.getElementById('OpenTableOfContent');
const ContentButton = document.getElementById('ContentButton');
const CloseTableOfContent = document.getElementById('CloseTableOfContent');
const MegaMenu = document.getElementById('MegaMenu');
const MegaContent = document.getElementById('MegaContent');
const gotolink = document.querySelectorAll('.gotolink');
const megablackarrow = document.querySelectorAll('.mega-black-arrow');
const logo = document.getElementById('logo');
const contentbar = document.getElementById('contentbar');
const beforeLoading = document.getElementById('before-loading');
const siteWrapper = document.getElementById('site-wrapper');


gotolink.forEach(element => {
    
    element.addEventListener('click', (e) => {
        let section = element.getAttribute('data-section')
        closeMegaMenu()
        setTimeout(function() {
            gsap.to(window, { duration: 1, scrollTo: section, ease: "power4.inOut" });
        }, 500);
    })

});


megablackarrow.forEach((element, i) => {
    
    element.addEventListener('click', (e) => {
        

        let listAll = document.querySelectorAll('.mega-list')
        
        listAll.forEach(e => {
            e.classList.add('hidden')
            e.classList.add('opacity-0')
            e.classList.add('h-0')
        });
        
        let section = element.getAttribute('data-list')
        let list = document.getElementById(section)
        console.log(section)
        list.classList.remove('hidden')
        list.classList.remove('opacity-0')
        list.classList.remove('h-0')
        
    })

});


gsap.set(siteWrapper, {display: 'none'})
gsap.set(MegaMenu, {height: '3rem'})
gsap.set(MegaContent, {opacity: 0, zIndex: -50})
gsap.set(logo, {width: '6.2rem'})
gsap.set(ContentButton, {width: '15rem'})
gsap.set(CloseTableOfContent, {display: 'none', opacity: 0})
gsap.set(CloseTableOfContentBurger, {zIndex: -1, opacity: 0, display: 'none'})

let mm = gsap.matchMedia();

mm.add("(max-width: 500px)", () => {

    gsap.set(logo, {width: '1.5rem', marginLeft: '1rem'})
    
  });



openTableOfContent.addEventListener('click', function() {
    openMegaMenu ()
})

OpenTableOfContentBurger.addEventListener('click', function() {
    openMegaMenu ()
})

if(CloseTableOfContent){
    CloseTableOfContent.addEventListener('click', function () {
        closeMegaMenu()
    }) 
}
CloseTableOfContentBurger.addEventListener('click', function () {
    closeMegaMenu()
}) 


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

    mm.add("(max-width:1024px)", () => {

        mmtl
        .fromTo(MegaMenu, 0.4, {height: '3rem'}, {height: '100vh'}, 'one')
        .fromTo(MegaContent, 0.4, {opacity: 0, zIndex: -50}, {opacity: 1, zIndex:1}, 'one')
        .fromTo(logo, 0.4, {y: 0, width: '1.5rem'}, {y: 20, width: '5rem'}, 'one')
        .fromTo(ContentButton, 0.4, {width: '15rem'}, {width: '5rem'}, 'one')
        .fromTo(openTableOfContent, 0.4, {opacity:1, display:"flex"}, {opacity:0, display:"none"}, 'one')
        .fromTo(CloseTableOfContent, 0.4, {opacity:0, display:"none"}, {opacity:1, display:"flex"}, 'one')
        .fromTo(CloseTableOfContent, 0.4, {opacity:0, display:"none"}, {opacity:1, display:"flex"}, 'one')
        .fromTo(OpenTableOfContentBurger, 0.4, {opacity:1, display:"flex", zIndex: 0}, {opacity:0, display:"none", zIndex: -1}, 'one')    
        .fromTo(contentbar, 0.4, {y: 0}, {y: 30}, 'one')
        .fromTo('.content-box', 0.3, { y: -25, opacity: 0, x: -25 }, { y: 0, opacity: 1, x: 0, stagger: 0.1 }, 'one')
        
    });
    

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



function ready() {
    gsap.set(beforeLoading, {display: 'none'})    
    gsap.set(siteWrapper, {display: 'block'})    
}

document.addEventListener("DOMContentLoaded", ready);