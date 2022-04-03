// Define spreadsheet URL.

var leaderboardTemplate = Handlebars.compile($('#leaderboard-template').html());

$('#leaderboard').sheetrock({
      url: mySpreadsheet,
      query: "select A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q order by Q asc",
      rowTemplate: leaderboardTemplate
});
