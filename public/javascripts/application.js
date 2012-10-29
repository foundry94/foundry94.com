$(document).ready(function() {
  $('#services-link').click(function(t) {
    console.debug($('#services').scrollTop());
    $('html, body').animate({ scrollTop: $('window').scrollTop() + 180 }, 500);
    t.preventDefault();
  });
});

$(document).ready(function() {
  $('#recent-work-link').click(function(t) {
    $('html, body').animate({ scrollTop: $('window').scrollTop() + 490 }, 500);
    t.preventDefault();
  });
});

$(document).ready(function() {
  $('#about-link').click(function(t) {
    $('html, body').animate({ scrollTop: $('window').scrollTop() + 1040 }, 500);
    t.preventDefault();
  });
});

