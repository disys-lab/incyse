// Dark mode toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Scroll progress bar
window.addEventListener('scroll', () => {
    const progress = document.getElementById('progress-bar');
    const scroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scroll / height) * 100;
    progress.style.width = scrolled + '%';
});

// Add scroll progress bar dynamically
document.body.insertAdjacentHTML('beforeend', '<div id="progress-bar"></div>');

// Section animations on scroll
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    },
    { threshold: 0.2 }
);

sections.forEach((section) => observer.observe(section));
