TweenMax.staggerFrom('.box', 1.5, {
  opacity: 0,
  y: -600,
  rotation: 360,
  scale: 0,
  ease: Bounce.easeOut,
}, 0.2);

TweenMax.to('.box', .7, {
  opacity: 0,
  rotation: 360,
  scale: 0,
  ease: Back.easeIn,
  delay: 3
});
