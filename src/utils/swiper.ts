import 'swiper/css/bundle';

// @ts-expect-error : swiper bundle root
import Swiper from 'swiper/bundle';

export function swiperBlog() {
  new Swiper('.swiper.is-blog', {
    direction: 'horizontal',
    grabCursor: true,
    slidesPerView: 'auto',
    spaceBetween: 48,
    slideActiveClass: 'is-active',
    speed: 1500,
    mousewheel: {
      forceToAxis: true,
    },
    pagination: {
      el: '.swiper-wf-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-right',
      prevEl: '.swiper-left',
    },
  });
}
