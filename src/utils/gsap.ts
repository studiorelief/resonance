import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(ScrollTrigger);

/*
  ! Component - Portfolio
*/

export function navAnim() {
  gsap.set('.navbar_background', { height: '0%' });

  ScrollTrigger.create({
    trigger: '.section_features',
    start: '0% 50%',
    end: '100% 50%',
    markers: false,
    onEnter: () => {
      gsap.to('.navbar_background', {
        height: '100%',
        duration: 0.25,
      });
    },
    onLeaveBack: () => {
      gsap.to('.navbar_background', {
        height: '0%',
        duration: 0.25,
      });
    },
  });
}

/*
  ! Section 2 - Portfolio
*/

export function featuresAnim() {
  gsap.set('.features_card', {
    /* width: '90%', */ scale: 0.9,
    opacity: 0.5,
    borderColor: 'var(--border-color--border-brand)',
  });

  gsap.utils.toArray('.features_card').forEach((card) => {
    gsap.to(card as HTMLElement, {
      scrollTrigger: {
        markers: false,
        trigger: card as HTMLElement,
        start: '0% 75%',
        end: '100% 75%',
        scrub: true,
      },
      scale: 1,
      opacity: 1,
      /* width: '100%', */
      duration: 0.45,
      borderColor: 'var(--border-color--border-brand-active)',
    });
  });
}

/*
  ! Section 3 - Portfolio
*/

export function portfolioAnim() {
  const portfolioCards = document.querySelectorAll('.portfolio_card');

  portfolioCards.forEach((card) => {
    const brandPortfolio = card.querySelector('.portfolio_brand-portfolio');

    // Initialise avec la largeur maximale
    gsap.set(brandPortfolio, { css: { maxWidth: '12rem' } });

    card.addEventListener('mouseenter', () => {
      // Annule toute animation en cours pour éviter les conflits
      gsap.killTweensOf(brandPortfolio);

      // Animation pour réduire la taille lors du survol
      gsap.to(brandPortfolio, {
        duration: 0.4,
        css: { top: '1.5rem', left: '1.5rem', maxWidth: '7rem' },
        ease: 'power2.out',
      });
    });

    card.addEventListener('mouseleave', () => {
      // Annule toute animation en cours pour garantir la réinitialisation
      gsap.killTweensOf(brandPortfolio);

      // Réinitialise immédiatement la largeur maximale
      gsap.to(brandPortfolio, {
        duration: 0, // Exécution immédiate
        css: { maxWidth: '12rem' },
        ease: 'none',
      });

      // Remet les propriétés top et left à 'auto' sans conflit
      gsap.to(brandPortfolio, {
        duration: 0.45,
        css: { top: 'auto', left: 'auto' },
        ease: 'power2.out',
      });
    });
  });
}

/*
  ! Section 5 - Testimonial
*/

export function testimonialsAnim() {
  // Set initial states
  gsap.set('.testimonial_card', {
    scale: 0.9,
    opacity: 0.5,
    borderColor: 'var(--border-color--border-brand)',
  });

  ScrollTrigger.create({
    trigger: '.testimonial_collection-list',
    start: '0% 75%',
    end: '150% 75%',
    markers: false,
    scrub: false,
    onEnter: () => {
      // Animate to final states as elements come into view
      gsap.to('.testimonial_card', {
        scale: 1,
        opacity: 1,
        borderColor: 'var(--border-color--border-brand-active)',
        duration: 0.25,
        stagger: 0.15,
      });
    },
    onLeave: () => {
      // Animate back to final states when entering from the bottom
      gsap.to('.testimonial_card', {
        scale: 0.9,
        opacity: 0.5,
        duration: 0.5,
      });
    },
    onEnterBack: () => {
      // Animate back to final states when entering from the bottom
      gsap.to('.testimonial_card', {
        scale: 1,
        opacity: 1,
        duration: 0.25,
        stagger: 0.15,
      });
    },
    onLeaveBack: () => {
      // Reset to initial states when leaving upwards
      gsap.to('.testimonial_card', {
        scale: 0.9,
        opacity: 0.5,
        duration: 0.5,
      });
    },
  });
}
