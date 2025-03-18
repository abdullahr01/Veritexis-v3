// Initialize AOS
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false
});

// Remove Preloader
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 300);
    }
});

// Custom Cursor
document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.createElement('div');
    cursor.classList.add('cursor-glow');
    document.body.appendChild(cursor);

    let cursorVisible = true;
    let cursorEnlarged = false;

    const onMouseMove = (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

        if (!cursorVisible) {
            cursor.style.opacity = '1';
            cursorVisible = true;
        }
    };

    const onMouseEnter = () => {
        cursor.style.opacity = '1';
        cursorVisible = true;
    };

    const onMouseLeave = () => {
        cursor.style.opacity = '0';
        cursorVisible = false;
    };

    const onMouseDown = () => {
        cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) scale(0.8)`;
    };

    const onMouseUp = () => {
        cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);

    // Hover effect for links and buttons
    const handleLinkHoverEvents = () => {
        const links = document.querySelectorAll('a, button');
        
        links.forEach(link => {
            link.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(1.5)';
                cursor.style.mixBlendMode = 'difference';
                cursorEnlarged = true;
            });
            
            link.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
                cursor.style.mixBlendMode = 'difference';
                cursorEnlarged = false;
            });
        });
    };

    handleLinkHoverEvents();
});

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileToggle = document.querySelector('.mobile-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeMenu = document.querySelector('.close-menu');

    if (mobileToggle && mobileMenu && closeMenu) {
        mobileToggle.addEventListener('click', () => {
            mobileMenu.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        });

        closeMenu.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            document.body.style.overflow = 'auto';
        });
    }
});

// Gallery Image Swap
document.addEventListener('DOMContentLoaded', () => {
    const mainImage = document.querySelector('.main-image');
    const thumbs = document.querySelectorAll('.thumb');

    if (mainImage && thumbs.length > 0) {
        thumbs.forEach(thumb => {
            thumb.addEventListener('click', () => {
                const newSrc = thumb.getAttribute('src');
                const oldSrc = mainImage.getAttribute('src');

                // Animate the transition
                mainImage.style.opacity = '0';
                setTimeout(() => {
                    mainImage.setAttribute('src', newSrc);
                    mainImage.style.opacity = '1';
                }, 300);
            });
        });
    }
});

// Smooth Scroll
document.addEventListener('DOMContentLoaded', () => {
    const smoothScroll = (target) => {
        const element = document.querySelector(target);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('href');
            smoothScroll(target);
        });
    });
});

// Intersection Observer for Animations
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => observer.observe(element));
}); 