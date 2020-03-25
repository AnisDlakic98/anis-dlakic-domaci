/*  -----------------------------------------------------------
    UNIVERSAL FUNCTIONS START 
----------------------------------------------------------- */

// univerzalna read
read = (api, container, card) => {
  $.getJSON(api, function(returndata) {
    for (var i = 0; i < 6; i++) {
      var card1 = card(returndata[i]);
      $("#" + container).append(card1);
    }
  });
};

// univerzalna za card
getSkillCard = object => {
  return `<div class="col-12 col-md-6 col-lg-4 mb-4 mb-lg-5">
      <a href="#" class="service_block text-center d-block">
        <span class="custom-icon mx-auto"><i class="${object.icon} d-block"></i></span>
        <h3>
    ${object.name}
    </h3>
        <p>
    ${object.description}
    </p>
      </a>
      </div>`;
};

// univerzalna za smooth scroll
smoothScroll = element => {
  element.on("click", function(e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });
};

// univerzalna za animaciju
animateMe = (parrent, element, animation) => {
  const parrentOffset = parrent.offset().top / 2;
  const documentEl = $(document);
  console.log(element.offset().top);

  documentEl.on("scroll", function() {
    if (documentEl.scrollTop() > parrentOffset && element.hasClass("hidden"))
      element.addClass(`animated ${animation}`);
  });
};

/*  -----------------------------------------------------------
    READY FUNCTION START 
----------------------------------------------------------- */

$(function() {
  read(
    "http://www.mocky.io/v2/5e7374a1300000d5512e659e",
    "skill_list",
    getSkillCard
  );

  $(window).load(function() {
    $("#preloader")
      .delay(200)
      .fadeOut("fast");
  });

  // fixirani navbar
  $(window).on("scroll", function() {
    if ($(window).scrollTop() > 10) {
      $(".navbar").addClass("active");
    } else {
      $(".navbar").removeClass("active");
    }
  });

  animateMe($("#about_us"), $(".about_personal_info"), "fadeInRight");
  animateMe($("#about_us"), $(".main_about"), "fadeInLeft");
  animateMe($("#work"), $("#skill_list"), "bounceIn");

  var back_top = $("#back_top");

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      back_top.addClass("show");
    } else {
      back_top.removeClass("show");
    }
  });

  smoothScroll(back_top);

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

  smoothScroll($("#navbar-brand"));

  $(window).stellar();

  $(".typed").typed({
    strings: ["Freelancer.", "Designer.", "Developer."],
    // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
    stringsElement: null,
    // typing speed
    typeSpeed: 30,
    // time before typing starts
    startDelay: 200,
    // backspacing speed
    backSpeed: 20,
    // time before backspacing
    backDelay: 500,
    // loop
    loop: true,
    // false = infinite
    loopCount: 5,
    // show cursor
    showCursor: true,
    // character for cursor
    cursorChar: "|",
    // either html or text
    contentType: "html",
    // call when done callback function
    callback: function() {},
    // starting callback function before each string
    preStringTyped: function() {},
    //callback for every typed string
    onStringTyped: function() {},
    // callback for reset
    resetCallback: function() {}
  });
});
