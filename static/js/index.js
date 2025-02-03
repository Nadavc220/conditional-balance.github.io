window.HELP_IMPROVE_VIDEOJS = false;

// var INTERP_BASE = "./static/interpolation/stacked";
var INTERP_BASE0 = "./static/interpolation_small/camel_series";
var INTERP_BASE1 = "./static/interpolation_small/monalisa_series";
var NUM_INTERP_FRAMES0 = 67;
var NUM_INTERP_FRAMES1 = 51;

var interp_images0 = [];
var interp_images1 = [];
function preloadInterpolationImages(interp_images, interp_base) {
  for (var i = 0; i < NUM_INTERP_FRAMES0; i++) {
    var path = interp_base + '/' + String(i).padStart(6, '0') + '.png';
    // var path = INTERP_BASE + '/' + String(i).padStart(6, '0') + '.jpg';
    interp_images[i] = new Image();
    interp_images[i].src = path;
  }
}

function setInterpolationImage0(i, id) {
  var image = interp_images0[i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $(id).empty().append(image);
}

function setInterpolationImage1(i, id) {
  var image = interp_images1[i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $(id).empty().append(image);
}


$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

    });

    var options = {
			slidesToScroll: 1,
			slidesToShow: 1,
			loop: false,
			infinite: true,
			autoplay: false,
			autoplaySpeed: 3000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);

    // Loop on each carousel initialized
    for(var i = 0; i < carousels.length; i++) {
    	// Add listener to  event
    	carousels[i].on('before:show', state => {
    		console.log(state);
    	});
    }

    // Access to bulmaCarousel instance of an element
    var element = document.querySelector('#my-element');
    if (element && element.bulmaCarousel) {
    	// bulmaCarousel instance is available as element.bulmaCarousel
    	element.bulmaCarousel.on('before-show', function(state) {
    		console.log(state);
    	});
    }

    /*var player = document.getElementById('interpolation-video');
    player.addEventListener('loadedmetadata', function() {
      $('#interpolation-slider').on('input', function(event) {
        console.log(this.value, player.duration);
        player.currentTime = player.duration / 100 * this.value;
      })
    }, false);*/
    preloadInterpolationImages(interp_images0, INTERP_BASE0);
    preloadInterpolationImages(interp_images1, INTERP_BASE1);

    // Style Balancing
    $('#interpolation-slider0').on('input', function(event) {
      setInterpolationImage0(this.value, "#interpolation-image-wrapper0");
    });
    setInterpolationImage0(30, "#interpolation-image-wrapper0");
    $('#interpolation-slider0').prop('max', NUM_INTERP_FRAMES0 - 1);

    // Geometric Interpolation
    $('#interpolation-slider1').on('input', function(event) {
      setInterpolationImage1(this.value, "#interpolation-image-wrapper1");
    });
    setInterpolationImage1(0, "#interpolation-image-wrapper1");
    $('#interpolation-slider1').prop('max', NUM_INTERP_FRAMES1 - 1);



    bulmaSlider.attach();

})
