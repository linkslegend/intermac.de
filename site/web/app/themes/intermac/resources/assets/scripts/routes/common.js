import barba from '@barba/core';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {CSSPlugin} from 'gsap/CSSPlugin'
import {TimelineMax, Circ} from 'gsap';
import Scrollbar from 'smooth-scrollbar';
import { Swiper, Navigation, Pagination, EffectCoverflow } from 'swiper/swiper.esm';
Swiper.use([Navigation, Pagination, EffectCoverflow]);

//import ScrollMagic from 'scrollmagic';
/*
    const mq = window.matchMedia( '(min-width: 992px)' );
    if (mq.matches) {
      console.log('Screen width is at least 992px')
    } else {
      console.log('Screen less than 992px')
    }
*/

export default {

  containerInit() {
    // JavaScript to be fired on all pages
    gsap.registerPlugin(ScrollTrigger)
    gsap.registerPlugin(CSSPlugin)


    // let's smoth-scrollbar & Scrolltrigger work
    let scrollPositionX = 0,// eslint-disable-line
        scrollPositionY = 0,// eslint-disable-line
        bodyScrollBar = Scrollbar.init(document.querySelector('#scroll-container'), { damping: 0.1, delegateTo: document });
        bodyScrollBar.addListener(({ offset }) => {
          scrollPositionX = offset.x;
          scrollPositionY = offset.y;
        });
        bodyScrollBar.setPosition(0, 0);
        bodyScrollBar.track.xAxis.element.remove();
        ScrollTrigger.scrollerProxy('body', {
          scrollTop(value) {
            if (arguments.length) {
              bodyScrollBar.scrollTop = value;
            }
            return bodyScrollBar.scrollTop;
          },
          scrollLeft(value) {
            if (arguments.length) {
              bodyScrollBar.scrollLeft = value;
            }
            return bodyScrollBar.scrollLeft;
          },
        });
        bodyScrollBar.addListener(() => ScrollTrigger.update());

    $('.navbar-toggler').click(function(e) {
      e.stopPropagation();
      $('body').toggleClass('menu-open');
    });
    

    ScrollTrigger.create({
      trigger: '#header',
      start: 'top -20',
      end: 99999,
      onUpdate: self => {
        /*console.log('progress:', self.progress.toFixed(3), 'direction:', self.direction, 'isActive:', self.isActive);*/
                let { direction, isActive } = self;
                const featureBoxes = document.querySelectorAll('#header');
                if (direction == -1) {
                  featureBoxes[0].classList.add('is-sticky')
                  featureBoxes[0].classList.remove('is-hidden')
              } if (direction == 1) {
                  featureBoxes[0].classList.add('is-hidden')
                  featureBoxes[0].classList.remove('is-sticky')
              } if (isActive == true) {
                featureBoxes[0].classList.remove('is-at-top')
              } else if (isActive == false) {
                featureBoxes[0].classList.add('is-at-top')
                featureBoxes[0].classList.remove('is-sticky')
              }
          },
    });
  /* end scroller */

    gsap.to('.donut--1', {
      yPercent: -200,
      xPercent: -120,
      rotate: 10,
      ease: 'none',
      scrollTrigger: {
        trigger: '.main',
        start: 'top top', // the default values
        // end: 'bottom top',
        scrub: true,
        markers: false,
        toggleClass: 'active',
      }, 
    });

    gsap.to('.donut--2', {
      yPercent: 200,
      xPercent: 120,
      rotate: 10,
      ease: 'none',
      scrollTrigger: {
        trigger: '.main',
        start: 'top top', // the default values
        // end: 'bottom top',
        scrub: true,
        markers: false,
        toggleClass: 'active',
      }, 
    });

    gsap.to('.floatfig__img', {
      yPercent: 15,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero_round',
        start: 'top top', // the default values
        // end: 'bottom top',
        scrub: true,
        markers: false,
        toggleClass: 'active',
      },
    })

    gsap.to('#clip-path', {
      yPercent: -2,
      rotate: -5,
      xPercent: 2,
      scale: 0.95,
      ease: 'none',
      scrollTrigger: {
        trigger: '.webdev',
        start: 'top 500', // the default values
        // end: 'bottom top',
        scrub: true,
        markers: false,
        toggleClass: 'active',
      },
    })

    gsap.utils.toArray('.hero__title').forEach(section => {
      gsap.to(section, {
        y: -55,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          // end: 'bottom top',
          scrub: true,
          markers: false,
          toggleClass: 'active',
        },
      })
    })

    gsap.utils.toArray('.content-has-parallax').forEach(section => {
      gsap.to(section, {
        y: -65,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          // end: 'bottom top',
          scrub: true,
          markers: false,
          toggleClass: 'active',
        },
      })
    })

    gsap.utils.toArray('.list-has-parallax').forEach(section => {
      gsap.to(section, {
        y: -35,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          // end: 'bottom top',
          scrub: true,
          markers: false,
          toggleClass: 'active',
        },
      })
    })

    // https://greensock.com/docs/v3/Plugins/ScrollTrigger/static.batch()
    ScrollTrigger.batch('.stagger-title__line > div', {
      // interval: 0.1, // time window (in seconds) for batching to occur. 
      // batchMax: 3,   // maximum batch size (targets)
      // once: true,
      toggleClass: 'active',
      onEnter: batch => gsap.from(batch, {
        autoAlpha: 0, 
        stagger: 0.25,
        y: '100%',
        opacity: 1,
        scrollTrigger: {
          trigger: '.stagger-title__line',
          toggleClass: 'active',
        },
      }),
      // also onLeave, onEnterBack, and onLeaveBack
      // also most normal ScrollTrigger values like start, end, etc.
    });

    /* eslint-disable no-unused-vars */
    var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      spaceBetween: 20,
      centeredSlides: true,
      slidesPerView: 3,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
      coverflowEffect: {
        rotate: 4,
        depth: 2,
        modifier: 1,
        slideShadows: false,
      },
      breakpoints: {
        // when window width is >= 320px
        360: {
          slidesPerView: 1,
          spaceBetween: 0,
          coverflowEffect: {
            rotate: 1,
            depth: 1,
            modifier: 1,
            slideShadows: false,
          },
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        // when window width is >= 480px
        580: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        // when window width is >= 640px
        800: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    });

    var swiper2 = new Swiper('.swiper-container2', {
      grabCursor: false,
      loop: true,
      spaceBetween: 20,
      centeredSlides: true,
      slidesPerView: 4,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
      // Responsive breakpoints
      breakpoints: {
        // when window width is >= 320px
        360: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        // when window width is >= 640px
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      },
    });
    /* eslint-enable no-unused-vars */

    let tl = new TimelineMax(),
    easing = Circ.easeInOut,
    donuts = document.querySelectorAll('.pastries__inner > .donut')
    tl.from (
      donuts,
      0.8,
      {
        autoAlpha: 0,
        skewX: 45,
        skewY: 45,
        x: 1,
        y: 1,
        scale: 0.1,
        ease: easing,
        rotation: 30,
        duration: 0.2,
        stagger: 0.25,
      },
      0.15
    )

    /* Theme switcher */
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
      toggleSwitch.addEventListener('change', switchTheme, false);
      function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark'); //add this
          }
        else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light'); //add this
          }    
        }
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
      if (currentTheme) {
          document.documentElement.setAttribute('data-theme', currentTheme);
          if (currentTheme === 'dark') {
              toggleSwitch.checked = true;
          }
       }
        /* end Theme switcher */
  },

  init() {
    gsap.set('.svg-wrapper', {
      scaleX: 0,
      rotation: 5,
      xPercent: -150,
      yPercent: -50,
      transformOrigin: 'left left',
      autoAlpha: 1,
    });
    barba.init({
      debug: true,
      //paused: true,
      transitions: [
        {
          name: 'basic',
          leave: function () {
            gsap.fromTo('.svg-wrapper', {
              rotation: 10,
              scaleX: 0,
              xPercent: -20,
            },
            {
              duration: 0.4,
              xPercent: 0,
              scaleX: 1,
              rotation: 0,
              ease: 'Power4.inOut',
              onComplete: this.async(),
              transformOrigin: 'left center',
            });
          },
          enter: function (data) {
            data.current.container.parentNode.removeChild(data.current.container);
            gsap.to('.svg-wrapper', {
              duration: 0.4,
              scaleX: 0,
              xPercent: 20,
              rotation: -10,
              transformOrigin: 'right center',
              ease: 'Power4.inOut',
              onComplete: this.async(),
            });
          },
        },
      ],
    });

    // do something before the transition starts
    barba.hooks.before(() => {
      document.querySelector('html').classList.add('is-animating');
      console.log('before');
    });
    // do something after the transition finishes
    barba.hooks.after(() => {
      this.containerInit();
      document.querySelector('html').classList.remove('is-animating');
      console.log('After');
    });
    // scroll to the top of the page
    barba.hooks.enter(() => {
      window.scrollTo(0, 0);
    });
    barba.hooks.afterLeave((data) => {
      // Set <body> classes for 'next' page
      var nextHtml = data.next.html;
      var response = nextHtml.replace(/(<\/?)body( .+?)?>/gi, '$1notbody$2>', nextHtml)
      var bodyClasses = $(response).filter('notbody').attr('class')
      $('body').attr('class', bodyClasses);
      $('.navbar-toggler').click(function(e) {
        e.stopPropagation();
        $('body').toggleClass('menu-open');
      });
    });

    this.containerInit();
  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
  },
};
