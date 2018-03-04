$(document).ready(function() {

 // search term on return press
  $("#search").keypress(function(e) {
    //enter press
    var search = $("#search").val()
    if (e.which == 13 && search !=="") {
      var apiURL ="https://en.wikipedia.org/w/api.php?action=opensearch&search=" + search + "&format=json&callback=?";
   // get request to wikipedia  
      $.ajax({
        url: apiURL,
        type: "GET",
        async:false,
        dataType:"json",
        success: function(data, status, jqXHM){
          console.log(data)
    for (var i = 0; i < data[1].length; i++)
       $("output").prepend("<div><div class='well'><a href ="+ data[3][i]+'>'+"<p>"+data[1][i] + "<p>"+data[2][i]+"</p></a></div></div>");                    
      }
      })
} });
   
  });