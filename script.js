/*
  script.js
  ARMS Website Interactivity
  Author: Your Name
  Date: 2025-01-22
*/

// Smooth scrolling for internal navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      // If this link actually points to a valid section on the page
      if (document.querySelector(this.getAttribute("href"))) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute("href"));
        window.scrollTo({
          top: targetElement.offsetTop - 60, // account for the sticky header
          behavior: "smooth",
        });
      }
    });
  });
  
  // Dynamic form validation and placeholder alert for submission
  const contactForm = document.getElementById("contactForm");
  
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
  
    // Simple validation - check if all fields have values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
  
    if (!name || !email || !message) {
      alert("Please fill out all fields before submitting.");
    } else {
      // Placeholder alert - replace with actual form submission logic as needed
      alert("Thank you for contacting us! We will get back to you soon.");
      contactForm.reset();
    }
  });