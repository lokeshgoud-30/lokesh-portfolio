const tabButtons=document.querySelectorAll(".tab-btn");
const tabContents=document.querySelectorAll(".tab-content");

tabButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        tabButtons.forEach(btn=>btn.classList.remove("active"));
        tabContents.forEach(content=>content.classList.remove("active"));

        button.classList.add("active");

        const target=document.getElementById(button.dataset.tab);

        target.classList.add("active");

    });

});
const contactForm=document.getElementById("contactForm");
const successMessage=document.getElementById("success-message");

contactForm.addEventListener("submit",async function(e){

    e.preventDefault();

    const formData=new FormData(contactForm);

    const response=await fetch(contactForm.action,{
        method:"POST",
        body:formData
    });

    if(response.ok){

            successMessage.style.display="block";

            contactForm.reset();

            setTimeout(() => {

                successMessage.style.display="none";

            },2000);

    }

});
/*MOBILE MENU=*/

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});
document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});
/*ACTIVE NAVBAR*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});
/*SCROLL REVEAL*/

const hiddenElements = document.querySelectorAll("section:not(#home)");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

hiddenElements.forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});
/*BACK TO TOP*/

const backToTop=document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        backToTop.style.display="block";

    }else{

        backToTop.style.display="none";

    }

});

backToTop.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});