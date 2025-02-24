const textDisplay = document.getElementById("text-display");
const textArray = ["Welcome to TextileBrand", "Discover Quality Fabrics", "Style Redefined", "Contact Us Today"];
let currentIndex = 0;

function displayText() {
  // Update the text content
  textDisplay.textContent = textArray[currentIndex];

  // Trigger the animation by bringing the text forward
  textDisplay.style.transform = "translateZ(0)";
  textDisplay.style.opacity = 1;

  // After 2 seconds, reset the text back to its initial position
  setTimeout(() => {
    textDisplay.style.transform = "translateZ(-500px)";
    textDisplay.style.opacity = 0;

    // Move to the next text after 1 second
    setTimeout(() => {
      currentIndex = (currentIndex + 1) % textArray.length;
      displayText();
    }, 1000);
  }, 2000);
}

displayText();

let lastScrollTop = 0; // Variable to track last scroll position
const navbar = document.getElementById('navbar'); // Navbar element

window.addEventListener('scroll', function () {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scroll Down - Hide navbar
    navbar.classList.add('hidden');
  } else {
    // Scroll Up - Show navbar
    navbar.classList.remove('hidden');
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll values
});


