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

function GetLatestFpcupdeluxeURL() {
  $.getJSON("https://api.github.com/repos/newpascal/fpcupdeluxe/releases/latest").done(function(json) {
    var downloadURL = json.html_url,
        md = window.markdownit(),
        newsDate = new Date(json.published_at);
    $("#fpcupdeluxe").attr("href", downloadURL);  
    $("#fpcupdeluxe-last-news-name").text(json.name); 
    $("#fpcupdeluxe-last-news-date").text(newsDate.toLocaleString()); 
    $("#fpcupdeluxe-last-news").html(md.render(json.body)); 
  });
}

function GetDoc() {
  $.get("https://raw.githubusercontent.com/maciej-izak/LazarusDockedDesktops/master/README.md", function(data) {
    var md = window.markdownit();
    $("#docked-doc").html(md.render(data)); 
  });
}

$(function() {
  if (pageName=="docked") {
    GetDoc();
  } else if (pageName=="download") {
    GetLatestCompilerURL();
    GetLatestFpcupdeluxeURL();
  }  
});