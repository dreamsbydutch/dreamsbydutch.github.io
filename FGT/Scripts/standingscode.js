var images = ['Images/wallpaper/wallpaper1.jpg', 'Images/wallpaper/wallpaper2.jpg', 'Images/wallpaper/wallpaper3.jpg', 'Images/wallpaper/wallpaper4.jpg', 'Images/wallpaper/wallpaper5.jpg', 'Images/wallpaper/wallpaper6.jpg', 'Images/wallpaper/wallpaper7.jpg'];
$('html').css({'background-image': 'url(' + images[Math.floor(Math.random() * images.length)] + '), url(' + images[Math.floor(Math.random() * images.length)] + '), url(' + images[Math.floor(Math.random() * images.length)] + '), url(' + images[Math.floor(Math.random() * images.length)] + ')'});

var mySpreadsheetStandings = 'https://docs.google.com/spreadsheets/d/1LyloFyLI-YsPZnAWbmeh6l4KbhMUb1bqHm9Y47-fZOw/edit#gid=0';
var standingsTemplate = Handlebars.compile($('#standings-template').html());

$('#standings-list').sheetrock({
  url: mySpreadsheetStandings,
  query: "select A,B,C,D,E,F,G,H,I,J,K order by A asc",
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
