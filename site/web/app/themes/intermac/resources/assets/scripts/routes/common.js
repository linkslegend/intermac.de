import barba from '@barba/core';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {CSSPlugin} from 'gsap/CSSPlugin'
import {TimelineMax, Circ} from 'gsap';
import Scrollbar from 'smooth-scrollbar';
//import ScrollMagic from 'scrollmagic';

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
    
    /*gsap.to('#header', {
      yPercent: -100,
      autoAlpha: 0,
      duration: 0.5,
      ease: Circ.easeInOut,
      scrollTrigger: {
        trigger: '.wrap',
        scrub: false,
        markers: true,
        start: 'top top', 
        end: 'bottom bottom',
        toggleClass: {targets: '#header', className: 'is-sticky'},
        toggleActions: 'restart complete restart reset',
      },
    });*/

    const mq = window.matchMedia( '(min-width: 992px)' );
    if (mq.matches) {
      console.log('Screen width is at least 992px')
    } else {
      console.log('Screen less than 992px')
    }
    ScrollTrigger.create({
      trigger: '#header',
      start: 'top -20',
      end: 99999,
/*      onToggle: self => {
        console.log('toggled:', 'isActive:', self.isActive);
          let { isActive } = self;
          const featureBoxes = document.querySelectorAll('#header');
            if (isActive == true) {
              featureBoxes[0].classList.add('is-top')
            } else if (isActive == false) {
              featureBoxes[0].classList.remove('is-top')
            }
      },*/
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

    /*gsap.to('#header', {
      yPercent: -30,
      ease: 'none',
      scrollTrigger: {
        trigger: '#header',
        start: 'top top', // the default values
        // end: 'bottom top',
        scrub: true,
        markers: false,
        toggleClass: 'is-at-top',
      },
    });*/


    gsap.to('.donut--1', {
      yPercent: -100,
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
      yPercent: 100,
      ease: 'none',
      scrollTrigger: {
        trigger: '.main',
        // start: 'top bottom', // the default values
        // end: 'bottom top',
        scrub: true,
        toggleClass: 'active',
      }, 
    });

    gsap.to('.floatfig__img', {
      yPercent: -10,
      ease: 'none',
      scrollTrigger: {
        trigger: 'section.overview',
        // start: 'top bottom', // the default values
        // end: 'bottom top',
        scrub: true,
        toggleClass: 'active',
      },
    });

  /* end scroller */
  },

  init() {
    this.containerInit();
    function contentAnimation() {

        // https://greensock.com/docs/v3/Plugins/ScrollTrigger/static.batch()
        ScrollTrigger.batch('.stagger-title__line > div', {
          interval: 0.1, // time window (in seconds) for batching to occur. 
          // batchMax: 3,   // maximum batch size (targets)
          once: true,
          toggleClass: 'active',
          onEnter: batch => gsap.from(batch, {
            autoAlpha: 0, 
            stagger: 0.3, 
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
    }

    function objectAnimation() {
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
    }
    barba.init({
      debug: true,
      paused: true,
      transitions: [
        {
          name: 'basic',
          leave: function () {
            var done = this.async();
            gsap.to('.svg-wrapper', {
              duration: 1.2,
              bottom: '0%', 
              width: '100%',
              height: '100%',
              ease: 'Expo.easeInOut', 
              onComplete: done,
            });
          },
          enter: function (data) {
            var done = this.async();
            data.current.container.parentNode.removeChild(data.current.container);
            gsap.from('.svg-wrapper', {
              duration: 1,
              bottom: '100%',
              width: '100%',
              ease: 'Expo.easeInOut',
              onComplete: done,
            });
            contentAnimation();
            objectAnimation();
          },
          once: function (data) {
            var done = this.async();
            gsap.to(data.current.container, 1, {opacity: 0, onComplete: done});
            contentAnimation();
            objectAnimation();
          },
        },
      ],
    });
  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
  },
};
