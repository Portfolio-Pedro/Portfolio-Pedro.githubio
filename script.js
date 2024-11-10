
gsap.registerPlugin(ScrollTrigger);



// Animação inicial do hero
gsap.to(".hero h1", {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0.3
});

gsap.to(".hero p", {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0.6
});


gsap.to(".hero .cta-button", {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0.9
});



// Animação dos cards de features
gsap.utils.toArray(".feature-card").forEach((card, i) => {
    gsap.to(card, {
        scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            toggleActions: "play none none reverse"
        },
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: i * 0.2
    });
});



// Animação dos stats
gsap.utils.toArray(".stat-card").forEach((card, i) => {
    gsap.to(card, {
        scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            toggleActions: "play none none reverse"
        },
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: i * 0.2
    });
});



// Animação da seção CTA final
gsap.to(".cta-section h2", {
    scrollTrigger: {
        trigger: ".cta-section",
        start: "top bottom-=100",
        toggleActions: "play none none reverse"
    },
    opacity: 1,
    y: 0,
    duration: 0.6
});