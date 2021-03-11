// Fullpage Setting

new fullpage('#fullpage', {
  responsive: true,
  scrollingSpeed: 600,
  anchors: ['header','products','services','best-partner','projects', 'certificates', 'feedback', 'our-partners', 'form', 'footer'],
  menu: '#menu',
  css3: true,
  scrollOverflow: true,
  scrollOverflowOptions: {
    click:false,	
    preventDefaultException: {tagName: /.*/}
  },
});

// Fullpage methods

fullpage_api.setMouseWheelScrolling(true);
fullpage_api.setAllowScrolling(true);

// Owl Carousel

$(document).ready(function () {
  $(".header__body-row").owlCarousel({
    nav: false,
    items: 4,
    dots: false,
    responsive: {
      0: {
        items: 2,
        loop: true,
        autoplay: true,
        autoplayTimeout: 1500,
        autoplayHoverPause: true,
        dots: true,
      },
      500: {
        items: 3,
      },
      652: {
        items: 4,
      }
    }
  });
});

var projectSlider = $(".projects__slider");

projectSlider.owlCarousel({
  nav: false,
  items: 1,
  dots: false,
});

$('.slider__btn_next').click(function () {
  projectSlider.trigger('next.owl.carousel', [500]);
})

$('.slider__btn_prev').click(function () {
  projectSlider.trigger('prev.owl.carousel', [500]);
})

var feedbackSlider = $(".feedback__slider");
var commentSlider = $(".comment-slider");

feedbackSlider.owlCarousel({
  nav: false,
  items: 1,
  dots: false,
  touchDrag: false
});

commentSlider.owlCarousel({
  nav: false,
  items: 1,
  dots: false,
  touchDrag: false
});

$('.feedback__slider_next').click(function () {
  feedbackSlider.trigger('next.owl.carousel', [500]);
  commentSlider.trigger('next.owl.carousel', [500]);
})

$('.feedback__slider_prev').click(function () {
  feedbackSlider.trigger('prev.owl.carousel', [500]);
  commentSlider.trigger('prev.owl.carousel', [500]);
})

// Owl Carousel certidicates

var certificatesSlider = $(".certificates__all-certificate");

certificatesSlider.owlCarousel({
  nav: false,
  items: 3,
  dots: true,
  responsive: {
    0: {
      items: 3,
    },
    500: {
      items: 2,
    },
    1360: {
      items: 3,
      dots: true,
    }
  }
});


// Engine Description fuelSystem Hover Animation

const engine = document.querySelector('.engine-container');
const fuelSystem = document.querySelector('.fuel-system');

engine.onmouseenter = function () {
  fuelSystem.style.transition = '1s';
  fuelSystem.style.visibility = 'visible';
  fuelSystem.style.opacity = '1';
  fuelSystem.style.transform = 'translateY(0)';
}

engine.onmouseleave = function () {
  fuelSystem.style.transition = '0.2s';
  fuelSystem.style.visibility = 'hidden';
  fuelSystem.style.opacity = '0';
  fuelSystem.style.transform = 'translateY(-200px)';
}

// EngineDescriptionContainer Hover Animation

const engineDescription = document.querySelectorAll('.engine__description-container');

engineDescription.forEach(function (elem) {
  elem.onmouseenter = function () {
    engineDescription.forEach((elem2) => {
      elem2.style.transform = 'scale(0)';
    })
    elem.style.transform = 'scale(1)';
  }

  elem.onmouseleave = function () {
    engineDescription.forEach((elem2) => {
      elem2.style.transform = 'scale(1)';
    })
  }
})

// Validation Form

const form = document.querySelector('.form');

function formValid(userData) {
  userData.classList.add('is-valid');
  userData.classList.remove('is-invalid');
}

function formInvalid(userData) {
  userData.classList.add('is-invalid');
  userData.classList.remove('is-valid');
}

function formNameValidation() {
  if (userName.value === '') {
    formInvalid(userName)
    nameFeedback.textContent = 'Введите ваше имя';
  } else if (userName.value.length < 2) {
    formInvalid(userName)
    nameFeedback.textContent = 'Введите не менее 2 символов';
  } else if (!/[а-я]/ig.test(userName.value)) {
    formInvalid(userName)
    nameFeedback.textContent = 'Не корректное имя';
  } else {
    formValid(userName)
  }
}

function formEmailValidation() {
  if (userEmail.value === '') {
    formInvalid(userEmail)
    emailFeedback.textContent = 'Введите вашу почту';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail.value)) {
    formInvalid(userEmail)
    emailFeedback.textContent = 'Не корректный почта';
  } else {
    formValid(userEmail)
  }
}

function formPhoneValidation() {
  if (userPhone.value === '') {
    formInvalid(userPhone)
    phoneFeedback.textContent = 'Введите ваш телефон';
  } else if (!/^[\s()+-]*([0-9][\s()+-]*){6,20}$/.test(userPhone.value)) {
    formInvalid(userPhone)
    phoneFeedback.textContent = 'Не корректный телефон';
  } else {
    formValid(userPhone)
  }
}

form.addEventListener('submit', function (event) {
  event.preventDefault()
  const userName = document.querySelector('#userName');
  const userEmail = document.querySelector('#userEmail');
  const userPhone = document.querySelector('#userPhone');
  const agree = document.querySelector('#agree');
  const nameFeedback = document.querySelector('#nameFeedback');
  const emailFeedback = document.querySelector('#emailFeedback');
  const phoneFeedback = document.querySelector('#phoneFeedback');

  formNameValidation()

  formEmailValidation()

  formPhoneValidation()

  if (!agree.checked) {
    formInvalid(agree)
  } else {
    formValid(agree)
  }

  if (userName.value === '' || userEmail.value === '' || userPhone.value === '' || !agree.checked || userName.value.length < 2 || !/[а-я]/ig.test(userName.value) || !/^[\s()+-]*([0-9][\s()+-]*){6,20}$/.test(userPhone.value) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail.value)) {
    return false
  }

  console.log('is-validation: ', form)
})