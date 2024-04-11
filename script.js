document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const sidebarMenu = document.querySelector('.sidebar-menu');

    menuBtn.addEventListener('click', function() {
        sidebarMenu.classList.toggle('active');
    });

    document.addEventListener('click', function(event) {
        const targetElement = event.target;
        if (!targetElement.closest('.sidebar-menu') && !targetElement.closest('.menu-btn')) {
            sidebarMenu.classList.remove('active');
        }
    });

    const menuLinks = sidebarMenu.querySelectorAll('a');
    menuLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            sidebarMenu.classList.remove('active');
        });
    });

    let slideIndex = 1;
    let slideInterval = 5000;
    let autoSlideTimer;
    let currentNumber = 1; 
    const currentNumberElement = document.getElementById('currentNumber');

    function showSlides(n) {
        const slides = document.getElementsByClassName("my-slides");
        const projectNames = document.getElementsByClassName("name-project");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
        const projectName = slides[slideIndex - 1].getAttribute("data-project");
        projectNames[0].innerText = projectName;
        if(slideIndex < 10) {
            currentNumberElement.innerHTML = `0${slideIndex}`;
        } else {
            currentNumberElement.innerHTML = slideIndex;
        }
    }

    document.getElementById("prev").addEventListener("click", function() {
        plusSlides(-1);
    });
    
    document.getElementById("next").addEventListener("click", function() {
        plusSlides(1);
    });

    function plusSlides(n) {
        showSlides(slideIndex += n);
        clearInterval(autoSlideTimer);
        autoSlideTimer = setInterval(function() {
            plusSlides(1);
        }, slideInterval);
    }

    document.getElementById('prev').addEventListener('mouseover', stopAutoSlide);
    document.getElementById('prev').addEventListener('mouseout', startAutoSlide);
    document.getElementById('next').addEventListener('mouseover', stopAutoSlide);
    document.getElementById('next').addEventListener('mouseout', startAutoSlide);

    function startAutoSlide() {
        console.log('start');
        autoSlideTimer = setInterval(function() {
            plusSlides(1);
        }, slideInterval);
    }
    
    function stopAutoSlide() {
        clearInterval(autoSlideTimer);
        console.log('stop');
    }

    // function formatNumber(number) {
    //     return number < 10 ? '0' + number : number;
    // }

    showSlides(slideIndex);
    startAutoSlide();



});

const inputs = document.querySelectorAll('input, textarea');

inputs.forEach(input => {
    input.addEventListener('input', function () {
        if (this.value.trim() !== '') {
            this.classList.add('has-value');
        } else {
            this.classList.remove('has-value');
        }
    });
});