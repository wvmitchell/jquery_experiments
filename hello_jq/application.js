$(function(){
  var back_to_top = "<a href='#top'>Back to top</a>";
  $("div.article").append(back_to_top);

  $("div.article h2").each(function(){
    var title = $(this).text();
    var slug = title.trim().toLowerCase().replace(" ", "_");
    var target_anchor = "<a name='"+ slug +"'/>";
    $(this).prepend(target_anchor);
    $('ul#toc').append("<li><a href='#" +slug +"'i>"+ title + "</a></li>");


    var toggle_link = $("<a href='#'>(hide)</a>");
    $(this).after(toggle_link);

    toggle_link.on('click', function(event){
      var old_text = $(this).text();
      var new_text = (old_text === '(hide)') ? '(show)' : '(hide)';
      $(this).siblings('p, a').toggle();
      $(this).text(new_text);
      event.preventDefault();
    });
  });

});

