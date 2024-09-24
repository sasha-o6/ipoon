// const lenis = new Lenis()
const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

const lenis = new Lenis({
    smooth: !isIOS, // Вимкнути плавне прокручування на iOS
    // smooth: true,
    // // lerp: 0.5, // Чим менше значення, тим повільніше скрол
    // // wheelMultiplier: 0.5, // Зменшує швидкість прокручування колесом миші
    // touchMultiplier: .5, // Контролює швидкість скролу на сенсорних пристроях
    // infinite: false,
});

lenis.on('scroll', ({ velocity }) => {
    // const maxVelocity = 30; // Встановіть максимальну швидкість скролу
    // if (Math.abs(velocity) > maxVelocity) {
    //     lenis.velocity = Math.sign(velocity) * maxVelocity;
    // }
});

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true, limitCallbacks: true });

let tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: '.section-1',
        scrub: true,
        pin: true,
        start: "top top",
        end: "+=200%",
        anticipatePin: 1,
    }
});

tl1
    .to(document.querySelector('.section-1 .main-bg-cut'), { opacity: 1, ease: "power2" })
    // .to(document.querySelector(".section-1 p"), { bottom: "20%", opacity: 1, ease: "power2" })
    .to(document.querySelector(".section-1 p"), { y: "0vh", opacity: 1, ease: "power2" })


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
    // .to(document.querySelector('.section-2 p'), { bottom: "65%", opacity: 1, ease: "power2" })
    .to(document.querySelector(".section-2 p"), { y: "-65vh", opacity: 1, ease: "power2" })


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
    // .to(document.querySelector('.section-3 p'), { bottom: "65%", opacity: 1, ease: "power2" })
    .to(document.querySelector('.section-3 p'), { y: "-75vh", opacity: 1, ease: "power2" })



ScrollTrigger.refresh();
