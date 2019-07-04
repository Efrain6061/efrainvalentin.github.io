/*! Ricky Mendez youtube.js v1.0.1 isabela2020.com | Copyright 2019 Efrain J. Valentin Gonzalez | efrainvalentin.github.io */
var channelID = "UC66wWmyw9Hi-dQnN3sFyBIA";
$.getJSON('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3D' + channelID, function(data) {
    var link = data.items[0].link;
    var id = link.substr(link.indexOf("=") + 1);
    $("#agenda-2020-live").attr("src", "https://youtube.com/embed/" + id + "?controls=1&amp;modestbranding=1&amp;showinfo=0");
});