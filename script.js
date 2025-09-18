// image slider
let slides = document.querySelectorAll(".slide");
let currentIndex=0;

document.querySelector(".next").addEventListener("click", ()=>{
    slides[currentIndex].classList.remove("active");
    currentIndex= (currentIndex +1) % slides.length;
    slides[currentIndex].classList.add("active");

});

document.querySelector(".prev").addEventListener("click", ()=>{
    slides[currentIndex].classList.remove("active");
    currentIndex=(currentIndex -1 + slides.length) % slides.length;
    slides[currentIndex].classList.add("active");

});

// Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();
    let name= document.getElementById("name").value.trim();
    let email= document.getElementById("email").value.trim();
    let message= document.getElementById("message").value.trim();
    let formMessage= document.getElementById("formMessage");

    if(name && email && message){
        formMessage.style.color="green";
        formMessage.textContent="Form submitted successfully!";
        this.reset();
    }else{
        formMessage.style.color="red";
        formMessage.textContent="Please fill in all fields"
    }

});