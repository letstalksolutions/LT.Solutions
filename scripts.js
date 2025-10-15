// JavaScript for Let's Talk Solutions website

function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports.isValidEmail = isValidEmail;
}

if (typeof document !== 'undefined') {

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
            
            // Toggle menu button appearance
            const spans = this.querySelectorAll('span');
            if (this.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }
    
    // Testimonial slider
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const testimonialDots = document.querySelectorAll('.testimonial-dot');
    
    if (testimonialDots.length > 0) {
        testimonialDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                // Remove active class from all slides and dots
                testimonialSlides.forEach(slide => {
                    slide.classList.remove('active');
                });
                testimonialDots.forEach(dot => {
                    dot.classList.remove('active');
                });
                
                // Add active class to current slide and dot
                testimonialSlides[index].classList.add('active');
                dot.classList.add('active');
            });
        });
        
        // Auto-rotate testimonials
        let currentSlide = 0;
        setInterval(() => {
            currentSlide = (currentSlide + 1) % testimonialSlides.length;
            
            // Remove active class from all slides and dots
            testimonialSlides.forEach(slide => {
                slide.classList.remove('active');
            });
            testimonialDots.forEach(dot => {
                dot.classList.remove('active');
            });
            
            // Add active class to current slide and dot
            testimonialSlides[currentSlide].classList.add('active');
            testimonialDots[currentSlide].classList.add('active');
        }, 5000);
    }
    
    // Sticky header
    const header = document.querySelector('header');
    
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.style.padding = '10px 0';
                header.style.background = 'rgba(13, 25, 65, 0.95)';
                header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.padding = '';
                header.style.background = '';
                header.style.boxShadow = '';
            }
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            /* Modern Styles for Let's Talk Solutions */

:root {
    --primary-dark: #0d1941;
    --primary-blue: #1a2b5f;
    --secondary-slate: #646e8c;
    --accent-red: #dc2828;
    --accent-red-hover: #b91c1c;
    --text-light: #ffffff;
    --text-muted: #94a3b8;
    --background-dark: #0a0f1f;
    --card-bg: rgba(255, 255, 255, 0.03);
    --card-border: rgba(255, 255, 255, 0.08);
    --gradient-primary: linear-gradient(135deg, #dc2828 0%, #b91c1c 100%);
    --gradient-blue: linear-gradient(135deg, #1a2b5f 0%, #0d1941 100%);
    --transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.1);
    --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.15);
    --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.25);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    line-height: 1.7;
    color: var(--text-light);
    background: var(--background-dark);
    overflow-x: hidden;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

h1, h2, h3, h4, h5, h6 {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: -0.02em;
}

h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    margin-bottom: 1.5rem;
}

h2 {
    font-size: clamp(2rem, 4vw, 3rem);
    margin-bottom: 1rem;
}

h3 {
    font-size: clamp(1.25rem, 2.5vw, 1.75rem);
}

p {
    font-size: 1.0625rem;
    line-height: 1.8;
    color: var(--text-muted);
    margin-bottom: 1.5rem;
}

a {
    text-decoration: none;
    color: inherit;
    transition: var(--transition);
}

.gradient-text {
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.section-tag {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: 2rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--accent-red);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 1rem;
}

.section-header {
    text-align: center;
    max-width: 700px;
    margin: 0 auto 4rem;
}

/* Buttons */
.btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    border-radius: 0.75rem;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: var(--transition);
    border: none;
    position: relative;
    overflow: hidden;
}

.btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(-100%);
    transition: var(--transition);
}

.btn:hover::before {
    transform: translateX(0);
}

.btn-primary {
    background: var(--gradient-primary);
    color: var(--text-light);
    box-shadow: 0 4px 20px rgba(220, 40, 40, 0.3);
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 30px rgba(220, 40, 40, 0.4);
}

.btn-secondary {
    background: transparent;
    color: var(--text-light);
    border: 2px solid var(--card-border);
}

.btn-secondary:hover {
    border-color: var(--accent-red);
    background: rgba(220, 40, 40, 0.1);
}

/* Header */
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background: rgba(10, 15, 31, 0.8);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--card-border);
    transition: var(--transition);
}

