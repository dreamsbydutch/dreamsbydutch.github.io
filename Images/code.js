$.getJSON("http://cors.io/spreadsheets.google.com/feeds/list/1RDPMwBI77W_z9CvI2nVG6kTc6Q9J6vYrcE5boD-RiVE/od6/public/values?alt=json", function(data) {
  //first row "title" column
  $('#second-team-name').load(data.feed.entry[0]['gsx$title']['$t']);
});
  
  