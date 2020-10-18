// Define spreadsheet URL.
var mySpreadsheet = 'https://docs.google.com/spreadsheets/d/1RDPMwBI77W_z9CvI2nVG6kTc6Q9J6vYrcE5boD-RiVE/edit#gid=0';
var rankingTemplate = Handlebars.compile($('#ranking-template').html());

$('#rankings-table').sheetrock({
      url: mySpreadsheet,
      query: "select A,B,C,D,E,G,H,O,Q",
      labels: ['rankTeamRank', 'rankTeamRankGain', 'rankTeamLogo', 'rankTeamName', 'rankTeamRecord', 'rankTeamScore', 'rankTeamBestPlayer', 'rankTeamLastWeek', 'rankTeamStreak'],
      rowTemplate: rankingTemplate
});      