header.scrolled {
    background: rgba(10, 15, 31, 0.95);
    box-shadow: var(--shadow-md);
}

header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 20px;
}

.logo img {
    height: 60px;
    transition: var(--transition);
}

nav {
    display: flex;
    align-items: center;
    gap: 2rem;
}

.nav-links {
    display: flex;
    align-items: center;
    gap: 2.5rem;
    list-style: none;
}

.nav-links li a {
    font-weight: 500;
    font-size: 0.9375rem;
    position: relative;
    padding: 0.5rem 0;
}

.nav-links li a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--accent-red);
    transition: var(--transition);
}

.nav-links li a:hover::after,
.nav-links li.active a::after {
    width: 100%;
}

.mobile-menu-btn {
    display: none;
    flex-direction: column;
    gap: 6px;
    cursor: pointer;
    padding: 0.5rem;
}

.mobile-menu-btn span {
    display: block;
    width: 25px;
    height: 2px;
    background: var(--text-light);
    transition: var(--transition);
    border-radius: 2px;
}

/* Hero Section */
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 8rem 0 4rem;
    overflow: hidden;
}

.hero-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 20% 50%, rgba(220, 40, 40, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(26, 43, 95, 0.15) 0%, transparent 50%);
    z-index: 0;
}

.hero .container {
    position: relative;
    z-index: 1;
}

.hero-content {
    max-width: 800px;
    text-align: center;
    margin: 0 auto;
}

.hero-tag {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: 2rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--accent-red);
    margin-bottom: 2rem;
    animation: fadeInUp 0.6s ease-out;
}

.hero-content h1 {
    animation: fadeInUp 0.6s ease-out 0.2s backwards;
}

.hero-content p {
    font-size: 1.25rem;
    max-width: 600px;
    margin: 0 auto 2.5rem;
    animation: fadeInUp 0.6s ease-out 0.4s backwards;
}

.cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
    animation: fadeInUp 0.6s ease-out 0.6s backwards;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.scroll-indicator {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 50px;
    border: 2px solid var(--card-border);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    padding-top: 10px;
}

.scroll-indicator span {
    width: 4px;
    height: 8px;
    background: var(--accent-red);
    border-radius: 2px;
    animation: scroll 2s infinite;
}

@keyframes scroll {
    0% {
        opacity: 1;
        transform: translateY(0);
    }
    100% {
        opacity: 0;
        transform: translateY(20px);
    }
}

/* Services Section */
.services {
    padding: 8rem 0;
    position: relative;
}

.service-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
}

.service-card {
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: 1.5rem;
    padding: 2.5rem;
    transition: var(--transition);
    position: relative;
    overflow: hidden;
}

.service-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(220, 40, 40, 0.05) 0%, transparent 100%);
    opacity: 0;
    transition: var(--transition);
}

.service-card:hover {
    transform: translateY(-8px);
    border-color: var(--accent-red);
    box-shadow: 0 12px 40px rgba(220, 40, 40, 0.2);
}

.service-card:hover::before {
    opacity: 1;
}

.service-icon {
    width: 60px;
    height: 60px;
    background: var(--gradient-primary);
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
}

.service-number {
    position: absolute;
    top: 2rem;
    right: 2rem;
    font-size: 3rem;
    font-weight: 700;
    color: rgba(220, 40, 40, 0.1);
    font-family: 'Space Grotesk', sans-serif;
}

.service-card h3 {
    margin-bottom: 1rem;
    position: relative;
    z-index: 1;
}

.service-card p {
    margin-bottom: 1.5rem;
    font-size: 1rem;
    position: relative;
    z-index: 1;
}

.service-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--accent-red);
    font-weight: 600;
    font-size: 0.9375rem;
    position: relative;
    z-index: 1;
}

.service-link:hover {
    gap: 0.75rem;
}

/* About Preview Section */
.about-preview {
    padding: 8rem 0;
    background: linear-gradient(180deg, transparent 0%, var(--primary-dark) 100%);
}

.about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
}

.about-image {
    position: relative;
}

.about-image img {
    width: 100%;
    border-radius: 1.5rem;
    box-shadow: var(--shadow-lg);
}

