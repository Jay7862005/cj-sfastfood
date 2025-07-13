// ========== DOM Ready ==========
document.addEventListener("DOMContentLoaded", function() {

  // ========== Isotope (Menu Filter) ==========
  // This uses jQuery, so it needs to be inside a jQuery ready function.
  $(function() {
    var $grid = $(".grid").isotope({
      itemSelector: ".all",
      percentPosition: false,
      masonry: {
        columnWidth: ".all"
      }
    });

    $('.filters_menu li').click(function() {
      $('.filters_menu li').removeClass('active');
      $(this).addClass('active');
      var data = $(this).attr('data-filter');
      $grid.isotope({ filter: data });
    });

    // ========== Nice Select ==========
    // This also uses jQuery.
    $('select').niceSelect();
  
    // ========== Owl Carousel (Client Testimonials) ==========
    // This also uses jQuery.
    $(".client_owl-carousel").owlCarousel({
      loop: true,
      margin: 20,
      dots: false,
      nav: true,
      autoplay: true,
      autoplayHoverPause: true,
      navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
      ],
      responsive: {
        0: { items: 1 },
        768: { items: 2 },
        1000: { items: 2 }
      }
    });
  });

  // ========== NEW: Fade-in Animation on Scroll ==========
  // This is a more modern, vanilla JS version.
  const fadeInElements = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.1 });

  fadeInElements.forEach(el => {
    observer.observe(el);
  });

  // ========== NEW: Dark Mode Toggle ==========
  const toggleButton = document.getElementById("toggleDarkMode");
  const body = document.body;

  if (toggleButton) {
    // Apply saved theme on load
    if (localStorage.getItem("theme") === "dark") {
      body.classList.add("dark-mode");
      toggleButton.innerText = "☀️ Light Mode";
    } else {
      toggleButton.innerText = "🌙 Dark Mode";
    }

    toggleButton.addEventListener("click", function() {
      body.classList.toggle("dark-mode");
      if (body.classList.contains("dark-mode")) {
        toggleButton.innerText = "☀️ Light Mode";
        localStorage.setItem("theme", "dark");
      } else {
        toggleButton.innerText = "🌙 Dark Mode";
        localStorage.setItem("theme", "light");
      }
    });
  }

  // ========== Auto Year Update ==========
  const currentYear = new Date().getFullYear();
  const displayYear = document.querySelector("#displayYear");
  if (displayYear) {
      displayYear.innerHTML = currentYear;
  }
});

// ========== Google Map ==========
// This function is called by the Google Maps script, so it stays outside.
function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(35.72857, 139.72172),
    zoom: 18,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
  var marker = new google.maps.Marker({
    position: mapProp.center,
    map: map,
    title: "C.J's Fast Food"
  });
}
// ========== WELCOME POPUP SCRIPT (CORRECTED) ==========

document.addEventListener('DOMContentLoaded', function() {
  const popupOverlay = document.getElementById('welcomePopupOverlay');
  const closeBtn = document.getElementById('closePopupBtn');
  const viewMenuBtn = document.querySelector('.popup-button');

  if (!popupOverlay) {
    console.error("Popup overlay not found!");
    return;
  }

  // Function to show the popup
  function showPopup() {
    // First, make the element part of the layout
    popupOverlay.style.display = 'flex'; 
    
    // Next, trigger the fade-in animation by removing the class that controls opacity
    // A tiny delay ensures the browser registers the 'display' change before the transition starts.
    setTimeout(() => {
        popupOverlay.classList.remove('hidden');
    }, 10); 
  }

  // Function to hide the popup
  function hidePopup() {
    // Start the fade-out animation
    popupOverlay.classList.add('hidden');
    
    // After the animation finishes (300ms), set display to none so it doesn't block clicks
    setTimeout(() => {
        popupOverlay.style.display = 'none';
    }, 300); 
  }

  // Show the popup 2 seconds after the page loads
  setTimeout(showPopup, 2000);

  // Event listeners to close the popup
  if (closeBtn) {
    closeBtn.addEventListener('click', hidePopup);
  }
  if (viewMenuBtn) {
    // This will now close the popup when the user clicks the menu button
    viewMenuBtn.addEventListener('click', hidePopup);
  }
  popupOverlay.addEventListener('click', function(event) {
    // Close only if the dark overlay itself is clicked
    if (event.target === popupOverlay) {
      hidePopup();
    }
  });
});
