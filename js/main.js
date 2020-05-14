/*loading page*/
window.addEventListener("load", function() {
	var loading = document.querySelector(".loading-page");
	loading.className += " hidden";
									
});  

/*quand on clique sur le bouton menu responsive*/
$('.nav-toggle').click(function(e){
	e.preventDefault();
	$('.m-right').toggleClass('is-open');
	$('.nav-toggle').toggleClass('is-open');
})

/*quand on clique sur le onglet responsive*/
if(window.innerWidth<1000){
$('.onglet').click(function(e){
	e.preventDefault();
	$('.m-right').toggleClass('is-open');
	$('.nav-toggle').toggleClass('is-open');
})}

window.onresize = function() {
    if (window.innerWidth <= 1000) { 
		$('.onglet').click(function(e){
		e.preventDefault();
		$('.m-right').toggleClass('is-open');
		$('.nav-toggle').toggleClass('is-open');			
})}}

/*scroll to formation*/
$(document).ready(function() {
$(".nav-formation").click(function() {
     $('html, body').animate({
         scrollTop: $("#formations").offset().top
     }, 1000);
 });
});

/*scroll to experiences*/
$(document).ready(function() {
$(".nav-experiences").click(function() {
     $('html, body').animate({
         scrollTop: $("#experiences").offset().top
     }, 1000);
 });
});


 


/*quand on scrolle down pour faire disparaître le header*/
var prev = 0;
var $window = $(window);
var nav = $('.navbar');


$window.on('scroll', function myFuction(){
  var scrollTop = $window.scrollTop();
  nav.toggleClass('hidden', scrollTop > prev);
  prev = scrollTop;
})

/*scroll to experiences*/
$(document).ready(function() {
$(".goto-experiences2").click(function() {
     $('html, body').animate({
         scrollTop: $("#experiences2").offset().top
     }, 1000);
 });
});

/*scroll to competences*/
$(document).ready(function() {
$(".nav-competences").click(function() {
     $('html, body').animate({
         scrollTop: $("#competences").offset().top
     }, 1000);
 });
});

/*scroll to contact*/
$(document).ready(function() {
$(".nav-contact").click(function() {
     $('html, body').animate({
         scrollTop: $("#footer").offset().top
     }, 1000);
 });
});