/* =====================================
All JavaScript fuctions Start
======================================*/  

//________Universal Function For Validation Field________//

validateInput = (input, regex, length) => {
  $(`#${input}`).on("input", function() {
    var input = $(this);
    var is_input = input.val();

    if (regex != false) {
      var is_input = regex.test(input.val());
    }
    if (length != false) {
      input.val().length > length ? (is_input = true) : (is_input = false);
    }

    is_input
      ? input.removeClass("invalid").addClass("valid")
      : input.removeClass("valid").addClass("invalid");
  });
};

/*--------------------------------------------------------------------------------------------
  document.ready ALL FUNCTION START
---------------------------------------------------------------------------------------------*/ 

(function($) {
  "use strict";

  var emailRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  validateInput("email", emailRe, false);

  //________Validate ALl Form Fields________//

  function validateAll() {
      var form_data = $("#contact_form").serializeArray();
      var error_free = true;
      for (var input in form_data) {
          var element = $("#" + form_data[input]["name"]);
          var valid = element.hasClass("valid");
          var error_element = $("span", element.parent());
          if (!valid) {
              element.css('border-color', 'var(--secondary-color)');
              error_element.addClass("error_show");
              error_free = false;
          } else {
              element.css('border-color', 'white');
              error_element.removeClass("error_show");
              error_free = true;
              element.val('');
              swal(
                "Good job!", 
                "You have just sent email!", 
                "success"
              );
          }
      }
      if (!error_free) {
          event.preventDefault();
          return false;
      } else {
          return true;
      }
  }

  //________Submit Form________//

  $('#submit_btn').on('click', function (e) {
      e.preventDefault();
      validateAll();
  });

  var nav = $('#nav_bar');

  //________Fixed Navigation________//

  $(window).on('scroll', function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
      $('#header').addClass('fixed');
    } else {
      $('#header').removeClass('fixed');
    }
  });

  //________Mobile Navigation________//

  $('.nav-toggle').on('click', function() {
      $(this).toggleClass('close-nav');
      nav.toggleClass('open');
      $('#header .logo').toggleClass('active');
      $('body').toggleClass('no-scroll');
      return false;
  }); 
  nav.find('a').on('click', function() {
      $('.nav-toggle').toggleClass('close-nav');
      nav.toggleClass('open');
  });

})(jQuery);