.about-badge {
    position: absolute;
    bottom: -1rem;
    left: 50%;
    transform: translateX(-50%);
    background: var(--gradient-primary);
    padding: 1rem 1.5rem;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 600;
    font-size: 0.875rem;
    box-shadow: var(--shadow-md);
    white-space: nowrap;
}

.about-content {
    padding: 2rem 0;
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin: 2rem 0 2.5rem;
}

.stat-item {
    text-align: center;
}

.stat-number {
    display: block;
    font-size: 2.5rem;
    font-weight: 700;
    font-family: 'Space Grotesk', sans-serif;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.5rem;
}

.stat-label {
    display: block;
    font-size: 0.875rem;
    color: var(--text-muted);
}

/* Testimonials */
.testimonials {
    padding: 8rem 0;
}

.testimonial-slider {
    max-width: 900px;
    margin: 0 auto;
}

.testimonial-slide {
    display: none;
    animation: fadeInUp 0.6s ease-out;
}

.testimonial-slide.active {
    display: block;
}

.testimonial-content {
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: 1.5rem;
    padding: 3rem;
    position: relative;
}

.quote-icon {
    width: 60px;
    height: 60px;
    background: var(--gradient-primary);
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    margin-bottom: 2rem;
}

.testimonial-content p {
    font-size: 1.25rem;
    line-height: 1.8;
    color: var(--text-light);
    margin-bottom: 2rem;
}

.testimonial-author {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.author-info {
    display: flex;
    flex-direction: column;
}

.author-name {
    font-weight: 600;
    font-size: 1.125rem;
    color: var(--text-light);
}

.author-title {
    font-size: 0.9375rem;
    color: var(--text-muted);
}

.testimonial-controls {
    display: flex;
    justify-content: center;
    gap: 0.75rem;
    margin-top: 2rem;
}

.testimonial-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--card-border);
    cursor: pointer;
    transition: var(--transition);
}

.testimonial-dot.active {
    background: var(--accent-red);
    width: 30px;
    border-radius: 5px;
}

/* CTA Section */
.cta {
    padding: 8rem 0;
    position: relative;
    overflow: hidden;
}

.cta::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, rgba(220, 40, 40, 0.1) 0%, transparent 70%);
}

.cta-content {
    text-align: center;
    max-width: 700px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
}

.cta-content h2 {
    margin-bottom: 1rem;
}

.cta-content p {
    font-size: 1.125rem;
    margin-bottom: 2rem;
}

/* Footer */
footer {
    background: var(--primary-dark);
    border-top: 1px solid var(--card-border);
    padding: 4rem 0 2rem;
}

.footer-content {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 4rem;
    margin-bottom: 3rem;
}

.footer-brand {
    max-width: 350px;
}

.footer-logo {
    height: 80px;
    margin-bottom: 1rem;
}

.footer-brand p {
    font-size: 1rem;
    line-height: 1.6;
}

.footer-links {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
}

.footer-column h4 {
    font-size: 1rem;
    margin-bottom: 1rem;
    color: var(--text-light);
}

.footer-column ul {
    list-style: none;
}

.footer-column ul li {
    margin-bottom: 0.75rem;
}

.footer-column ul li a {
    color: var(--text-muted);
    font-size: 0.9375rem;
    transition: var(--transition);
}

.footer-column ul li a:hover {
    color: var(--accent-red);
}

.social-links {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
}

.social-links a {
    width: 40px;
    height: 40px;
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition);
}

.social-links a:hover {
    background: var(--gradient-primary);
    border-color: var(--accent-red);
    transform: translateY(-2px);
}

.footer-bottom {
    padding-top: 2rem;
    border-top: 1px solid var(--card-border);
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.875rem;
    color: var(--text-muted);
}

.footer-bottom a {
    color: var(--text-muted);
    transition: var(--transition);
}

.footer-bottom a:hover {
    color: var(--accent-red);
}

