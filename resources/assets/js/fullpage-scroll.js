// Debounce Resizing
    (function($,sr){
      var debounce = function (func, threshold, execAsap) {
          var timeout;

          return function debounced () {
              var obj = this, args = arguments;
              function delayed () {
                  if (!execAsap)
                      func.apply(obj, args);
                  timeout = null;
              };

              if (timeout)
                  clearTimeout(timeout);
              else if (execAsap)
                  func.apply(obj, args);

              timeout = setTimeout(delayed, threshold || 100);
          };
      }
        // smartresize
        jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

    })(jQuery,'smartresize');

// Mobile
// function mobileFullPage() {
    $('#fullpage').fullpage({
        anchors:['overview', 'students', 'education', 'employment', 'organizations', 'accountability', 'locations', 'updates'],
        menu: '#menu',
        css3:true,
        navigation: true,
        navigationPosition: 'left',
        animateAnchor: false,
        navigationTooltips: ['Overview', 'Students', 'Education', 'Employment', 'Organizations', 'Accountability', 'Locations', 'Updates'],
        responsiveWidth: 10000,
        responsiveHeight: 10000,
        scrollingSpeed: 1000,
        touchSensitivity: 10000000,
        autoScrolling: true,

        afterRender: function(){
            var pluginContainer = $(this);
            $(".fp-next").addClass("visible");

            // Student Carousel
        	function careSlick() {
        		$('.js-slick-carousel').slick({
        			adaptiveHeight: true,
        			dots: true,
        			slidesToShow: 1,
        			mobileFirst: true,
        	        slidesToScroll: 1,
        	        responsive: [
        	            {
        	                breakpoint: 480,
        	                settings: 'unslick'
        	            }
        	        ]
        		});
        	};

            careSlick();

        	$(window).smartresize(function(){
        	    careSlick();
        	});
        },

        afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex) {
            var loadedSlide = $(this);

            if(anchorLink == 'students' && slideIndex == 1){
                $(".fp-next").removeClass("visible");
                $(".fp-prev").addClass("visible");
            } else if (anchorLink == 'students' && slideIndex == 0){
                $(".fp-prev").removeClass("visible");
                $(".fp-next").addClass("visible");
            } else {
                $(".fp-prev").removeClass("visible");
                $(".fp-next").removeClass("visible");
            }
        }
    });
