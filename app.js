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
function copyContact() {
  /* Get the text field */
  var copyText = document.getElementById("contactMe");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}
/**** MOBILE STYLING FOR THE HERO SECTION, PROPORTIONS ON THE SUN ARE WEIRD */
let w = window.innerWidth;
let h = window.innerHeight;
let heroTagline = document.getElementById("heroTagline");
if (w <= 481) {
  heroTagline.style = "display: none;";
}
