document.addEventListener("DOMContentLoaded", function() {
    console.log('Portfolio loaded.');

    // Function to toggle section visibility
    function toggleSection(sectionId) {
        var section = document.getElementById(sectionId);
        section.classList.toggle("open");
        
        // Close other open sections
        var sections = document.querySelectorAll(".section");
        sections.forEach(function(sec) {
            if (sec.id !== sectionId && sec.classList.contains("open")) {
                sec.classList.remove("open");
            }
        });
    }

    // Add click event listeners to navigation links
    var navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default link behavior
            var targetId = link.getAttribute("href").substring(1); // Get target section ID
            toggleSection(targetId); // Toggle section visibility
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Function to show current year in the footer
    document.getElementById('currentYear').innerText = new Date().getFullYear();

    // Animate elements on scroll
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

    // Trigger animations on page load
    const elements = document.querySelectorAll('.container, .section h2, .section p');
    elements.forEach(element => {
        element.style.opacity = 0;
        element.style.animation = 'fadeIn 1s ease forwards';
    });
});
