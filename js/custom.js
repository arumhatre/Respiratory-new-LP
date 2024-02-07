var sections = $('section'),
nav = $('nav'),
nav_height = nav.outerHeight();

// Function to handle highlighting based on scroll position
function highlightNav() {
  var cur_pos = $(window).scrollTop();
  sections.each(function () {
    var top = $(this).offset().top - nav_height - 20,
        bottom = top + $(this).outerHeight();
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');
      $(this).addClass('active');
      nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
    }
  });
}

// Trigger the highlightNav function on page load
$(document).ready(function() {
  highlightNav();
});

// Trigger the highlightNav function on scroll
$(window).on('scroll', function () {
  highlightNav();
});

// // Smooth scrolling when clicking on navigation links
// nav.find('a').on('click', function (e) {
//   e.preventDefault();
//   var $el = $(this),
//       id = $el.attr('href');
  
//   $('html, body').animate({
//     scrollTop: $(id).offset().top - nav_height
//   }, 500);

//   // Manually trigger the scroll event to update the active class
//   $(window).trigger('scroll');
// });

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
});

$(document).ready(function(){
    $(".navLink").click(function(){
        $('.mobileNav').removeClass("activeMobNav");
        $('.hamburger').removeClass("is-active");
    });
    $("#visitpopup, #bookappCTA").click(function(){
        $('.bookappointmentSec').addClass("activepopup");
    });
    $("#closepopup").click(function(){
        $('.bookappointmentSec').removeClass("activepopup");
    });
});

$(document).ready(function(){
    $(".hamburger").click(function(){
        $(this).toggleClass("is-active");
        $('.mobileNav').toggleClass("activeMobNav");
    });
});

var btn = $('#button');
btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
});


$(document).ready(function() {
    $(window).scroll(function() {
        if ($(document).scrollTop() > 50) {
            $(".headerTop").addClass("hideTop");
            $("header").addClass("headerSmall");
        } else {
            $(".headerTop").removeClass("hideTop");
            $("header").removeClass("headerSmall");
        }
    });
});

var visitCTA = bodymovin.loadAnimation({
    container: document.getElementById("visitCTA"),
    path: "js/json/visit-cta.json", // Required
    renderer: "svg", // or 'canvas', 'html'
    loop: true,
    autoplay: true,
});

// var treatmentOne = bodymovin.loadAnimation({
//     container: document.getElementById("treatmentOne"),
//     path: "js/json/treatmentOne.json", // Required
//     renderer: "svg", // or 'canvas', 'html'
//     loop: true,
//     autoplay: true,
// });

// var treatmentTwo = bodymovin.loadAnimation({
//     container: document.getElementById("treatmentTwo"),
//     path: "js/json/treatmentTwo.json", // Required
//     renderer: "svg", // or 'canvas', 'html'
//     loop: true,
//     autoplay: true,
// });

var treatmentThree = bodymovin.loadAnimation({
    container: document.getElementById("treatmentThree"),
    path: "js/json/treatmentThree.json", // Required
    renderer: "svg", // or 'canvas', 'html'
    loop: true,
    autoplay: true,
});

var treatmentFour = bodymovin.loadAnimation({
    container: document.getElementById("treatmentFour"),
    path: "js/json/treatmentFour.json", // Required
    renderer: "svg", // or 'canvas', 'html'
    loop: true,
    autoplay: true,
});

var treatmentFive = bodymovin.loadAnimation({
    container: document.getElementById("treatmentFive"),
    path: "js/json/treatmentFive.json", // Required
    renderer: "svg", // or 'canvas', 'html'
    loop: true,
    autoplay: true,
});

var treatmentSix = bodymovin.loadAnimation({
    container: document.getElementById("treatmentSix"),
    path: "js/json/treatmentSix.json", // Required
    renderer: "svg", // or 'canvas', 'html'
    loop: true,
    autoplay: true,
});

