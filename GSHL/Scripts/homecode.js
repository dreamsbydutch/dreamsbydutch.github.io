// Define spreadsheet URL.
var mySpreadsheet = 'https://docs.google.com/spreadsheets/d/1GNYs0bH1wOSqrZEAlH9LtCTlcZ6ruMPrrq15umFAiMQ/edit#gid=1368254096';
var standingTemplate = Handlebars.compile($('#matchups-template').html());

$('#home-matchups').sheetrock({
      url: mySpreadsheet,
      query: "select B,C,J,L,M,N,AG,AI,AJ,AK where C = 'LW' order by B asc",
      rowTemplate: standingTemplate
});

Handlebars.registerHelper('winChangeBold', function winChangeBold(change) {
  if (change === "W") {
        return 'bold';
  } else {
        return '';
  }
});

Handlebars.registerHelper('winChangeColour', function winChangeColour(change) {
  if (change === "W") {
        return '#059d0a';
  } else if (change === "L") {
        return '#9a0000';
  } else {
        return '#222';
  }
});

function openSidebar() {
    document.getElementById("mySidebar").style.display = "block";
  }
  
  function closeSidebar() {
    document.getElementById("mySidebar").style.display = "none";
  }

function switchRanking(evt, catName) {
      var i, x, tablinks;
      x = document.getElementsByClassName("category");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablink");
      for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" w3-grey", "");
      }
      document.getElementById(catName).style.display = "block";
      evt.currentTarget.className += " w3-red";
    }