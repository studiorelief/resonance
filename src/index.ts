import './index.css';

import { setupFilterBehavior } from '$utils/filterPortfolio';
import {
  featuresAnim,
  navAnim,
  portfolioAnim,
  /* teamAnim, */ testimonialsAnim,
} from '$utils/gsap';
import { loadScript } from '$utils/loadscript';
import { swiperBlog } from '$utils/swiper';

window.Webflow ||= [];
window.Webflow.push(() => {
  /*
  ! Call Script
  */
  Promise.all([
    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsfilter@1/cmsfilter.js'),
  ]);

  /*
  ! Swiper
  */

  swiperBlog();

  /*
  ! GSAP
  */
  navAnim();
  featuresAnim();
  portfolioAnim();
  testimonialsAnim();
  /*   teamAnim(); */

  /*
  ! Autre
  */
  setupFilterBehavior();
});
