var mySpreadsheetHeader = 'https://docs.google.com/spreadsheets/d/10hocFHlhZMFtVdwVjIMjHbLFHPMvuGev1piknw1qUzc/edit#gid=1071677336';
var mySpreadsheetLeaderboard = 'https://docs.google.com/spreadsheets/d/10hocFHlhZMFtVdwVjIMjHbLFHPMvuGev1piknw1qUzc/edit#gid=1136510767';
var myPGASpreadsheetLeaderboard = 'https://docs.google.com/spreadsheets/d/10hocFHlhZMFtVdwVjIMjHbLFHPMvuGev1piknw1qUzc/edit#gid=0';
var headerTemplate = Handlebars.compile($('#tournament-header-template').html());
var leaderboardTemplate = Handlebars.compile($('#tournament-leaderboard-template').html());
var pgaleaderboardTemplate = Handlebars.compile($('#pga-tournament-leaderboard-template').html());

$('#tournament-header').sheetrock({
  url: mySpreadsheetHeader,
  query: "select A,B,C,D,E,F,G,K where A = 2",
  rowTemplate: headerTemplate
});


$('#tournament-leaderboard').sheetrock({
  url: mySpreadsheetLeaderboard,
  query: "select A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U order by A asc",
  rowTemplate: leaderboardTemplate
});

$('#pga-tournament-leaderboard').sheetrock({
  url: myPGASpreadsheetLeaderboard,
  query: "select A,B,C,D,E,F,L order by A asc",
  rowTemplate: pgaleaderboardTemplate
});


function showTeam(rank) {
  var x = document.getElementById("slot-" + rank + "-extras");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

function switchBoard(tabID, boardID) {
  var i;
  var x = document.getElementsByClassName("tab-listing");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  var y = document.getElementsByClassName("button-tabs");
  for (i = 0; i < y.length; i++) {
    y[i].classList.remove("tab-on")
    y[i].classList.add("tab-off")
  }
  document.getElementById(boardID).style.display = "inline-block";
  document.getElementById(tabID).classList.remove("tab-off");
  document.getElementById(tabID).classList.add("tab-on");
}

function openSidebar() {
  document.getElementById("mySidebar").style.display = "block";
}

function closeSidebar() {
  document.getElementById("mySidebar").style.display = "none";
}
