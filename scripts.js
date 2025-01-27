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

// // Scroll to top functionality
// function scrollToTop() {
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth',
//     });
// }

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

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.timeline-button');
    const contents = document.querySelectorAll('.timeline-content');
    const contentArea = document.getElementById('timeline-content');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const contentId = button.getAttribute('data-content');
            const content = document.getElementById(contentId);

            // Check if the clicked button is already active
            if (button.classList.contains('active')) {
                // If active, remove the active class and hide the content
                button.classList.remove('active');
                if (content) {
                    content.classList.remove('active');
                }

                // Check if all contents are hidden, then hide the content area
                const anyContentActive = Array.from(contents).some(content =>
                    content.classList.contains('active')
                );
                if (!anyContentActive) {
                    contentArea.style.display = 'none';
                }
            } else {
                // If not active, remove active classes from all buttons and contents
                buttons.forEach(btn => btn.classList.remove('active'));
                contents.forEach(content => content.classList.remove('active'));

                // Add active class to clicked button and show associated content
                button.classList.add('active');
                if (content) {
                    content.classList.add('active');
                    contentArea.style.display = 'block'; // Ensure content area is visible
                }
            }
        });
    });
});

document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const navbarHeight = document.querySelector('nav').offsetHeight;
            const offsetTop = targetElement.offsetTop - navbarHeight;

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth',
            });
        }
    });
});
// Scroll to top functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth', // Smooth scrolling
    });
}

// Show/hide the scroll-to-top button on scroll
const scrollTopButton = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // Show button after scrolling 300px
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});

