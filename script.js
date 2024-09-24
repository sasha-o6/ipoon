const lenis = new Lenis()

lenis.on('scroll', (e) => {
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
    lenis.raf(time * 600)
})

gsap.ticker.lagSmoothing(0)

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });

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

ScrollTrigger.refresh();
