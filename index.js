// FOR MENU LINKS

// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select all elements with the class 'nav-link'
    const links = document.querySelectorAll('.nav-link');
    // Get the current URL of the page
    const currentURL = window.location.href;

    // Iterate over each link
    links.forEach(link => {
        // Check if the link's href matches the current URL
        if (link.href === currentURL) {
            // If it matches, add the 'active' class to this link
            link.classList.add('active');
        }

        // Add a click event listener to each link
        link.addEventListener('click', function() {
            // Remove the 'active' class from all links
            links.forEach(link => link.classList.remove('active'));
            // Add the 'active' class to the clicked link
            this.classList.add('active');
        });
    });
});


// FOR TOGGLE MENU

// Wait for the entire DOM to be loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Select the toggle button using its ID
    const toggle = document.getElementById('toggle');
    // Select the menu container using its ID
    const menu = document.getElementById('menu');

    // Add a click event listener to the toggle button
    toggle.addEventListener('click', () => {
        // Toggle the 'show' class on the menu element to show or hide the menu
        menu.classList.toggle('show');
        toggle.classList.toggle('active');
    });
});

// FOR FIXED NAVBAR
document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function(){
        const navbar = document.querySelector('.navbar');
        if(window.scrollY > 50){
            navbar.classList.add('scrolled');
        }else{
            navbar.classList.remove('scrolled');
        }
    });
})

// AOS ANIMATIONS
document.addEventListener('DOMContentLoaded',()=>{
    AOS.init();
});


//scroll to top
// Create the button dynamically
const scrollToTopBtn = document.createElement("button");
scrollToTopBtn.innerText = "↑";
scrollToTopBtn.id = "scrollToTopBtn";
document.body.appendChild(scrollToTopBtn);

// Style the button with your colors
scrollToTopBtn.style.position = "fixed";
scrollToTopBtn.style.bottom = "50px";
scrollToTopBtn.style.left = "50%";
scrollToTopBtn.style.padding = "10px 15px";
scrollToTopBtn.style.fontSize = "20px";
scrollToTopBtn.style.border = "none";
scrollToTopBtn.style.borderRadius = "50%";
scrollToTopBtn.style.backgroundColor = "#0C5450"; // Scrollbar handle color
scrollToTopBtn.style.color = "white";
scrollToTopBtn.style.cursor = "pointer";
scrollToTopBtn.style.display = "none"; // Initially hidden
scrollToTopBtn.style.boxShadow = "2px 2px 10px rgba(0, 0, 0, 0.8)";
scrollToTopBtn.style.transition = "background 0.3s ease";

// Change button color on hover
scrollToTopBtn.addEventListener("mouseover", () => {
  scrollToTopBtn.style.backgroundColor = "#073c3a"; // Hover color
});
scrollToTopBtn.addEventListener("mouseout", () => {
  scrollToTopBtn.style.backgroundColor = "#0C5450"; // Default color
});

// Show button when scrolling down
window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

// Scroll to the top smoothly when clicked
scrollToTopBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
