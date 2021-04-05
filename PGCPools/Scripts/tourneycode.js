var tourney = document.getElementById("tourneyscript").className;

var mySpreadsheetHeader = 'https://docs.google.com/spreadsheets/d/1LyloFyLI-YsPZnAWbmeh6l4KbhMUb1bqHm9Y47-fZOw/edit#gid=1192860014';
var mySpreadsheetLeaderboard = 'https://docs.google.com/spreadsheets/d/1LyloFyLI-YsPZnAWbmeh6l4KbhMUb1bqHm9Y47-fZOw/edit#gid=1251577342';
var headerTemplate = Handlebars.compile($('#tournament-header-template').html());
var leaderboardTemplate = Handlebars.compile($('#tournament-leaderboard-template').html());

$('#tournament-header').sheetrock({
  url: mySpreadsheetHeader,
  query: "select A,B,C,D,E,F,K where A = " + tourney,
  rowTemplate: headerTemplate
});

$('#tournament-leaderboard').sheetrock({
  url: mySpreadsheetLeaderboard,
  query: "select A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V where V = " + tourney + " order by A asc",
  rowTemplate: leaderboardTemplate
});

function showTeam(rank) {
  var x = document.getElementById("slot-" + rank + "-extras");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

function openSidebar() {
  document.getElementById("mySidebar").style.display = "block";
}

function closeSidebar() {
  document.getElementById("mySidebar").style.display = "none";
}
