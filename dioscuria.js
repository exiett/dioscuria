// matrix-effects.js
document.addEventListener('DOMContentLoaded', () => {
    // Initialize glitch effects on links
    document.querySelectorAll('a').forEach(link => {
        link.setAttribute('data-text', link.textContent);
        
        link.addEventListener('mouseenter', () => {
            link.style.setProperty('--glitch-intensity', Math.random() * 3);
        });
    });

    // Add phosphor trail effect
    document.addEventListener('mousemove', (e) => {
        document.body.style.setProperty('--cursor-x', `${e.clientX}px`);
        document.body.style.setProperty('--cursor-y', `${e.clientY}px`);
    });

    // Konami Code Easter Egg
    const konamiCode = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
    let konamiIndex = 0;

    document.addEventListener('keydown', (e) => {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                document.body.classList.add('konami-mode');
                setTimeout(() => document.body.classList.remove('konami-mode'), 5000);
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
});