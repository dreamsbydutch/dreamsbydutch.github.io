var mySpreadsheetStandings = 'https://docs.google.com/spreadsheets/d/1LyloFyLI-YsPZnAWbmeh6l4KbhMUb1bqHm9Y47-fZOw/edit#gid=0';
var standingsTemplate = Handlebars.compile($('#standings-template').html());

$('#standings-list').sheetrock({
  url: mySpreadsheetStandings,
  query: "select A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W order by A asc",
  rowTemplate: standingsTemplate
});

Handlebars.registerHelper('rankColorChange', function rankColorChange(change) {
  var i = parseInt(change);
  if (i > 0) {
    return '#006700';
  } else if (i < 0) {
    return '#9a0000';
  } else {
    return '#222';
  }
});

function showTeam(rank) {
  var x = document.getElementById("slot-" + rank + "-extras");
  if (x.style.display == "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function openSidebar() {
  document.getElementById("mySidebar").style.display = "block";
}

function closeSidebar() {
  document.getElementById("mySidebar").style.display = "none";
}
