import { waapi, stagger }from 'animejs';

waapi.animate('span', {
  translate: `0 -2rem`,
  delay: stagger(100),
  duration: 600,
  loop: true,
  alternate: true,
  ease: 'inOut(2)',
});