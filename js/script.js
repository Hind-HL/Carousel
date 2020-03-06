//   FILTERS
$(document).ready(function(){
    $("#filtr").click(function(){
        $(".myDisplay").slideToggle();
    });
});

var valu; 
window.onload = init;
function init(){

    
    var slider = document.getElementById("myRange");
// Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    valu = this.value;
}


 function changerFiltr(id)
{
  var mySlid = document.querySelectorAll('.mySlides');
    mySlid.forEach(function(img){
        if(img.id == "check")
            {
                var myFil = document.querySelector("#"+id);
               
                            img.style.filter = myFil.id + "(50%)" ;
            }
    })
   
}

}






//var listFilter = ["grayscale","invert","saturate","sepia"];








var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
      slides[i].id = "nonCheck";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
slides[slideIndex-1].id = slides[slideIndex-1].id.replace("nonCheck","check");
  captionText.innerHTML = dots[slideIndex-1].alt;
}






