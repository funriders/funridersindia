(function ($) {
    "use strict";
	
	var $window = $(window); 
	var $body = $('body'); 

	/* Preloader Effect */
	$window.on('load', function(){
		$(".preloader").fadeOut(600);
	});

	/* Sticky Header */	
	if($('.active-sticky-header').length){
		$window.on('resize', function(){
			setHeaderHeight();
		});

		function setHeaderHeight(){
	 		$("header.main-header").css("height", $('header .header-sticky').outerHeight());
		}	
	
		$window.on("scroll", function() {
			var fromTop = $(window).scrollTop();
			setHeaderHeight();
			var headerHeight = $('header .header-sticky').outerHeight()
			$("header .header-sticky").toggleClass("hide", (fromTop > headerHeight + 100));
			$("header .header-sticky").toggleClass("active", (fromTop > 600));
		});
	}	
	
	/* Slick Menu JS */
	$('#menu').slicknav({
		label : '',
		prependTo : '.responsive-menu'
	});

	if($("a[href='#top']").length){
		$(document).on("click", "a[href='#top']", function() {
			$("html, body").animate({ scrollTop: 0 }, "slow");
			return false;
		});
	}

	/* testimonial Slider JS */
	if ($('.testimonial-slider-gold').length) {
		const testimonial_slider = new Swiper('.testimonial-slider-gold .swiper', {
			slidesPerView : 1,
			speed: 1000,
			spaceBetween: 30,
			loop: true,
			autoplay: {
				delay: 5000,
			},
			pagination: {
				el: '.testimonial-pagination',
				clickable: true,
			},
			navigation: {
				nextEl: '.testimonial-button-next',
				prevEl: '.testimonial-button-prev',
			},
			breakpoints: {
				768:{
					slidesPerView: 1,
				},
				991:{
					slidesPerView: 1,
				}
			}
		});
	}

	/* testimonial Slider JS */
	if ($('.testimonial-slider-royal').length) {
		const testimonial_slider = new Swiper('.testimonial-slider-royal .swiper', {
			slidesPerView : 1,
			speed: 1000,
			spaceBetween: 30,
			centeredSlides: true,
			loop: true,
			autoplay: {
				delay: 5000,
			},
			pagination: {
				el: '.testimonial-pagination-royal',
				clickable: true,
			},
			navigation: {
				nextEl: '.testimonial-btn-next',
				prevEl: '.testimonial-btn-prev',
			},
			breakpoints: {
				768:{
					slidesPerView: 1,
				},
				991:{
					slidesPerView: 1,
				}
			}
		});
	}

	/* Skill Bar */
	if ($('.skills-progress-bar').length) {
		$('.skills-progress-bar').waypoint(function() {
			$('.skillbar').each(function() {
				$(this).find('.count-bar').animate({
				width:$(this).attr('data-percent')
				},2000);
			});
		},{
			offset: '70%'
		});
	}

	/* Skill Bar Royal */
	if ($('.skills-progress-bar-royal').length) {
		$('.skills-progress-bar-royal').waypoint(function() {
			$('.skillbar-royal').each(function() {
				$(this).find('.count-bar-royal').animate({
				width:$(this).attr('data-percent')
				},2000);
			});
		},{
			offset: '70%'
		});
	}

	/* Youtube Background Video JS */
	if ($('#herovideo').length) {
		var myPlayer = $("#herovideo").YTPlayer();
	}

	/* Init Counter */
	if ($('.counter').length) {
		$('.counter').counterUp({ delay: 6, time: 3000 });
	}

	/* Image Reveal Animation */
	if ($('.reveal').length) {
        gsap.registerPlugin(ScrollTrigger);
        let revealContainers = document.querySelectorAll(".reveal");
        revealContainers.forEach((container) => {
            let image = container.querySelector("img");
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    toggleActions: "play none none none"
                }
            });
            tl.set(container, {
                autoAlpha: 1
            });
            tl.from(container, 1, {
                xPercent: -100,
                ease: Power2.out
            });
            tl.from(image, 1, {
                xPercent: 100,
                scale: 1,
                delay: -1,
                ease: Power2.out
            });
        });
    }

	/* Text Effect Animation */
	if ($('.text-anime-style-1').length) {
		let staggerAmount 	= 0.05,
			translateXValue = 0,
			delayValue 		= 0.5,
		   animatedTextElements = document.querySelectorAll('.text-anime-style-1');
		
		animatedTextElements.forEach((element) => {
			let animationSplitText = new SplitText(element, { type: "chars, words" });
				gsap.from(animationSplitText.words, {
				duration: 1,
				delay: delayValue,
				x: 20,
				autoAlpha: 0,
				stagger: staggerAmount,
				scrollTrigger: { trigger: element, start: "top 85%" },
				});
		});		
	}
	
	if ($('.text-anime-style-2').length) {				
		let	 staggerAmount 		= 0.03,
			 translateXValue	= 20,
			 delayValue 		= 0.1,
			 easeType 			= "power2.out",
			 animatedTextElements = document.querySelectorAll('.text-anime-style-2');
		
		animatedTextElements.forEach((element) => {
			let animationSplitText = new SplitText(element, { type: "chars, words" });
				gsap.from(animationSplitText.chars, {
					duration: 1,
					delay: delayValue,
					x: translateXValue,
					autoAlpha: 0,
					stagger: staggerAmount,
					ease: easeType,
					scrollTrigger: { trigger: element, start: "top 85%"},
				});
		});		
	}
	
	if ($('.text-anime-style-3').length) {		
		let	animatedTextElements = document.querySelectorAll('.text-anime-style-3');
		
		 animatedTextElements.forEach((element) => {
			//Reset if needed
			if (element.animation) {
				element.animation.progress(1).kill();
				element.split.revert();
			}

			element.split = new SplitText(element, {
				type: "lines,words,chars",
				linesClass: "split-line",
			});
			gsap.set(element, { perspective: 400 });

			gsap.set(element.split.chars, {
				opacity: 0,
				x: "50",
			});

			element.animation = gsap.to(element.split.chars, {
				scrollTrigger: { trigger: element,	start: "top 90%" },
				x: "0",
				y: "0",
				rotateX: "0",
				opacity: 1,
				duration: 1,
				ease: Back.easeOut,
				stagger: 0.02,
			});
		});		
	}

	/* Parallaxie js */
	var $parallaxie = $('.parallaxie');
	if($parallaxie.length && ($window.width() > 991))
	{
		if ($window.width() > 768) {
			$parallaxie.parallaxie({
				speed: 0.55,
				offset: 0,
			});
		}
	}

	/* Zoom Gallery screenshot */
	$('.gallery-items').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom',
		image: {
			verticalFit: true,
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
			  return element.find('img');
			}
		}
	});

	/* Contact form validation */
	var $contactform = $("#contactForm");
	$contactform.validator({focus: false}).on("submit", function (event) {
		if (!event.isDefaultPrevented()) {
			event.preventDefault();
			submitForm();
		}
	});

	function submitForm(){
		/* Ajax call to submit form */
		$.ajax({
			type: "POST",
			url: "form-process.php",
			data: $contactform.serialize(),
			success : function(text){
				if (text === "success"){
					formSuccess();
				} else {
					submitMSG(false,text);
				}
			}
		});
	}

	function formSuccess(){
		$contactform[0].reset();
		submitMSG(true, "Message Sent Successfully!")
	}

	function submitMSG(valid, msg){
		if(valid){
			var msgClasses = "h4 text-success";
		} else {
			var msgClasses = "h4 text-danger";
		}
		$("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
	}
	/* Contact form validation end */

	/* Animated Wow Js */	
	new WOW().init();

	/* Popup Video */
	if ($('.popup-video').length) {
		$('.popup-video').magnificPopup({
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: true
		});
	}
	
})(jQuery);

