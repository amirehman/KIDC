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
        
        
        megablackarrow.forEach(b => {
            b.classList.remove('active')
        });
        
        let section = element.getAttribute('data-list')
        let list = document.getElementById(section)

        // console.log(list)

        if(list.classList.contains('active')){
            list.classList.remove('active')
            // element.classList.remove('rotate-180')
            list.classList.add('hidden')
            list.classList.add('opacity-0')
            list.classList.add('h-0')    
        }else{
            // element.classList.add('rotate-180')
            list.classList.add('active')
            element.classList.add('active')
            list.classList.remove('hidden')
            list.classList.remove('opacity-0')
            list.classList.remove('h-0')    
        }

        
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

mm.add("(max-width: 769px)", () => {

    gsap.set(logo, {width: '3.5rem', marginLeft: '1rem'})
    gsap.set(MegaMenu, {height: '5rem'})

    
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


let matchMedia = gsap.matchMedia()



let mmtl = gsap.timeline();

function openMegaMenu() {


    matchMedia.add({
        isMobile: "(min-width: 200px) and (max-width: 640px)",
        isTab: "(min-width: 641px) and (max-width: 1024px)",
        isSmallLaptop: "(min-width: 1025px) and (max-width: 1279px)",
        isLaptop: "(min-width: 1280px) and (max-width: 1536px)",
        isDesktop: "(min-width: 1537px)",
      }, (context) => {
    
        let { isMobile, isTab, isSmallLaptop, isLaptop, isDesktop } = context.conditions;
    


        mmtl.play()

        mmtl
        .fromTo(MegaMenu, 0.4, {height: isMobile ? '5rem' : '3rem'}, {height: '100vh'}, 'one')
        .fromTo(MegaContent, 0.4, {opacity: 0, zIndex: -50}, {opacity: 1, zIndex:1}, 'one')
        .fromTo(logo, 0.4, {y: 0, width: isMobile ? '3.5rem' : '6.2rem'}, {y: 20, width: isMobile ? '6rem' : '8rem'}, 'one')
        .fromTo(ContentButton, 0.4, {width: '15rem'}, {width: '5rem'}, 'one')
        .fromTo(openTableOfContent, 0.4, {opacity:1, display:"flex"}, {opacity:0, display:"none"}, 'one')
        .fromTo(CloseTableOfContent, 0.4, {opacity:0, display:"none"}, {opacity:1, display:"flex"}, 'one')
        .fromTo(contentbar, 0.4, {y: 0}, {y: 30}, 'one')
        .fromTo('.content-box', 0.3, { y: -25, opacity: 0, x: -25 }, { y: 0, opacity: 1, x: 0, stagger: 0.1 }, 'one')
    
    
      })

      mm.add("(max-width: 769px)", () => {

        matchMedia.add({
            isMobile: "(min-width: 200px) and (max-width: 640px)",
            isTab: "(min-width: 641px) and (max-width: 1024px)",
            isSmallLaptop: "(min-width: 1025px) and (max-width: 1279px)",
            isLaptop: "(min-width: 1280px) and (max-width: 1536px)",
            isDesktop: "(min-width: 1537px)",
          }, (context) => {
        
            let { isMobile, isTab, isSmallLaptop, isLaptop, isDesktop } = context.conditions;
        

        mmtl
        .fromTo(MegaMenu, 0.4, {height: isMobile ? '5rem' : '3rem'}, {height: '100vh'}, 'one')
        .fromTo(MegaContent, 0.4, {opacity: 0, zIndex: -50}, {opacity: 1, zIndex:1}, 'one')
        .fromTo(logo, 0.4, {y: 0, width: isMobile ? '3.5rem' : '6.2rem'}, {y: 20, width: isMobile ? '6rem' : '8rem'}, 'one')
        .fromTo(ContentButton, 0.4, {width: '15rem'}, {width: '5rem'}, 'one')
        .fromTo(openTableOfContent, 0.4, {opacity:1, display:"flex"}, {opacity:0, display:"none"}, 'one')
        .fromTo(CloseTableOfContent, 0.4, {opacity:0, display:"none"}, {opacity:1, display:"flex"}, 'one')
        .fromTo(OpenTableOfContentBurger, 0.4, {opacity: 1, display: "flex", zIndex: 0}, {opacity:0, display:"none", zIndex: -1}, 'one')    
        .fromTo(CloseTableOfContentBurger, 0.4, {opacity:0, display:"none", zIndex: -1}, {opacity: 1, display:"flex", zIndex: 0}, 'one')    
        .fromTo(contentbar, 0.4, {y: 0}, {y: 30}, 'one')
        .fromTo('.content-box', 0.3, { y: -25, opacity: 0, x: -25 }, { y: 0, opacity: 1, x: 0, stagger: 0.1 }, 'one')
        })
        
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
    arrows: false,
    pagination: false
} );
  
splide1.mount();

// Section4
var splide2 = new Splide( '.splide2', {
    perPage: 2,
    gap    : '1rem',
    pagination: false,
    arrows: true,
    // drag: 'free',
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
    // drag: 'free',
    breakpoints: {
        900: {
            perPage: 1,
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



const simpleParallax = (elem, modifier) => {
    let paras = document.getElementsByClassName(elem);
    for (let i = 0; i < paras.length; i++) {
      paras[i].setAttribute(
        "style",
        "background-repeat: no-repeat; background-attachment: fixed; background-size: cover;background-position: center center;"
      );
    }
    const sp = () => {
      for (let i = 0; i < paras.length; i++) {
        let x = paras[i].getBoundingClientRect().top / modifier;
        let y = Math.round(x * 100) / 100;
        paras[i].style.backgroundPosition = "center " + y + "px";
      }
      requestAnimationFrame(sp);
    };
    requestAnimationFrame(sp);
  };
  
  simpleParallax("para", 10);



function ready() {
    gsap.set(beforeLoading, {display: 'none'})    
    gsap.set(siteWrapper, {display: 'block'})    
}

document.addEventListener("DOMContentLoaded", ready);