/* Responsive Design */
@media (max-width: 992px) {
    .about-grid {
        grid-template-columns: 1fr;
        gap: 3rem;
    }

    .about-image {
        max-width: 400px;
        margin: 0 auto;
    }

    .footer-content {
        grid-template-columns: 1fr;
        gap: 3rem;
    }

    .stats-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (max-width: 768px) {
    header .container {
        padding: 1rem 20px;
    }

    .logo img {
        height: 50px;
    }

    .nav-links {
        position: fixed;
        top: 80px;
        left: -100%;
        width: 100%;
        height: calc(100vh - 80px);
        background: rgba(10, 15, 31, 0.98);
        backdrop-filter: blur(20px);
        flex-direction: column;
        justify-content: center;
        gap: 2rem;
        transition: var(--transition);
    }

    .nav-links.active {
        left: 0;
    }

    .mobile-menu-btn {
        display: flex;
    }

    .mobile-menu-btn.active span:nth-child(1) {
        transform: rotate(45deg) translate(8px, 8px);
    }

    .mobile-menu-btn.active span:nth-child(2) {
        opacity: 0;
    }

    .mobile-menu-btn.active span:nth-child(3) {
        transform: rotate(-45deg) translate(8px, -8px);
    }

    .service-cards {
        grid-template-columns: 1fr;
    }

    .stats-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }

    .footer-links {
        grid-template-columns: 1fr;
    }

    .footer-bottom {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
    }

    .testimonial-content {
        padding: 2rem;
    }

    .testimonial-content p {
        font-size: 1.125rem;
    }
}

@media (max-width: 576px) {
    .hero {
        padding: 6rem 0 3rem;
    }

    .cta-buttons {
        flex-direction: column;
        width: 100%;
    }

    .btn {
        width: 100%;
        justify-content: center;
    }

    .about-badge {
        font-size: 0.75rem;
        padding: 0.75rem 1rem;
    }
}
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    mobileMenuBtn.click();
                }
            }
        });
    });
    
    // Animate elements on scroll
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    if (animateElements.length > 0) {
        const checkIfInView = () => {
            animateElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < window.innerHeight - elementVisible) {
                    element.classList.add('visible');
                }
            });
        };
        
        window.addEventListener('scroll', checkIfInView);
        checkIfInView(); // Check on initial load
    }
    
    // Form validation
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            const nameInput = this.querySelector('input[name="name"]');
            const emailInput = this.querySelector('input[name="email"]');
            const messageInput = this.querySelector('textarea[name="message"]');
            
            // Reset error messages
            this.querySelectorAll('.error-message').forEach(error => {
                error.remove();
            });
            
            // Validate name
            if (!nameInput.value.trim()) {
                isValid = false;
                showError(nameInput, 'Please enter your name');
            }
            
            // Validate email
            if (!emailInput.value.trim()) {
                isValid = false;
                showError(emailInput, 'Please enter your email');
            } else if (!isValidEmail(emailInput.value)) {
                isValid = false;
                showError(emailInput, 'Please enter a valid email address');
            }
            
            // Validate message
            if (!messageInput.value.trim()) {
                isValid = false;
                showError(messageInput, 'Please enter your message');
            }
            
            if (isValid) {
                // Show success message
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.textContent = 'Thank you for your message! I will get back to you soon.';
                
                contactForm.innerHTML = '';
                contactForm.appendChild(successMessage);
                
                // In a real implementation, you would send the form data to a server here
            }
        });
        
        function showError(input, message) {
            const errorMessage = document.createElement('div');
            errorMessage.className = 'error-message';
            errorMessage.textContent = message;
            
            input.parentNode.appendChild(errorMessage);
            input.classList.add('error');
        }
    }
    
    // FAQ accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Close all FAQ items
                faqItems.forEach(faq => {
                    faq.classList.remove('active');
                });
                
                // Open clicked item if it wasn't already open
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        });
    }
});

// Cookie Consent Popup Logic
const cookieConsentPopup = document.getElementById("cookie-consent-popup");
const acceptCookiesBtn = document.getElementById("accept-cookies-btn");

if (cookieConsentPopup && acceptCookiesBtn) {
    // Check if consent was already given
    if (!getCookie("cookie_consent_accepted")) {
        cookieConsentPopup.style.display = "flex";
    }

    acceptCookiesBtn.addEventListener("click", function() {
        setCookie("cookie_consent_accepted", "true", 365);
        cookieConsentPopup.style.display = "none";
    });
}

function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    // Add Secure and SameSite=Lax attributes for enhanced security
    document.cookie = name + "=" + (value || "") + expires + "; path=/; Secure; SameSite=Lax";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

}