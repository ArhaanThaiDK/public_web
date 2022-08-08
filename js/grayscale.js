(function($) {																									
	"use strict"; // Start of use strict																								
																									
	$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {																								
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {																							
			var target = $(this.hash);																						
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');																						
			if (target.length) {																						
				$('html, body').animate({																					
					scrollTop: (target.offset().top - 70)																				
				}, 1000, "easeInOutExpo");																					
				return false;																					
			}																						
		}																							
	});																								
																									
// Closes responsive menu when a scroll trigger link is clicked																									
	$('.js-scroll-trigger').click(function() {																								
		$('.navbar-collapse').collapse('hide');																							
	});																								
																									
//Popup on Load (REMOVE IF YOU WANT TO REMOVE POPUP ON LOAD)																									
	$(function () {																								
		$('#popup').modal('toggle');																							
	});																								
																									
// Activate scrollspy to add active class to navbar items on scroll																									
	$('body').scrollspy({																								
		target: '#mainNav',																							
		offset: 100																							
	});																								
																									
// Collapse Navbar																									
	var navbarCollapse = function() {																								
		if ($("#mainNav").offset().top > 100) {																							
			$("#mainNav").addClass("navbar-shrink");																						
		} else {																							
			$("#mainNav").removeClass("navbar-shrink");																						
		}																							
	};																								
																									
// Collapse now if page is not at top																									
	navbarCollapse();																								
																									
// Collapse the navbar when page is scrolled																									
	$(window).scroll(navbarCollapse);																								
																									
// highlight current day on opening hours																									
	$(document).ready(function() {																								
		$('.opening-hours li').eq(new Date().getDay()).addClass('today');																							
	});																								
																									
})(jQuery); // End of use strict																									
																									
																									
																									