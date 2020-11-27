var images = ['Images/wallpaper/wallpaper1.jpg', 'Images/wallpaper/wallpaper2.jpg', 'Images/wallpaper/wallpaper3.jpg', 'Images/wallpaper/wallpaper4.jpg', 'Images/wallpaper/wallpaper5.jpg', 'Images/wallpaper/wallpaper6.jpg', 'Images/wallpaper/wallpaper7.jpg'];
$('html').css({'background-image': 'url(' + images[Math.floor(Math.random() * images.length)] + '), url(' + images[Math.floor(Math.random() * images.length)] + '), url(' + images[Math.floor(Math.random() * images.length)] + '), url(' + images[Math.floor(Math.random() * images.length)] + ')'});

var tourney = document.getElementById("tourneyscript").className;

var mySpreadsheetHeader = 'https://docs.google.com/spreadsheets/d/1LyloFyLI-YsPZnAWbmeh6l4KbhMUb1bqHm9Y47-fZOw/edit#gid=1192860014';
var mySpreadsheetLeaderboard = 'https://docs.google.com/spreadsheets/d/1LyloFyLI-YsPZnAWbmeh6l4KbhMUb1bqHm9Y47-fZOw/edit#gid=304596389';
var headerTemplate = Handlebars.compile($('#tournament-header-template').html());
var leaderboardTemplate = Handlebars.compile($('#tournament-leaderboard-template').html());

$('#tournament-header').sheetrock({
  url: mySpreadsheetHeader,
  query: "select A,B,C,D,E,F,G,K where A = tourney",
  rowTemplate: headerTemplate
});

$('#tournament-leaderboard').sheetrock({
      url: mySpreadsheetLeaderboard,
      query: "select A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V order by A asc",
      rowTemplate: leaderboardTemplate
});