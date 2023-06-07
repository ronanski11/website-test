// AOS
AOS.init();

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission
// ...

// Map
function initMap() {
    var location = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('map'), {zoom: 4, center: location});
    var marker = new google.maps.Marker({position: location, map: map});
}

// FAB
document.getElementById('fab').addEventListener('click', function() {
    window.location.href = 'tel:+1234567890';
});
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector('.navbar').classList.toggle('dark-mode');
    document.getElementById('dark-mode-toggle').classList.toggle('btn-light');
    document.getElementById('dark-mode-toggle').classList.toggle('btn-dark');
  }
  
  document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);
  