//for "readmore"
function toggleReadMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("readMoreBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read More";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read Less";
        moreText.style.display = "inline";
    }
}

function toggleReadMore() {
    const content = document.querySelector(".read-more-content");
    const btn = document.querySelector(".read-more-btn");

    if (content.style.display === "block") {
        content.style.display = "none";
        btn.textContent = "Read More";
    } else {
        content.style.display = "block";
        btn.textContent = "Read Less";
    }
}
 
        // Pagination functionality
        // window.addEventListener("load", function () {
        //     const ITEMS_PER_PAGE = 9;
        //     const items = document.querySelectorAll(".product-item");
        //     const pagination = document.getElementById("pagination");

        //     if (!items.length || !pagination) return;

        //     const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);
        //     let currentPage = 1;

        //     function showPage(page) {
        //         currentPage = page;
        //         const startIndex = (page - 1) * ITEMS_PER_PAGE;
        //         const endIndex = startIndex + ITEMS_PER_PAGE;

        //         items.forEach((item, index) => {
        //             if (index >= startIndex && index < endIndex) {
        //                 item.style.display = "block";
        //                 // Trigger wow.js animation for visible items
        //                 if (typeof WOW !== 'undefined') {
        //                     new WOW().init();
        //                 }
        //             } else {
        //                 item.style.display = "none";
        //             }
        //         });

        //         updatePagination();
                
        //         // Scroll to top of products section when changing pages
        //         const productsSection = document.querySelector('.container');
        //         if (productsSection) {
        //             window.scrollTo({
        //                 top: productsSection.offsetTop - 100,
        //                 behavior: 'smooth'
        //             });
        //         }
        //     }

        //     function updatePagination() {
        //         let html = '';

        //         // Previous button
        //         if (currentPage > 1) {
        //             html += `<li class="page-item"><a class="page-link" href="#" onclick="showPage(${currentPage - 1}); return false;">Previous</a></li>`;
        //         } else {
        //             html += `<li class="page-item disabled"><a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a></li>`;
        //         }

        //         // Page numbers
        //         const maxVisiblePages = 5;
        //         let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        //         let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

        //         if (endPage - startPage + 1 < maxVisiblePages) {
        //             startPage = Math.max(1, endPage - maxVisiblePages + 1);
        //         }

        //         if (startPage > 1) {
        //             html += `<li class="page-item"><a class="page-link" href="#" onclick="showPage(1); return false;">1</a></li>`;
        //             if (startPage > 2) {
        //                 html += `<li class="page-item disabled"><span class="page-link">...</span></li>`;
        //             }
        //         }

        //         for (let i = startPage; i <= endPage; i++) {
        //             if (i === currentPage) {
        //                 html += `<li class="page-item active"><a class="page-link" href="#">${i}</a></li>`;
        //             } else {
        //                 html += `<li class="page-item"><a class="page-link" href="#" onclick="showPage(${i}); return false;">${i}</a></li>`;
        //             }
        //         }

        //         if (endPage < totalPages) {
        //             if (endPage < totalPages - 1) {
        //                 html += `<li class="page-item disabled"><span class="page-link">...</span></li>`;
        //             }
        //             html += `<li class="page-item"><a class="page-link" href="#" onclick="showPage(${totalPages}); return false;">${totalPages}</a></li>`;
        //         }

        //         // Next button
        //         if (currentPage < totalPages) {
        //             html += `<li class="page-item"><a class="page-link" href="#" onclick="showPage(${currentPage + 1}); return false;">Next</a></li>`;
        //         } else {
        //             html += `<li class="page-item disabled"><a class="page-link" href="#" tabindex="-1" aria-disabled="true">Next</a></li>`;
        //         }

        //         pagination.innerHTML = html;
        //     }

        //     // Make showPage function globally accessible
        //     window.showPage = showPage;
            
        //     // Initialize first page
        //     showPage(1);
            
        //     // Initialize wow.js animations
        //     if (typeof WOW !== 'undefined') {
        //         new WOW().init();
        //     }
        // });
        
        // Read More functionality for about section
        function toggleReadMore() {
            const readMoreContent = document.querySelector('.read-more-content');
            const readMoreBtn = document.querySelector('.read-more-btn');
            
            if (readMoreContent && readMoreBtn) {
                if (readMoreContent.style.display === 'block' || readMoreContent.style.display === '') {
                    readMoreContent.style.display = 'none';
                    readMoreBtn.textContent = 'Read More';
                } else {
                    readMoreContent.style.display = 'block';
                    readMoreBtn.textContent = 'Read Less';
                }
            }
        }
        
        // Initialize read more content as hidden
        document.addEventListener('DOMContentLoaded', function() {
            const readMoreContent = document.querySelector('.read-more-content');
            if (readMoreContent) {
                readMoreContent.style.display = 'none';
            }
        });
    