$(document).ready(function () {
    //toggle the component with class accordion_body
    $(".accordion_head").click(function () {
        if ($('.accordion_body').is(':visible')) {
            $(".accordion_body").slideUp(300);
            $(".plusminus").text('+');
            $(".accordion_head").removeClass('is-active');
        }
        if ($(this).next(".accordion_body").is(':visible')) {
            $(this).next(".accordion_body").slideUp(300);
            $(this).children(".plusminus").text('+');
            $(".accordion_head").removeClass('is-active');
        } else {
            $(this).next(".accordion_body").slideDown(300);
            $(this).children(".plusminus").text('-');
            $(this).addClass('is-active');
        }
    });
});

$('.debunkingSlider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
});

$('.debunkingSliderMob').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 2.2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
        {
            breakpoint: 660,
            settings: {
                slidesToShow: 1.3,
                slidesToScroll: 1,
            }
        },
    ]
});

if ($(window).width() < 720) {
$('.keyreasonsContainer').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1.1,
    slidesToScroll: 1,
    arrows: false,
});
}

$('.googlereviewSlider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 2.3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:$(".imggoogleprev"),
    nextArrow:$(".imggooglenext"),
    responsive: [
        {
            breakpoint: 1030,
            settings: {
                slidesToShow: 1.1,
                slidesToScroll: 1,
                arrows: false,
            }
        },
    ]
});

$('.celebritiesSlider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:$(".imgcelebritiesprev"),
    nextArrow:$(".imgcelebritiesnext"),
    responsive: [
        {
            breakpoint: 1030,
            settings: {
                slidesToShow: 2.3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 760,
            settings: {
                slidesToShow: 1.3,
                slidesToScroll: 1,
                arrows: false,
            }
        },
    ]
});

$('.hittreatmentSlider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:$(".imghittreatprev"),
    nextArrow:$(".imghittreatnext"),
    responsive: [
        {
            breakpoint: 1030,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 760,
            settings: {
                slidesToShow: 1.2,
                slidesToScroll: 1,
                arrows: false,
            }
        },
    ]
});

$('.doctorsSlider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4.4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:$(".imgdoctorsprev"),
    nextArrow:$(".imgdoctorsnext"),
    responsive: [
        {
            breakpoint: 1030,
            settings: {
                slidesToShow: 2.3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 760,
            settings: {
                slidesToShow: 1.3,
                slidesToScroll: 1,
                arrows: false,
            }
        },
    ]
});

$('.resultsSlider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:$(".imgresultsprev"),
    nextArrow:$(".imgresultsnext"),
    responsive: [
        {
            breakpoint: 1030,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 760,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
    ]
});

if ($(window).width() > 720) {
    $('.tagsSlider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: false,
    });
}

$('.filter-bttn').on('click', function() {
    filter(this);
});

const filter = (element) => {
    let target = element.dataset.filtertarget;
    resetFilterButtons();
    setFilterButtonActive(target);
    $('.resultsSlider').slick('slickUnfilter');
    if (target !== "all") {
        $('.resultsSlider').slick('slickFilter', `.${target}`);
    }
}; 

const resetFilterButtons = () => {
    $('.filter-bttn').removeClass('active');
};

const setFilterButtonActive = (target) => {
    console.log(target);
    $(`[data-filtertarget=${target}]`).addClass('active');
};

var a = 0;
$(window).scroll(function () {
    var oTop = $("#counter-box").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $(".counter").each(function () {
            var $this = $(this),
                countTo = $this.attr("data-number");
            $({
                countNum: $this.text()
            }).animate(
                {
                    countNum: countTo
                },
                {
                    duration: 2500,
                    easing: "swing",
                    step: function () {
                        //$this.text(Math.ceil(this.countNum));
                        $this.text(
                            Math.ceil(this.countNum).toLocaleString("en")
                        );
                    },
                    complete: function () {
                        $this.text(
                            Math.ceil(this.countNum).toLocaleString("en")
                        );
                        //alert('finished');
                    }
                }
            );
        });
        a = 1;
    }
});

