document.querySelector('nav a[href="#projects"]').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default link behavior
    document.querySelector('#projects').scrollIntoView({ // Scroll smoothly to the projects section
        behavior: 'smooth'
    });
});