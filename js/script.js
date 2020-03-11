// SHADOW FOR MENU
$(window).scroll(function() {     
  var scroll = $(window).scrollTop();
  if (scroll > 0) {
      $("nav").addClass("navbar-container-shadow");
  }
  else {
      $("nav").removeClass("navbar-container-shadow");
  }
});

//PLAY VIDEO WHEN HOVER
$(document).ready(function() {
   $(".myvideos").on("mouseover", function(event) {
     this.play();
 
   }).on('mouseout', function(event) {
     this.pause();
 
   });
 });

 //REVEAL ON SCROLL
 // init controller
 var controller = new ScrollMagic.Controller();
 // build scenes
 var revealElements = document.getElementsByClassName("digit");
 for (var i=0; i<revealElements.length; i++) { // create a scene for each element
   new ScrollMagic.Scene({
             triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
             offset: 50,												 // start a little later
             triggerHook: 0.9,
           })
           .setClassToggle(revealElements[i], "visible") // add class toggle
           //.addIndicators({name: "digit " + (i+1) }) // add indicators (requires plugin)
           .addTo(controller);
 }
 // build scenes reverse
 var revealElements = document.getElementsByClassName("digit--re");
 for (var i=0; i<revealElements.length; i++) { // create a scene for each element 
   new ScrollMagic.Scene({
             triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
             offset: 50,												 // start a little later
             triggerHook: 0.9,
           })
           .setClassToggle(revealElements[i], "visible") // add class toggle
           //.addIndicators({name: "digit " + (i+1) }) // add indicators (requires plugin)
           .addTo(controller);
 }

 // build scenes up
 var revealElements = document.getElementsByClassName("digit--up");
 for (var i=0; i<revealElements.length; i++) { // create a scene for each element 
   new ScrollMagic.Scene({
             triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
             offset: 50,												 // start a little later
             triggerHook: 0.9,
           })
           .setClassToggle(revealElements[i], "visible") // add class toggle
           //.addIndicators({name: "digit " + (i+1) }) // add indicators (requires plugin)
           .addTo(controller);
 }

