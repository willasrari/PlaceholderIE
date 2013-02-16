$(document).on('pageinit', '#page-hoss', function () {
  if (!Modernizr.input.placeholder) {
    $('form label.hidden').each(function () {
      $(this).removeClass('hidden');
    });
  }
});