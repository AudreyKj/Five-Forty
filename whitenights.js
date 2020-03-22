var slides = document.querySelectorAll('#slides .slide');
var next = document.getElementById('next');
var previous = document.getElementById("previous");
var currentSlide = 0;

function goToSlide(n) {
  slides[currentSlide].className = 'slide';
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].className = 'slide showing';
}

function previousSlide() {
  goToSlide(currentSlide - 1);
}

function nextSlide() {
  slides[currentSlide].className = 'slide';
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].className = 'slide showing';
}

next.onclick = function() {
  nextSlide();
};

previous.onclick = function() {
  previousSlide();
};

document.addEventListener('keyup', function(event) {
  console.log(event)

  //arrowright
  if (event.key == "ArrowRight") {
    nextSlide();
  }

  //arrowleft
  if (event.key == "ArrowLeft") {
    previousSlide()
  }
})

//disable key arrow scrolling
function showButton() {
  for (currentSlide = 0; currentSlide++; currentSlide < slides.length) {
    if (currentSlide == 0) {
      previous.style.visibility = 'hidden';
    } else {
      previous.style.visibility = 'visible';
    }
  }
}

window.addEventListener("keydown", function(e) {
  // space and arrow keys
  if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
    e.preventDefault();
  }
}, false);

//night/day button
$(document).ready(function() {
  $('.toggle').click(function() {
    $('.toggle').toggleClass('active')
    $('.container-content').toggleClass('night')
    $('.slide').toggleClass('night')
    $('.controls').toggleClass('night')
    $('.controls2').toggleClass('night')
    $('h1.whitenights').toggleClass('night')
    $('p.whitenights_text').toggleClass('night')
    $('a.previous').toggleClass('night')
    $('a.home').toggleClass('night')
    $('a.next').toggleClass('night')
  })
})