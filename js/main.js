// Namespace for OttoYiu.com
var OY = {};

OY.Main = (function($) {
	"use strict";
	var config = {},
	init = function(options) {
		var defaults = {
			linkSelector : ".link",
			$nav : $("nav"),
			$navToggle: $("#profile-pic")
		};
		$.extend(true, config, defaults, options);
		
		onDomReady();
		$(window).load(function() {
			onWindowReady();
		});
	},
	onDomReady = function() {
			// mimic links
			$(config.linkSelector).click(function() {
				var href = $(this).data("link");
				if (href != undefined) {
					window.open(href,'_blank');
				}
			});
			
			// nav toggler
			config.$navToggle.click(function() {
				config.$nav.toggle("fast");
			});
	
			// smooth scrolling
		  $('a[href*=#]:not([href=#])').click(function() {
				if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
					var target = $(this.hash);
					target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
					if (target.length) {
						$('html,body').animate({
							scrollTop: target.offset().top
						}, 1000);
						return false;
					}
				}
			});
	},
	onWindowReady = function() {
	};
	
	return {
		init: init
	};

})(jQuery);