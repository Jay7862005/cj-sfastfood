// ========== Auto Year Update ==========
function getYear() {
  const currentYear = new Date().getFullYear();
  document.querySelector("#displayYear").innerHTML = currentYear;
}
getYear();

// ========== DOM Ready ==========
$(function () {
  // ========== Isotope (Menu Filter) ==========
  var $grid = $(".grid").isotope({
    itemSelector: ".all",
    percentPosition: false,
    masonry: {
      columnWidth: ".all"
    }
  });

  $('.filters_menu li').click(function () {
    $('.filters_menu li').removeClass('active');
    $(this).addClass('active');

    var data = $(this).attr('data-filter');
    $grid.isotope({ filter: data });
  });

  // ========== Nice Select ==========
  $('select').niceSelect();

  // ========== Welcome Modal ==========
  $('#welcomeModal').modal('show');

  // ========== Owl Carousel (Client Testimonials) ==========
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
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1000: {
        items: 2
      }
    }
  });

  // ========== Fade-in Animation on Scroll ==========
  $(window).on('scroll', function () {
    $('.fade-in').each(function () {
      if ($(this).offset().top < $(window).scrollTop() + $(window).height() - 50) {
        $(this).addClass('show');
      }
    });
  }).trigger('scroll');
});

// ========== Google Map ==========
function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(35.728570545307896, 139.7217210283922),
    zoom: 18,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
  var marker = new google.maps.Marker({
    position: mapProp.center,
    map: map,
    title: "C.J's Fast Food"
  });
}

// ========== Dark Mode Toggle ==========
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleDarkMode");
  const body = document.body;

  if (!toggleButton) return;

  // Apply saved theme on load
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    toggleButton.innerText = "☀️ Light Mode";
  } else {
    toggleButton.innerText = "🌙 Dark Mode";
  }

  toggleButton.addEventListener("click", function () {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
      toggleButton.innerText = "☀️ Light Mode";
      localStorage.setItem("theme", "dark");
    } else {
      toggleButton.innerText = "🌙 Dark Mode";
      localStorage.setItem("theme", "light");
    }
  });
});
