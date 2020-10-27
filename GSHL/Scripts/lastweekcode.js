// Define spreadsheet URL.
var mySpreadsheet = 'https://docs.google.com/spreadsheets/d/1RDPMwBI77W_z9CvI2nVG6kTc6Q9J6vYrcE5boD-RiVE/edit#gid=34196491';
var matchupTemplate = Handlebars.compile($('#matchup-template').html());

$('#top-matchup').sheetrock({
      url: mySpreadsheet,
      query: "select A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,AZ,BA,BB,BC,BD,BE,BF,BG,BH,BI,BJ,BK,BL,BM,BN,BO,BP,CQ,CR,CS,CT,CU,CV,CW,CX,CY,CZ,DA where A = 4 and B = 1",
      rowTemplate: matchupTemplate
});

$('#other-matchups').sheetrock({
      url: mySpreadsheet,
      query: "select A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,AZ,BA,BB,BC,BD,BE,BF,BG,BH,BI,BJ,BK,BL,BM,BN,BO,BP,CQ,CR,CS,CT,CU,CV,CW,CX,CY,CZ,DA where A = 4 and B != 1 and B != 8 order by B asc",
      rowTemplate: matchupTemplate
});

$('#bottom-matchup').sheetrock({
      url: mySpreadsheet,
      query: "select A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,AZ,BA,BB,BC,BD,BE,BF,BG,BH,BI,BJ,BK,BL,BM,BN,BO,BP,CQ,CR,CS,CT,CU,CV,CW,CX,CY,CZ,DA where A = 4 and B  = 8",
      rowTemplate: matchupTemplate
});

Handlebars.registerHelper('catWinlossColor', function catWinlossColor(winLoss) {
      s = winLoss.toString();
      s = s.charAt(0);
      if (s == "W") {
            return '#006700';
      } else if (s == "L") {
            return '#9a0000';
      } else {
            return '#222';
      }
});
