const lenis = new Lenis()

lenis.on('scroll', (e) => {
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
    lenis.raf(time * 600)
})

gsap.ticker.lagSmoothing(0)


// function elementInViewport(el) {
//     let top = el.offsetTop;
//     let left = el.offsetLeft;
//     let width = el.offsetWidth;
//     let height = el.offsetHeight;

//     while (el.offsetParent) {
//         el = el.offsetParent;
//         top += el.offsetTop;
//         left += el.offsetLeft;
//     }

//     return (
//         top >= window.pageYOffset &&
//         left >= window.pageXOffset &&
//         (top + height) <= (window.pageYOffset + window.innerHeight) &&
//         (left + width) <= (window.pageXOffset + window.innerWidth)
//     );
// }


gsap.registerPlugin(ScrollTrigger);


// // --- SETUP START ---
// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector(".smooth-scroll"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy(".smooth-scroll", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, {duration: 0, disableLerp: true}) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
// });

// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
// ScrollTrigger.defaults({ scroller: ".smooth-scroll" });
// // --- SETUP END ---



// // --- ORANGE PANEL ---
// gsap.from(".line-2", {
//   scrollTrigger: {
//     trigger: ".orange",
//     scrub: true,
//     pin: true,
//     start: "top top",
//     end: "+=200%",
//     onUpdate() {
//       console.log("Update")
//     }
//   },
//   scaleX: 0, 
//   transformOrigin: "left center", 
//   ease: "none"
// });


// --- PURPLE/GREEN PANEL ---

let tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: '.section-1',
        scrub: true,
        pin: true,
        start: "top top",
        end: "+=250%",
    }
});

tl1
    .to(document.querySelector('.section-1 .main-bg-cut'), { opacity: 1, ease: "power2" })
    .to(document.querySelector(".section-1 .main-bg-cut"), { opacity: 1, ease: "power2" })
    .to(document.querySelector(".section-1 p"), { bottom: "20%", opacity: 1, ease: "power2" })


let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".section-2",
        scrub: true,
        pin: true,
        start: "top top",
        end: "+=150%",
    }
});

tl2
    .to(document.querySelector('.section-2 p'), { bottom: "65%", opacity: 1, ease: "power2" })


let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".section-3",
        scrub: true,
        pin: true,
        start: "top top",
        end: "+=150%",
    }
});

tl3
    .to(document.querySelector('.section-3 p'), { bottom: "65%", opacity: 1, ease: "power2" })


// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
