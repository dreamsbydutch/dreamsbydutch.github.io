// Define spreadsheet URL.
var mySpreadsheet = 'https://docs.google.com/spreadsheets/d/1RDPMwBI77W_z9CvI2nVG6kTc6Q9J6vYrcE5boD-RiVE/edit#gid=0';
var standingTemplate = Handlebars.compile($('#standing-template').html());

$('#standings-table-sv').sheetrock({
      url: mySpreadsheet,
      query: "select D,E,F,G,H,O,M,R where F = 'SV' order by O asc",
      rowTemplate: standingTemplate
});

$('#standings-table-hh').sheetrock({
      url: mySpreadsheet,
      query: "select D,E,F,G,H,O,M,R where F = 'HH' order by O asc",
      rowTemplate: standingTemplate
});

$('#standings-table-wc').sheetrock({
      url: mySpreadsheet,
      query: "select D,E,F,G,H,P,M,R where P > 0 order by P asc",
      rowTemplate: standingTemplate
});

Handlebars.registerHelper('dynamicStreakColor', function dynamicStreakColor(winLoss) {
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

function openSidebar() {
      document.getElementById("mySidebar").style.display = "block";
    }
    
function closeSidebar() {
      document.getElementById("mySidebar").style.display = "none";
    }