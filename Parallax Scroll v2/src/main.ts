import { gsap } from 'gsap';
import Lenis from '@studio-freight/lenis';

const lenis = new Lenis();

function raf(time: any) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const bg1 = document.querySelector('.wrapper') as HTMLElement;
const bg2 = document.querySelector('.bg2') as HTMLElement;
const mountains = document.querySelector('.mountains') as HTMLElement;
const soldier = document.querySelector('.soldier') as HTMLElement;
const h1 = document.querySelector('h1 span') as HTMLElement;

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.wrapper',
        start: 'top bottom',
        scrub: 1,
    },
});

gsap.set(soldier, { scale: 0.8 });

tl.to(mountains, { scale: 1.4, y: 30 }).to(soldier, { scale: 1.7, y: 90 }, 0);

gsap.from(h1, {
    yPercent: 100,
    scrollTrigger: {
        trigger: h1,
        start: 'top bottom',
        scrub: 1,
    },
});
