document.addEventListener('DOMContentLoaded', function() {
    const animatedItems = document.querySelectorAll('.animated-item, .timeline-item');

    const observerOptions = {
        root: null, // Menggunakan viewport sebagai root
        rootMargin: '0px',
        threshold: 0.1 // Ketika 10% dari elemen terlihat, panggil callback
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Berhenti mengamati setelah terlihat
            }
        });
    }, observerOptions);

    animatedItems.forEach(item => {
        observer.observe(item);
    });
});
