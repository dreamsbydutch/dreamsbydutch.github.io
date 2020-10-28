// Define spreadsheet URL.
var mySpreadsheet = 'https://docs.google.com/spreadsheets/d/1RDPMwBI77W_z9CvI2nVG6kTc6Q9J6vYrcE5boD-RiVE/edit#gid=34196491';
var nextMatchupTemplate = Handlebars.compile($('#next-match-template').html());
var i = 5;

$('#top-next-matchup').sheetrock({
      url: mySpreadsheet,
      query: "select A,B,I,J,K,Z,AA,AB,AC,AD,AE,AF,AG,AH,AI,AJ,AK,AL,AM,AN,AO,AP,AQ,AR,AS,AT,AU,AV,BK,BL,BM,BN,BO,BP,BQ,BR,BS,BT,BU,BV,BW,BX,BY,BZ,CA,CB,CC,CD where A = " + i + " and B = 1",
      rowTemplate: nextMatchupTemplate
});

$('#other-next-matchups').sheetrock({
      url: mySpreadsheet,
      query: "select A,B,I,J,K,Z,AA,AB,AC,AD,AE,AF,AG,AH,AI,AJ,AK,AL,AM,AN,AO,AP,AQ,AR,AS,AT,AU,AV,BK,BL,BM,BN,BO,BP,BQ,BR,BS,BT,BU,BV,BW,BX,BY,BZ,CA,CB,CC,CD where A = " + i + " and B != 1 and B != 8 order by B asc",
      rowTemplate: nextMatchupTemplate
});

$('#bottom-next-matchup').sheetrock({
      url: mySpreadsheet,
      query: "select A,B,I,J,K,Z,AA,AB,AC,AD,AE,AF,AG,AH,AI,AJ,AK,AL,AM,AN,AO,AP,AQ,AR,AS,AT,AU,AV,BK,BL,BM,BN,BO,BP,BQ,BR,BS,BT,BU,BV,BW,BX,BY,BZ,CA,CB,CC,CD where A = " + i + " and B  = 8",
      rowTemplate: nextMatchupTemplate
});

