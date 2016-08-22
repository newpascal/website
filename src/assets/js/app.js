$(document).foundation();

function GetLatestCompilerURL() {
  $.getJSON("https://api.github.com/repos/dathox/newpascalpack/releases/latest").done(function(json) {
    var downloadURL = json.assets[0].browser_download_url;
    $("#compiler-windows").attr("href", downloadURL);  
    $("#last-news").html(markdown.toHTML(json.body)); 
  });    
}

$(function() {
  GetLatestCompilerURL();
});