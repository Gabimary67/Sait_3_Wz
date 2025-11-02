document.addEventListener('DOMContentLoaded', () => {
    // Анимация для блока How It Works
    const cards = document.querySelectorAll('.how-it-works-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200 + 100);
    });

    // Анимация для блока What We Do
    const whatWeDoSection = document.querySelector('.what-we-do');
    if (whatWeDoSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const textContent = entry.target.querySelector('.what-we-do-text');
                    const image = entry.target.querySelector('.what-we-do-image');
                    
                    if (textContent) {
                        textContent.style.opacity = '0';
                        textContent.style.transform = 'translateX(50px)';
                        textContent.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
                        
                        setTimeout(() => {
                            textContent.style.opacity = '1';
                            textContent.style.transform = 'translateX(0)';
                        }, 200);
                    }
                    
                    if (image) {
                        image.style.opacity = '0';
                        image.style.transform = 'translateX(-50px)';
                        image.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
                        
                        setTimeout(() => {
                            image.style.opacity = '1';
                            image.style.transform = 'translateX(0)';
                        }, 400);
                    }
                }
            });
        }, { threshold: 0.3 });

        observer.observe(whatWeDoSection);
    }

    // Анимация для блока Features
    const featuresSection = document.querySelector('.features');
    if (featuresSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const featureCards = entry.target.querySelectorAll('.feature-card');
                    featureCards.forEach((card, index) => {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(30px)';
                        
                        setTimeout(() => {
                            card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, index * 150 + 100);
                    });
                }
            });
        }, { threshold: 0.2 });

        observer.observe(featuresSection);
    }

    // Анимация для блока Testimonials
    const testimonialsSection = document.querySelector('.testimonials');
    if (testimonialsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const testimonialCards = entry.target.querySelectorAll('.testimonial-card');
                    testimonialCards.forEach((card, index) => {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(30px)';
                        
                        setTimeout(() => {
                            card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, index * 150 + 100);
                    });
                }
            });
        }, { threshold: 0.2 });

        observer.observe(testimonialsSection);
    }

    // Анимация для блока FAQ
    const faqSection = document.querySelector('.faq');
    if (faqSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const faqItems = entry.target.querySelectorAll('.faq-item');
                    faqItems.forEach((item, index) => {
                        item.style.opacity = '0';
                        item.style.transform = 'translateY(20px)';
                        
                        setTimeout(() => {
                            item.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, index * 100 + 100);
                    });
                }
            });
        }, { threshold: 0.2 });

        observer.observe(faqSection);
    }

  // Функционал аккордеона для FAQ
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        // Закрываем все остальные элементы
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        
        // Переключаем текущий элемент
        item.classList.toggle('active');
    });
});
});