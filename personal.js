//Hero Section
document.querySelector('.cta-button').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor behavior
    const targetId = this.getAttribute('href'); // Get the target section ID
    const targetElement = document.querySelector(targetId); // Select the target element

    // Smooth scroll to the target section
    targetElement.scrollIntoView({ behavior: 'smooth' });
});

document.addEventListener('DOMContentLoaded', () => {
    const heroContent = document.querySelector('.hero-content');
    setTimeout(() => {
        heroContent.style.opacity = 1; // Make content visible
        heroContent.style.transform = 'translateY(0)'; // Reset position
    }, 500); // Delay before showing
});




//NavBar
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggle visibility
});

// Optional: Smooth scrolling
const links = document.querySelectorAll('.nav-links a');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        const targetId = link.getAttribute('href'); // Get target ID
        const targetSection = document.querySelector(targetId); // Select target section

        // Scroll to target section
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});


// Smooth scrolling for all links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor behavior
        const targetId = this.getAttribute('href'); // Get the target section ID
        const targetElement = document.querySelector(targetId); // Select the target element

        // Smooth scroll to the target section
        targetElement.scrollIntoView({ behavior: 'smooth' });
        
        // Close the mobile menu when a link is clicked
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});



//About me

document.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('.progress');

    progressBars.forEach(bar => {
        const skillValue = bar.getAttribute('data-skill'); // Get the data-skill value
        bar.style.width = skillValue + '%'; // Set the width for animation
    });
});


//Project

// Example JavaScript for filtering projects (if you decide to implement this feature)
const filterButtons = document.querySelectorAll('.filter-button'); // Assuming you have buttons for filtering

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.dataset.filter; // Get the category from the button's data attribute
        const projects = document.querySelectorAll('.project-card');

        projects.forEach(project => {
            if (project.classList.contains(category) || category === 'all') {
                project.style.display = 'block'; // Show project
            } else {
                project.style.display = 'none'; // Hide project
            }
        });
    });
});


//Skills

document.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('.progress');

    progressBars.forEach(bar => {
        const skillValue = bar.getAttribute('data-skill'); // Get the data-skill value
        bar.style.width = skillValue + '%'; // Set the width for animation
    });
});



//Contact

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Simple validation could go here

    alert('Your message has been sent!'); // Display a success message
    this.reset(); // Reset the form after submission
});
