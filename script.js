const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const addCartButtons = document.querySelectorAll(".add-cart");
const cartCount = document.getElementById("cartCount");
const contactForm = document.getElementById("contactForm");

let count = 0;

// Mobile menu toggle
menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// Add to cart count
addCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    count++;
    cartCount.textContent = count;
    alert("Product added to cart!");
  });
});

// Contact form submit
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  contactForm.reset();
});