document.addEventListener("DOMContentLoaded", function() {
    console.log('Portfolio loaded.');

    function toggleSection(sectionId) {
        var section = document.getElementById(sectionId);
        if (section) {
            section.classList.toggle("open");

            var sections = document.querySelectorAll(".section");
            sections.forEach(function(sec) {
                if (sec.id !== sectionId && sec.classList.contains("open")) {
                    sec.classList.remove("open");
                }
            });
        }
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    document.getElementById('currentYear').innerText = new Date().getFullYear();

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const sections = document.querySelectorAll('.section');

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollPosition >= sectionTop - window.innerHeight / 1.5) {
                section.style.animation = 'fadeIn 1s ease forwards';
            }
        });
    });

    const elements = document.querySelectorAll('.container, .section h2, .section p');
    elements.forEach(element => {
        element.style.opacity = 0;
        element.style.animation = 'fadeIn 1s ease forwards';
    });
});