// On scroll JS
$.fn.isInViewport = function () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
  
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
  
    return elementBottom > viewportTop && elementTop < viewportBottom;
};
$(window).on('resize scroll', function() {
    if($('.treatedSec').length){
        if ($('.treatedSec').isInViewport()) {
        setTimeout(() => {
            $('.treated').addClass('activeFace');
        }, 500);
        }
    }
    if($('.howworkSec').length){
        if ($('.howworkSec').isInViewport()) {
            setTimeout(() => {
                $('.stickyCtas').addClass('hideCTA');
            }, 500);
        }
        else{
            setTimeout(() => {
                $('.stickyCtas').removeClass('hideCTA');
            }, 500);
        }
    }
    if($('.consultdocSec').length){
        if ($('.consultdocSec').isInViewport()) {
            setTimeout(() => {
                $('.stickyCtas').css('display','none');
            }, 500);
        }
        else{
            setTimeout(() => {
                $('.stickyCtas').css('display','block');
            }, 500);
        }
    }
    if($('.faqsSec').length){
        if ($(window).width() > 720) {
            if ($('.faqsSec').isInViewport()) {
                setTimeout(() => {
                    $('.stickyContent').css('display','none');
                }, 500);
            }
            else{
                setTimeout(() => {
                    $('.stickyContent').css('display','block');
                }, 500);
            }
        }
    }
});

var popup = $('.hairtestPop');
$(window).scroll(function(){  
    if($(window).scrollTop() > $(document).height()/1.2){
        popup.addClass('hairtestActive'); 
    };
    $( '.closeIcon' ).click(function() {
        popup.css('display', 'none');
    });
});

$(document).ready(function(){
    $("#hairtestCTA").click(function(){
        $('.hairtestFormBox').addClass("activeFormBox");
        $('.hairtestPop').css('display', 'none');
    });
    $(".haritestClose").click(function(){
        $('.hairtestFormBox').removeClass("activeFormBox");
    });
});

const container = document.querySelector('.container');
document.querySelector('.slider').addEventListener('input', (e) => {
  container.style.setProperty('--position', `${e.target.value}%`);
})

$(".animBtn").click(function (e) {
    // alert($(this).data('anim'));
    var animid = $(this).data('anim');
    $('.animBtn').removeClass('showHover');
    $(this).addClass('showHover');
    $(".hideAnim").removeClass('showAnim');
    $("." + animid).addClass('showAnim');
});

$('.flip-card-front').click(function() {
    $('.flip-card-front').parent().removeClass('Fliphover');
    $(this).parent().addClass('Fliphover');
});
$('.flipArrowRev').click( function() {
    $('.flip-card-inner').removeClass('Fliphover');
});

// Hair Test Form
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$(".next").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	next_fs = $(this).parent().next();
	
	//activate next step on progressbar using the index of next_fs
	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
	
	//show the next fieldset
	next_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale current_fs down to 80%
			scale = 1 - (1 - now) * 0.2;
			//2. bring next_fs from the right(50%)
			left = (now * 50)+"%";
			//3. increase opacity of next_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({'transform': 'scale('+scale+')'});
			next_fs.css({'left': left, 'opacity': opacity});
		}, 
		duration: 500, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeOutQuint'
	});
});

$(".previous").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	previous_fs = $(this).parent().prev();
	
	//de-activate current step on progressbar
	$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
	
	//show the previous fieldset
	previous_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale previous_fs from 80% to 100%
			scale = 0.8 + (1 - now) * 0.2;
			//2. take current_fs to the right(50%) - from 0%
			left = ((1-now) * 50)+"%";
			//3. increase opacity of previous_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({'left': left});
			previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
		}, 
		duration: 500, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeOutQuint'
	});
});

$(".submit").click(function(){
	return false;
})

const rangeSlider = document.getElementById('customRange');
const selectedValue = document.getElementById('selectedValue');
rangeSlider.addEventListener('input', () => {
    selectedValue.textContent = rangeSlider.value;
});
  