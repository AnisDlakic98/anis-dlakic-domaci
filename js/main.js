// univerzalna read
read = (api, container, card) => {
  $.getJSON(api, function(returndata) {
    for (var i = 0; i < 6; i++) {
      var card1 = card(returndata[i]);
      $("#" + container).append(card1);
    }
  });
};

getSkillCard = object => {
  return (
    `<div class="col-12 col-md-6 col-lg-4 mb-4 mb-lg-5">
      <a href="#" class="service_block text-center d-block">
        <span class="custom-icon mx-auto"><span class="` +
    object.icon +
    ` d-block"></span></span>
        <h3>` +
    object.name +
    `</h3>
        <p>` +
    object.description +
    `</p>
      </a>
      </div>`
  );
};

$(function() {
  read(
    "http://www.mocky.io/v2/5e7374a1300000d5512e659e",
    "skill_list",
    getSkillCard
  );

  // fixirani navbar
  $(window).on("scroll", function() {
    if ($(window).scrollTop() > 10) {
      $(".navbar").addClass("active");
    } else {
      $(".navbar").removeClass("active");
    }
  });

  var siteIstotope = function() {
    // renderuj cards
    var $container = $("#posts").isotope({
      itemSelector: ".item",
      isFitWidth: true
    });

    $(window).resize(function() {
      $container.isotope({
        columnWidth: ".col-sm-3"
      });
    });

    $container.isotope({ filter: "*" });

    // filtriranje na dugme
    $("#filters").on("click", "button", function(e) {
      e.preventDefault();
      var filterValue = $(this).attr("data-filter");
      $container.isotope({ filter: filterValue });
      $("#filters button").removeClass("active");
      $(this).addClass("active");
    });
  };

  siteIstotope();

  $(".nav-link").on("click", function(e) {
    var href = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(href).offset().top - 70
      },
      "300"
    );
    // ne prikazuj id sekcije u url
    e.preventDefault();
  });
});

$(window).stellar();
