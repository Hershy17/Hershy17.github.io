 //hide all the familymembers
 // $('.row1').hide();
 //When user scrolls 100px from top
 $(window).on('scroll', function () {
   var distanceScrolled = $(window).scrollTop();
   //console log distanceScrolled
   console.log("Distance Scrolled: " + distanceScrolled);
 // bring the grandparents together
  	if (distanceScrolled >= 425) {
  		$('.row1').fadeIn('slow');
    }

 // //when the user clicks on each grandparents a bio pops down
 // //when the user clicks it again it disappears toggle
 // //when the user scrolls 250 px
 // if (distanceScrolled >= 350) {
 //   $('.col2').fadeIn('slow');
 // } else {
 //   $('.col2').fadeOut('slow');
 // }
 // //the kids fadeIn
 // //when the user clicks on each kid it has a bio
 // //when the user clicks on the kid again it would disappears
 // //when the user scrolls 1000 px
 // //the grandchildren fadeIn
 if (distanceScrolled >= 1450) {
   $('.col3').fadeIn('slow');
 } else {
   $('.col3').fadeOut('slow');
 }
 // // when the user scrolls 1100 px more grandchildren appear

 // if (distanceScrolled >= 450) {
 // 	$('.col2').fadeIn('300');
 // }
 });
 // When the user scrols down to tree then fade down slowly the tree
// $(window).on('scroll', function () {
//   var distanceScrolled = $(window).scrollTop();
//
// console.log('The distance scrolled is: ' + distanceScrolled);
//
// if (distanceScrolled > 40) {
//   $('nav').removeClass('nav')
// }else {
//   $('nav').addClass('nav')
// }
//  // when the user clicks a parent add a modal
// });


// Hide the .welcome-info div
$('.modal').hide();
// // When the user clicks the button #welcome-info
$('#grandpa').on('click', function (e) {
  e.preventDefault();
  $('.modal').slideToggle('slow');
  // if (distanceScrolled >= 225) {
  //   $('.modal').fadeOut('slow');

});
$('#firstclick').on('click', function (e) {
  e.preventDefault();
  $('#i-b').hide();
  $('#i-b').fadeToggle('slow');
// }
});
// // When the user clicks on the anchor #grandpa
//   // Fade toggle .grandpa-info
// $('span p').hide();
//
// $('#couple12').on('click', function (e) {
//   e.preventDefault();
//   $('span p').toggle('slow');
// });
$('nav a').on('click', function(e) {
  // prevent the standard link operation on click
  e.preventDefault();
  // use the href of the link to identify what
  // section to scroll to
  var thisTarget = $(this).attr('href');
  // get that section's top offset
  var targetOffset = $(thisTarget).offset().top;
  // use jQuery.animate() to animate the body's
  // scrollTop to the targetOffest
  $('html, body').animate({
    scrollTop: targetOffset
  }, 1060);

});
