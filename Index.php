<?php require_once "api.php";?>


<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Anis | Portfolio</title>

    <link rel="stylesheet" href="fonts/icomoon/style.css">
    <link rel="stylesheet" href="fonts/line-icons/style.css">
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
    />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
    <link rel="stylesheet" href="css/style.css" />
    <link rel="stylesheet" href="css/responsive.css">
  </head>

  <body id="top">

    <!-- Preloader -->
    <div id="preloader">
      <div class="spinner"></div>
    </div>

    <!-- Navbar-->
    <header class="header">
      <nav class="navbar navbar-expand-lg fixed-top py-3">
        <div class="container">
          <a href="#top" class="navbar-brand" id="navbar-brand">anis<span>dlakic</span></a>
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
                <a href="#about_us" class="nav-link text-uppercase font-weight-bold"
                  >About</a
                >
              </li>
              <li class="nav-item">
                <a href="#services" class="nav-link text-uppercase font-weight-bold"
                  >Experience</a
                >
              </li>
              <li class="nav-item">
                <a href="#work" class="nav-link text-uppercase font-weight-bold"
                  >Work</a
                >
              </li>
              <li class="nav-item">
                <a href="#contact" class="nav-link text-uppercase font-weight-bold"
                  >Contact</a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <div id="jumbotron" class="d-flex" data-stellar-background-ratio="0.5">
      <div class="container my-auto">
        <div class="jumbotron_content">
          <div class="promo-block-divider">
            <h1 class="promo-block-title">Anis<br />Dlakic</h1>
            <p class="promo-block-text">I'm a <span class="typed"></span></p>
          </div>
          <ul class="list-inline">
            <li>
              <a href="" class="social-icons">
                <i class="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="" class="social-icons">
                <i class="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="" class="social-icons">
                <i class="fa fa-dribbble"></i>
              </a>
            </li>
            <li>
              <a href="" class="social-icons">
                <i class="fa fa-behance"></i>
              </a>
            </li>
            <li>
              <a href="" class="social-icons">
                <i class="fa fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <section class="about_us_area section_area" id="about_us">
      <div class="container">
        <div class="section-title">
          <span>FEW WORD’S </span>
          <h3>ABOUT ME</h3>
        </div>
        <div class="row">
          <div class="col-md-12 col-lg-5">
            <div class="main_about hidden">
            <p>
              I am Professional Graphic designer and Web Developer provides the
              best afford to make you happy. best ipsum dolor sit amet,
              constetur adipiscin elit, sed usmod tempor incididunt ut labore et
              dolore
            </p>
            <p>
              Always try to phic designer and Web Developer provides the best
              afford to ake you happy. best ipsum dolor sit amet, constetur
              adipiscing elit, sed usmod tempor incididunt ut labore et dolore
            </p>
            </div>
          </div>
          <div class="col-md-12 col-lg-7 pl-5">
            <div class="about_personal_info hidden">
              <h4>PERSONAL INFORMATION</h4>
              <div class="d-flex justify-content-between">
                <ul>
                  <li><span>Full Name :</span> Anis Dlakic</li>
                  <li><span>Date of Birth : </span>25 August. 1998</li>
                  <li><span>Age : </span>21 Year Old</li>
                  <li><span>Blood Group : </span>O+</li>
                </ul>
                <ul>
                  <li><span>Phone : </span>+38268848285</li>
                  <li><span>Email : </span>anis.dlakic.fit@gmail.com</li</span></li>
                  <li><span>Skype : </span>anisdlakic</li>
                  <li><span>Website : </span>www.anismedia.me</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="services_area section_area dark" id="services">
      <div class="row mb-5">
        <div class="col-12 text-center">
          <div class="section-title">
            <span>EXPERIENCE</span>
            <h3>MY SKILLS</h3>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row hidden" id="skill_list">
        </div>
      </div>
    </section>

     <section class="portfolio_area section_area" id="work">
      <div class="container">
        <div class="row mb-3">
          <div class="col-12 text-center">
            <div class="section-title">
              <span>EXPERIENCE</span>
              <h3>MY WORK</h3>
            </div>
          </div>
        </div>

        <div class="row justify-content-center mb-5">
          <div id="filters" class="filters text-center button-group col-md-7">
              <button class="btn btn-skew active" data-filter="*"><span>All</span></button>
              <?php

foreach ($categories as $category) {
    echo '<button class="btn btn-skew mr-1" data-filter="' . '.' . $category . '"><span>' . $category . '</span></button>';
}

?>
          </div>
        </div>

        <div id="posts" class="row no-gutter">

        <?php

foreach ($work as $temp) {?>

          <div class="item <?php echo $temp->category ?> col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-4">
            <a href="portfolio-single.php<?php echo "?id=" . $temp->id ?>" class="item-wrap">
              <span class="icon-add"></span>
              <img class="img-fluid" src="<?php echo $temp->image ?>">
            </a>
          </div>

        <?php }?>

        </div>
      </div>

    </section>

    <section class="ctn_area section_area" id="contact">
      <div class="container">
        <div class="row mb-3">
          <div class="col-12 text-center ctn_title">
            <h2>HAVE YOU ANY PROJECT ! TELL ME
              ABOUT YOUR PROJECT AND LETS START
              </h2>
              <a href="contact.php" class="btn btn-skew"><span>START PROJECT</span></a>
          </div>
        </div>
      </div>
    </section>

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
              <p class="copyright"><small class="block">
              Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | made by <i class="icon-heart text-danger" aria-hidden="true"></i> by <a href="https://anismedia.com" target="_blank" >AnisMedia</a>
              </small></p>
            </div>
          </div>
        </div>
      </div>
    </footer>

    <a href="#top" id="back_top">
        <i class="icon-angle-up"></i>
    </a>


    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <!-- <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script> -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/1.1.1/typed.min.js"></script>
    <script src="https://rawgithub.com/markdalgleish/stellar.js/master/jquery.stellar.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    <script src="js/isotope.pkgd.min.js"></script>
    <script src="js/main.js"></script>

    <script>


    </script>

</html>
