// Fullpage Setting

new fullpage('#fullpage', {
	responsive: true,
  scrollingSpeed: 600,
  navigation: true,
  scrollOverflow: true,
});

// Fullpage methods

fullpage_api.setMouseWheelScrolling(true);
fullpage_api.setAllowScrolling(true);

// Owl Carousel

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    nav: false,
    items: 4,
    dots: false,
    responsive : {
      0 : {
        items : 2,
        loop: true,
        autoplay: true,
        autoplayTimeout: 1500,
        autoplayHoverPause: true,
        dots: true,
      },
      500: {
        items : 3,
      },
      652 : {
        items : 4,
      }
  }
  });
});


// Engine Description fuelSystem Hover Animation

const engine = document.querySelector('.engine-container');
const fuelSystem = document.querySelector('.fuel-system');

engine.onmouseenter = function() {
  fuelSystem.style.transition = '1s';
  fuelSystem.style.visibility = 'visible';
  fuelSystem.style.opacity = '1';
  fuelSystem.style.transform = 'translateY(0)';
}

engine.onmouseleave = function() {
  fuelSystem.style.transition = '0.2s';
  fuelSystem.style.visibility = 'hidden';
  fuelSystem.style.opacity = '0';
  fuelSystem.style.transform = 'translateY(-200px)';
}

// EngineDescriptionContainer Hover Animation

const engineDescription = document.querySelectorAll('.engine__description-container');

engineDescription.forEach(function(elem) {
  elem.onmouseenter = function() {
    engineDescription.forEach((elem2) => {
      elem2.style.transform = 'scale(0)';
    })
    elem.style.transform = 'scale(1)';
  }

  elem.onmouseleave = function() {
    engineDescription.forEach((elem2) => {
      elem2.style.transform = 'scale(1)';
    })
  }
})
