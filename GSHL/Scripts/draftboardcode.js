var images = ['Images/wallpaper/wallpaper1.jpg', 'Images/wallpaper/wallpaper2.jpg', 'Images/wallpaper/wallpaper3.jpg', 'Images/wallpaper/wallpaper4.jpg', 'Images/wallpaper/wallpaper5.jpg', 'Images/wallpaper/wallpaper6.jpg', 'Images/wallpaper/wallpaper7.jpg'];
$('html').css({'background-image': 'url(' + images[Math.floor(Math.random() * images.length)] + '), url(' + images[Math.floor(Math.random() * images.length)] + '), url(' + images[Math.floor(Math.random() * images.length)] + '), url(' + images[Math.floor(Math.random() * images.length)] + ')'});

var mySpreadsheetDraftboard = 'https://docs.google.com/spreadsheets/d/1dxStC3BMhy1ZpiG8Tr5wIkPpZ-Tm0YNYeqjd2PbG5D0/edit#gid=306525779';
var draftboardHeaderTemplate = Handlebars.compile($('#draftboard-header-template').html());
var draftboardTemplate = Handlebars.compile($('#draftboard-template').html());

$('#draftboard-header').sheetrock({
      url: mySpreadsheetDraftboard,
      query: "select A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q order by A asc",
      rowTemplate: draftboardHeaderTemplate
});

$('#draftboard').sheetrock({
      url: mySpreadsheetDraftboard,
      query: "select A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q order by A asc",
      rowTemplate: draftboardTemplate
});