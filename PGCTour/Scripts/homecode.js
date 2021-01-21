var mySpreadsheetOverall = 'https://docs.google.com/spreadsheets/d/1LyloFyLI-YsPZnAWbmeh6l4KbhMUb1bqHm9Y47-fZOw/edit#gid=0';
var mySpreadsheetSchedule = 'https://docs.google.com/spreadsheets/d/1LyloFyLI-YsPZnAWbmeh6l4KbhMUb1bqHm9Y47-fZOw/edit#gid=1192860014';
var mySpreadsheetWorldRank = 'https://docs.google.com/spreadsheets/d/1LyloFyLI-YsPZnAWbmeh6l4KbhMUb1bqHm9Y47-fZOw/edit#gid=1481979688';
var overallStandingsTemplate = Handlebars.compile($('#cup-standings-template').html());
var scheduleTemplate = Handlebars.compile($('#schedule-template').html());
var worldrankTemplate = Handlebars.compile($('#worldrank-template').html());

$('#standings-slots').sheetrock({
  url: mySpreadsheetOverall,
  query: "select A,B,C,D,E,F,G,H,I where A <= 10 and A !=0 order by A asc",
  rowTemplate: overallStandingsTemplate
});

$('#schedule-listing').sheetrock({
      url: mySpreadsheetSchedule,
      query: "select A,B,C,I,J,L where A <= 10 order by A",
      rowTemplate: scheduleTemplate
});

$('#worldrank-list').sheetrock({
  url: mySpreadsheetWorldRank,
  query: "select A,B,C where A <=10 order by A asc",
  rowTemplate: worldrankTemplate
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

function openSidebar() {
    document.getElementById("mySidebar").style.display = "block";
  }
  
  function closeSidebar() {
    document.getElementById("mySidebar").style.display = "none";
  }
