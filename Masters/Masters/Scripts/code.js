// Define spreadsheet URL.
var mySpreadsheet = 'https://docs.google.com/spreadsheets/d/1NJZbWIvFYCTIt98BdxOZK1Z43XEOvqU6zqST_KJeJh0/edit#gid=0';
var leaderboardTemplate = Handlebars.compile($('#leaderboard-template').html());

$('#leaderboard').sheetrock({
      url: mySpreadsheet,
      query: "select A,B,C,D,E,F,G,H,I,J,K,L,M,N order by D desc",
      rowTemplate: leaderboardTemplate
});