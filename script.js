document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const navHeight = document.querySelector('nav').offsetHeight;
                const offsetTop = targetSection.getBoundingClientRect().top + window.pageYOffset - navHeight;

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    const items = document.querySelectorAll('.item');

    items.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'scale(1.05)';
            item.style.transition = 'transform 0.3s';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'scale(1)';
        });
    });

    // Slideshow functionality
    const slideshows = document.querySelectorAll('.slideshow-container');
    slideshows.forEach(slideshow => {
        let slideIndex = 0;
        const slides = slideshow.querySelectorAll('img');
        const prev = slideshow.querySelector('.prev');
        const next = slideshow.querySelector('.next');

        const showSlide = (index) => {
            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
            });
        };

        prev.addEventListener('click', () => {
            slideIndex = (slideIndex > 0) ? slideIndex - 1 : slides.length - 1;
            showSlide(slideIndex);
        });

        next.addEventListener('click', () => {
            slideIndex = (slideIndex < slides.length - 1) ? slideIndex + 1 : 0;
            showSlide(slideIndex);
        });

        showSlide(slideIndex);
    });
});
