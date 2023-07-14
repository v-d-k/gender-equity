// Change the background color of the section on scroll
window.addEventListener('scroll', function() {
    var section = document.querySelector('.color-change-section');
    var sectionHeight = section.offsetHeight;
    var scrollPosition = window.pageYOffset;
  
    var startColor = [250, 253, 93]; // RGB value of the starting color (blue)
    var endColor = [141, 196, 235]; // RGB value of the ending color (red)
  
    // Calculate the scroll progress
    var scrollProgress = scrollPosition / sectionHeight;
  
    // Interpolate the RGB values based on the scroll progress
    var interpolatedColor = interpolateColors(startColor, endColor, scrollProgress);
  
    // Set the background color of the section
    section.style.backgroundColor = 'rgb(' + interpolatedColor.join(',') + ')';
  });
  
  // Function to interpolate between two colors
  function interpolateColors(startColor, endColor, progress) {
    var r = Math.round(startColor[0] + (endColor[0] - startColor[0]) * progress);
    var g = Math.round(startColor[1] + (endColor[1] - startColor[1]) * progress);
    var b = Math.round(startColor[2] + (endColor[2] - startColor[2]) * progress);
  
    return [r, g, b];
  }
  

  function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScroll() {
  var elements = document.querySelectorAll('.fade-in-up');
  elements.forEach(function(element) {
    if (isElementInViewport(element)) {
      element.classList.add('fade-in-up-visible');
    }
  });
}

// Initial check on page load
window.addEventListener('load', handleScroll);
// Check on scroll
window.addEventListener('scroll', handleScroll);
