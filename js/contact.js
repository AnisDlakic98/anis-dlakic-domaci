/*  -----------------------------------------------------------
    UNIVERSAL FUNCTIONS START 
----------------------------------------------------------- */

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

/*  -----------------------------------------------------------
    READY FUNCTION START 
----------------------------------------------------------- */

var emailRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var phoneRe = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

validateInput("txtName", false, false);
validateInput("txtEmail", emailRe, false);
validateInput("txtPhone", phoneRe, false);
validateInput("txtMsg", false, 10);

// Validate all
function validateAll() {
  var form_data = $("#contact_form").serializeArray();
  var error_free = true;
  for (var input in form_data) {
    var element = $("#" + form_data[input]["name"]);
    var valid = element.hasClass("valid");
    var error_element = $("span", element.parent());
    if (!valid) {
      error_element.removeClass("input_err").addClass("error_show");
      element.css("border", "solid 2px #ff4444");
      error_free = false;
    } else {
      error_element.removeClass("error_show").addClass("input_err");
      element.css("border", "solid 2px #0ab6ff");
    }
  }
  if (!error_free) {
    event.preventDefault();
    return false;
  } else {
    return true;
  }
}

// Submit data
var submit_btn = $(".js-expand-right").ladda();
$(submit_btn).on("click", function(e) {
  e.preventDefault();

  $(this).ladda("start");

  $.ajax({
    type: "POST",
    url: "http://localhost/anis_landing/action.php",
    data: $("#contact_form").serialize(),
    error: function(xhr, ajaxOptions, thrownError) {
      $(submit_btn).ladda("stop");
    },
    success: function(data) {
      if (data === "Some fields are not correct! Please check.") {
        $(submit_btn).ladda("stop");
        swal("Incorrect Fields!", data, "warning");
      } else {
        $(submit_btn).ladda("stop");
        swal(data, "Good Job", "success");
      }
    }
  });

  if (validateAll()) {
  }
});
