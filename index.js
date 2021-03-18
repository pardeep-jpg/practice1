$(document).ready(function() {
    // add an h2 heading to the aside
    $("aside").append("<h2>Table of contents</h2>");

    // wrap the h2 text in the article with <a> tags
    $("article h2").wrapInner("<a></a>");

    // add ids to the new <a> tags
    $("article a").each (function(index) {
        var id = "heading" + (index + 1);
        $(this).attr("id", id);
    });

    // clone the <a> tags in the article 
    // and insert them into the aside
    $("article a").clone().insertAfter($("aside h2"));

    // remove the id attributes from the <a> tags 
    // in the aside
    $("aside a").removeAttr("id");

