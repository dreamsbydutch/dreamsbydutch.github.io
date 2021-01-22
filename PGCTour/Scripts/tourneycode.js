var tourney = document.getElementById("tourneyscript").className;

var mySpreadsheetHeader = 'https://docs.google.com/spreadsheets/d/1LyloFyLI-YsPZnAWbmeh6l4KbhMUb1bqHm9Y47-fZOw/edit#gid=1192860014';
var mySpreadsheetLeaderboard = 'https://docs.google.com/spreadsheets/d/1LyloFyLI-YsPZnAWbmeh6l4KbhMUb1bqHm9Y47-fZOw/edit#gid=1251577342';
var headerTemplate = Handlebars.compile($('#tournament-header-template').html());
var leaderboardTemplate = Handlebars.compile($('#tournament-leaderboard-template').html());

$('#tournament-header').sheetrock({
    url: mySpreadsheetHeader,
    query: "select A,B,C,D,E,F,K where A = "+tourney,
    rowTemplate: headerTemplate
});

$('#tournament-leaderboard').sheetrock({
    url: mySpreadsheetLeaderboard,
    query: "select A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V order by A asc",
    rowTemplate: leaderboardTemplate
});

function openSidebar() {
  document.getElementById("mySidebar").style.display = "block";
}

function closeSidebar() {
  document.getElementById("mySidebar").style.display = "none";
}
