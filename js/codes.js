/* ===================================================================
 * Tyndale 1.0.0 - Main JS
 *
 * ------------------------------------------------------------------- */

(function(html) {

    'use strict';


  

  


   /* highlight active menu link on pagescroll
    * ------------------------------------------------------ */
    const ssScrollSpy = function() {

        const sections = document.querySelectorAll('.target-section');

        // Add an event listener listening for scroll
        window.addEventListener('scroll', navHighlight);

        function navHighlight() {
        
            // Get current scroll position
            let scrollY = window.pageYOffset;
        
            // Loop through sections to get height(including padding and border), 
            // top and ID values for each
            sections.forEach(function(current) {
                const sectionHeight = current.offsetHeight;
                const sectionTop = current.offsetTop - 50;
                const sectionId = current.getAttribute('id');
            
               /* If our current scroll position enters the space where current section 
                * on screen is, add .current class to parent element(li) of the thecorresponding 
                * navigation link, else remove it. To know which link is active, we use 
                * sectionId variable we are getting while looping through sections as 
                * an selector
                */
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    document.querySelector('.s-header__nav a[href*=' + sectionId + ']').parentNode.classList.add('current');
                } else {
                    document.querySelector('.s-header__nav a[href*=' + sectionId + ']').parentNode.classList.remove('current');
                }
            });
        }

    }; // end ssScrollSpy


   /* animate elements if in viewport
    * ------------------------------------------------------ */
    const ssAnimateOnScroll = function() {

        const blocks = document.querySelectorAll('[data-animate-block]');

        window.addEventListener('scroll', animateOnScroll);

        function animateOnScroll() {

            let scrollY = window.pageYOffset;

            blocks.forEach(function(current) {

                const viewportHeight = window.innerHeight;
                const triggerTop = (current.offsetTop + (viewportHeight * .2)) - viewportHeight;
                const blockHeight = current.offsetHeight;
                const blockSpace = triggerTop + blockHeight;
                const inView = scrollY > triggerTop && scrollY <= blockSpace;
                const isAnimated = current.classList.contains('ss-animated');

                if (inView && (!isAnimated)) {

                    anime({
                        targets: current.querySelectorAll('[data-animate-el]'),
                        opacity: [0, 1],
                        translateY: [100, 0],
                        delay: anime.stagger(200, {start: 200}),
                        duration: 800,
                        easing: 'easeInOutCubic',
                        begin: function(anim) {
                            current.classList.add('ss-animated');
                        }
                    });

                    if (current.classList.contains('about-stats')) {

                        let counters = current.querySelectorAll('[data-animate-el] .stats__count');

                        counters.forEach(function(counter, i) {

                            let val = +counter.dataset.counter;
                            let valSpan = counter.querySelectorAll('span')[0];
                            
                            valSpan.innerText = '0';

                            setTimeout(function() {
                                anime({
                                    targets: valSpan,
                                    innerText: [0, val],
                                    easing: 'linear',
                                    round: 1,
                                    duration: 2000
                                });
                            }, i * 200);
                            
                        });
                    }
                }
            });
        }

    }; // end ssAnimateOnScroll


   
   /* Initialize
    * ------------------------------------------------------ */
    (function ssInit() {

        
        ssScrollSpy();
        ssAnimateOnScroll();  

    })();

})(document.documentElement);