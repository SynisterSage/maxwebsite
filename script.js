// Hero Section Interactivity
const headshot = document.querySelector('.headshot');

if (headshot) {
    // Mouse follow effect on headshot
    headshot.addEventListener('mousemove', (e) => {
        const rect = headshot.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;
        
        const angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
        headshot.style.filter = `drop-shadow(0 0 20px rgba(30, 144, 255, 0.5))`;
    });

    headshot.addEventListener('mouseleave', () => {
        headshot.style.filter = 'none';
    });

    // Click to animate
    headshot.addEventListener('click', () => {
        headshot.style.animation = 'pulse-click 0.6s ease-out';
        setTimeout(() => {
            headshot.style.animation = 'none';
        }, 600);
    });
}

// Add animation to style for click effect
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse-click {
        0% {
            transform: scale(1.12) rotateZ(-5deg);
            filter: drop-shadow(0 0 30px rgba(30, 144, 255, 0.8));
        }
        50% {
            transform: scale(1.2) rotateZ(5deg);
        }
        100% {
            transform: scale(1) rotateZ(0deg);
            filter: drop-shadow(0 0 15px rgba(30, 144, 255, 0.4));
        }
    }
`;
document.head.appendChild(style);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.style.borderBottom = '2px solid transparent';
        if (link.getAttribute('href').slice(1) === current) {
            link.style.borderBottom = '2px solid #1e90ff';
        }
    });
});

// Add animation to elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe cards and items for animation
document.querySelectorAll('.sample-card, .reference-card, .resume-item, .skill-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Mobile menu toggle (if needed for responsive)
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Close menu when a link is clicked (for mobile)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Menu will auto-close due to scroll behavior
    });
});
