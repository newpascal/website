$(document).foundation();

function GetLatestCompilerURL() {
  $.getJSON("https://api.github.com/repos/newpascal/newpascal/releases/latest").done(function(json) {
    var downloadURL = json.html_url,
        md = window.markdownit(),
        newsDate = new Date(json.published_at);
    $("#compiler-windows").attr("href", downloadURL);  
    $("#last-news-name").text(json.name); 
    $("#last-news-date").text(newsDate.toLocaleString()); 
    $("#last-news").html(md.render(json.body)); 
  });    
}

$(function() {
  GetLatestCompilerURL();
});