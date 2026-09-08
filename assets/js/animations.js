document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // Fade Up Reveals
    const revealElements = document.querySelectorAll('.gs-reveal');
    revealElements.forEach((el) => {
        gsap.fromTo(el, 
            { y: 50, opacity: 0 },
            { 
                y: 0, 
                opacity: 1, 
                duration: 1, 
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%", // reveals when top of element hits 85% of viewport
                    toggleActions: "play none none none"
                }
            }
        );
    });

    // Vertical Journey Animation
    const journeySection = document.getElementById('journeySection');
    const journeyProgress = document.getElementById('journeyProgress');
    const journeySteps = document.querySelectorAll('.gs-step');

    if (journeySection && journeyProgress) {
        gsap.to(journeyProgress, {
            height: "100%",
            ease: "none",
            scrollTrigger: {
                trigger: journeySection,
                start: "top center",
                end: "bottom center",
                scrub: true
            }
        });

        journeySteps.forEach((step) => {
            ScrollTrigger.create({
                trigger: step,
                start: "top center",
                onEnter: () => step.classList.add("active"),
                onLeaveBack: () => step.classList.remove("active")
            });
        });
    }

    // Hero Image Parallax (if present)
    const heroImage = document.getElementById('heroImage');
    if (heroImage) {
        gsap.to(heroImage, {
            yPercent: 20,
            ease: "none",
            scrollTrigger: {
                trigger: ".hero-section",
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });
    }
});
