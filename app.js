/* TO FORCE-FINISH THE HOVER ANIMATION ON THE NAV BAR CODE WILL BE SOMETHING LIKE THIS : 

const elements = document.getElementsByClassName('box');

for (let i = 0; i <= elements.length; i++) {
  elements[i].addEventListener('animationend', function(e) {
    elements[i].classList.remove('animated');
  });

 elements[i].addEventListener('mouseover', function(e) {
   elements[i].classList.add('animated')
 })
}
https://stackoverflow.com/questions/7694323/css3-animation-on-hover-force-entire-animation
https://css-tricks.com/forums/topic/hover-keyframe-run-the-full-animation/

*/
