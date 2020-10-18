// Define spreadsheet URL.
var mySpreadsheet = 'https://docs.google.com/spreadsheets/d/1RDPMwBI77W_z9CvI2nVG6kTc6Q9J6vYrcE5boD-RiVE/edit#gid=0';
var i;

for (i = 1; i < 17; i++) {
  
  // Enter Rank Gains
  $('#rankRankGain'+i).sheetrock({
    url: mySpreadsheet,
    query: "select B where A = " + i,
    callback: function (error, options, response) {
      console.log(error, options, response);
    }
  });
    
  // Enter Team Logos
  $('#rankTeamLogo'+i).attr("src", sheetrock({
    url: mySpreadsheet,
    query: "select C where A = " + i,
    callback: function (error, options, response) {
      console.log(error, options, response);
    }
  }));
    
  // Enter Team Names
  $('#rankTeamName'+i).sheetrock({
    url: mySpreadsheet,
    query: "select D where A = " + i,
    callback: function (error, options, response) {
      console.log(error, options, response);
    }
  });
  
  // Enter Team Records
  $('#rankTeamRecord'+i).sheetrock({
    url: mySpreadsheet,
    query: "select E where A = " + i,
    callback: function (error, options, response) {
      console.log(error, options, response);
    }
  });
    
  // Enter Team Scores
  $('#rankTeamScore'+i).sheetrock({
    url: mySpreadsheet,
    query: "select G where A = " + i,
    callback: function (error, options, response) {
      console.log(error, options, response);
    }
  });
      
  // Enter Team Best Players
  $('#rankTeamBestPlayer'+i).sheetrock({
    url: mySpreadsheet,
    query: "select H where A = " + i,
    callback: function (error, options, response) {
      console.log(error, options, response);
    }
  });
      
  // Enter Team Last Weeks
  $('#rankTeamLastWeek'+i).sheetrock({
    url: mySpreadsheet,
    query: "select O where A = " + i,
    callback: function (error, options, response) {
      console.log(error, options, response);
    }
  });
      
  // Enter Team Streaks
  $('#rankTeamStreak'+i).sheetrock({
    url: mySpreadsheet,
    query: "select Q where A = " + i,
    callback: function (error, options, response) {
      console.log(error, options, response);
    }
  });
  
}
