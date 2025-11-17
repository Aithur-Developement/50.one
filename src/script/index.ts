import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Check if window width is greater than 1150
if (window.innerWidth > 1150) {
  // Start from top of page
  window.scrollTo(0, 0);

  const lenis = new Lenis({
    smoothWheel: true,
    syncTouch: true,
    duration: 1.25,
    // allowNestedScroll: true,
  });
  window.lenis = lenis;

  // Animation frame loop
  const raf = (time: number) => {
    lenis.raf(time);
    ScrollTrigger.update();
    requestAnimationFrame(raf);
  };

  requestAnimationFrame(raf);

  // Register plugin and refresh on load
  gsap.registerPlugin(ScrollTrigger);

  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });
}
