
window.addEventListener('scroll', function() {
    var section = document.querySelector('.color-change-section');
    var sectionHeight = section.offsetHeight;
    var scrollPosition = window.pageYOffset;
  
    var startColor = [237, 137, 111];
    var endColor = [141, 196, 235]; 
  
    
    var scrollProgress = scrollPosition / sectionHeight;
  

    var interpolatedColor = interpolateColors(startColor, endColor, scrollProgress);
  

    section.style.backgroundColor = 'rgb(' + interpolatedColor.join(',') + ')';
  });
  

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
