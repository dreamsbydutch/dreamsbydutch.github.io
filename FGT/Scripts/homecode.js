var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
}

var mySpreadsheet = 'https://docs.google.com/spreadsheets/d/1RDPMwBI77W_z9CvI2nVG6kTc6Q9J6vYrcE5boD-RiVE/edit#gid=0';
var rankingTemplate = Handlebars.compile($('#cup-standings-template').html());

$('#standings-slots').sheetrock({
      url: mySpreadsheet,
      query: "select A,B,C,D,E,F,G,H order by A asc",
      rowTemplate: rankingTemplate
});

Handlebars.registerHelper('dynamicRankChange', function dynamicRankChange(change) {
      var i = parseInt(change);
      if (i > 0) {
            return '#006700';
      } else if (i < 0) {
            return '#9a0000';
      } else {
            return '#222';
      }
});
