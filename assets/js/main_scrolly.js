/*
	Stellar by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$main = $('#main');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Nav.
		var $nav = $('#nav');
		// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			speed: 300,
			alignment: 'center'
		});


	// Nav.

		// Title Bar.
			$(
				'<div id="titleBar">' +
					'<a href="#navPanel" class="toggle"></a>' +
					'<span class="title">' + $('#logo').html() + '</span>' +
				'</div>'
			)
				.appendTo($body);


		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

				var $mainButton = $('#mainButton');
				

				if ( $nav.length > 0) {

					// Shrink effect.
						$main
							.scrollex({
								mode: 'top',
								enter: function() {
									$nav.addClass('alt');
								},
								leave: function() {
									$nav.removeClass('alt');
								},
							});
		
					
						var $nav_a = $body.find('a');
							$nav_a
							.scrolly({
								speed: 1000,
								offset: function() { return $nav.height() + 40 ; }
							})
							.on('click', function() {
		
								var $this = $(this);
		
								// External link? Bail.
									if ($this.attr('href').charAt(0) != '#')
										return;
		
								// Deactivate all links.
									$nav_a
										.removeClass('active')
										.removeClass('active-locked');
		
								// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
									$this
										.addClass('active')
										.addClass('active-locked');
							})
							
						}

	// Scrolly.
		$('.scrolly').scrolly({
			speed: 1000
		});

})(jQuery);