$(document).ready(function () {
  if (!$('nav').hasClass('fixed') && !$('nav').hasClass('absolute')) {

    // Make nav container height of nav

    $('.nav-container').css('min-height', $('nav').outerHeight(true));

    $(window).resize(function () {
      $('.nav-container').css('min-height', $('nav').outerHeight(true));
    });

    // Compensate the height of parallax element for inline nav

    if ($(window).width() > 768) {
      $('.parallax:nth-of-type(1) .background-image-holder').css('top', -($('nav').outerHeight(true)));
    }

    // Adjust fullscreen elements

    if ($(window).width() > 768) {
      $('section.fullscreen:nth-of-type(1)').css('height', ($(window).height() - $('nav').outerHeight(true)));
    }
    
    if ($(window).width() > 768) {
      $('.parallax-container').show();
    }
    
    if ($(window).width() < 768) {
      $('.parallax-container').hide();
    }

  } else {
    $('body').addClass('nav-is-overlay');
  }
});