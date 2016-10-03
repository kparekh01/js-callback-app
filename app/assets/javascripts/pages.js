// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
function getData(){
  $.get('https://data.cityofnewyork.us/resource/9haj-uwpr.json', function(response){
    var htmlString = '<ul>';
    for (var i = 0; i < response.length; i++) {
      //console.log(response[i].project_status);
      htmlString += "<li onclick='changeColor(this)'>" + response[i].project_status + '</li>';
    }
    htmlString += '</ul>';
    api.innerHTML = htmlString;
  });
}
function changeColor(listItem){
  listItem.style.color("yellow");
}
