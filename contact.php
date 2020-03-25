<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Anis | Portfolio</title>

    <link rel="stylesheet" href="fonts/icomoon/style.css" />
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
    />
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Ladda/0.9.7/ladda-themeless.min.css" />
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
    />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-sweetalert/1.0.1/sweetalert.min.css" />
    <link rel="stylesheet" href="css/animate.css" />
    <link rel="stylesheet" href="css/style.css" />
    <link rel="stylesheet" href="css/responsive.css" />
    <link rel="stylesheet" href="css/contact.css" />
  </head>

  <body id="top" class="single_page">
    <!-- Preloader -->
    <div id="preloader">
      <div class="spinner"></div>
    </div>

    <!-- Navbar-->
    <header class="header">
      <nav class="navbar navbar-expand-lg fixed-top py-3">
        <div class="container">
          <a href="index.php" class="navbar-brand">anis<span>dlakic</span></a>
          <button
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            class="navbar-toggler navbar-toggler-right"
          >
            <i class="fa fa-bars"></i>
          </button>

          <div id="navbarSupportedContent" class="collapse navbar-collapse">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a href="#top" class="nav-link text-uppercase font-weight-bold"
                  >Home <span class="sr-only">(current)</span></a
                >
              </li>
              <li class="nav-item">
                <a
                  href="#about_us"
                  class="nav-link text-uppercase font-weight-bold"
                  >About</a
                >
              </li>
              <li class="nav-item">
                <a
                  href="#services"
                  class="nav-link text-uppercase font-weight-bold"
                  >Experience</a
                >
              </li>
              <li class="nav-item">
                <a href="#work" class="nav-link text-uppercase font-weight-bold"
                  >Work</a
                >
              </li>
              <li class="nav-item">
                <a
                  href="#contact"
                  class="nav-link text-uppercase font-weight-bold"
                  >Contact</a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <div
      id="jumbotron"
      class="d-flex jumbotron_single"
      data-stellar-background-ratio="0.5"
    >
      <div class="container my-auto">
        <div class="jumbotron_content">
          <h1>Ask me whatever you want!</h1>
        </div>
      </div>
    </div>




    <div class="container contact-form animated bounce">
      <div class="contact-image">
        <img
          src="https://image.ibb.co/kUagtU/rocket_contact.png"
          alt="rocket_contact"
        />
      </div>
      <form method="POST" id="contact_form">
        <h3>Drop Us a Message</h3>
        <input type="hidden" class="valid" name="action" id="action" value="send_email" />
        <div class="row">
          <div class="col-md-6">
            <div class="left-inner-addon input-container">
              <i class="fa fa-user"></i>
              <input
                type="text"
                name="txtName"
                id="txtName"
                class="form-control"
                placeholder="Subject"
              />
              <span class="input_err"><sup>*</sup>This field is requiered!</span>
            </div>
            <div class="left-inner-addon input-container">
              <i class="fa fa-envelope-o"></i>
              <input
                type="text"
                name="txtEmail"
                id="txtEmail"
                class="form-control"
                placeholder="Your Email"
              />
              <span class="input_err"><sup>*</sup>Enter valid email!</span>
            </div>
            <div class="left-inner-addon input-container">
              <i class="fa fa-phone"></i>

              <input
                type="text"
                name="txtPhone"
                id="txtPhone"
                class="form-control"
                placeholder="Your Phone Number"
              />
              <span class="input_err"><sup>*</sup>Enter valid phone number!</span>
            </div>
          </div>
          <div class="col-md-6">
            <div class="left-inner-addon input-container">
              <textarea
                style="line-height: 2; padding-top: 10px;"
                name="txtMsg"
                id="txtMsg"
                rows="5"
                class="form-control"
                placeholder="Your Message"
              ></textarea>
              <span class="input_err"><sup>*</sup>This field requiere at least 10 chars!</span>
            </div>
          </div>
        </div>
      </form>
      <div class="col-md-12 mt-5 text-center">
            <button id="submit_btn" class="ladda-button btn btn-primary js-expand-right" data-style="expand-right">
              <span class="ladda-label">SEND MESSAGE</span>
            </button>
          </div>
    </div>

    <footer class="site_footer">
      <div class="container">
        <div class="row mb-5 main_footer">
          <div class="col-6 col-md-6 col-lg-3 mb-4 mb-md-0">
            <h3>Scenic Products</h3>
            <ul class="list-unstyled">
              <li><a href="#">Web Design</a></li>
              <li><a href="#">Graphic Design</a></li>
              <li><a href="#">Web Developers</a></li>
              <li><a href="#">Resources</a></li>
            </ul>
          </div>
          <div class="col-6 col-md-6 col-lg-3 mb-4 mb-md-0">
            <h3>Company</h3>
            <ul class="list-unstyled">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Career</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Resources</a></li>
            </ul>
          </div>
          <div class="col-6 col-md-6 col-lg-3 mb-4 mb-md-0">
            <h3>Support</h3>
            <ul class="list-unstyled">
              <li><a href="#">Support</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
          <div class="col-6 col-md-6 col-lg-3 mb-4 mb-md-0">
            <h3>Contact Us</h3>
            <div class="footer-social">
              <a href="#"><span class="icon-facebook"></span></a>
              <a href="#"><span class="icon-twitter"></span></a>
              <a href="#"><span class="icon-instagram"></span></a>
              <a href="#"><span class="icon-linkedin"></span></a>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row text-center">
            <div class="col-md-12">
              <p class="copyright">
                <small class="block">
                  Copyright &copy;
                  <script>
                    document.write(new Date().getFullYear());
                  </script>
                  All rights reserved | made by
                  <i class="icon-heart text-danger" aria-hidden="true"></i> by
                  <a href="https://anismedia.com" target="_blank">AnisMedia</a>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>

    <a href="#top" id="back_top">
      <i class="icon-angle-up"></i>
    </a>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/Ladda/0.9.7/spin.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Ladda/0.9.7/ladda.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Ladda/0.9.7/ladda.jquery.min.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-sweetalert/1.0.1/sweetalert.min.js"></script>
    <script src="js/main.js"></script>
    <script src="js/contact.js"></script>

  </body>
</html>
