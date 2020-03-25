<?php

require_once "api.php";

$temp_object = "";

if(isset($_GET['id'])){
    $temp_id = $_GET['id'];
    $temp_object = findByID($temp_id, $work);
} else {
    header("index.php");
}

?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Anis | Portfolio</title>

    <link rel="stylesheet" href="fonts/icomoon/style.css" />
    <link rel="stylesheet" href="fonts/line-icons/style.css" />
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
    />
    <link rel="stylesheet" href="css/style.css" />
    <link rel="stylesheet" href="css/responsive.css" />
  </head>


  <body id="top" class="single_page">
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
          <h1><?php echo $temp_object->name ?></h1>
        </div>
      </div>
    </div>

    <div class="col-lg-8 m-auto section_area" id="portfolio_single_area">
      <div class="portfolio-single-item">
        <div class="container">
          <div class="row">
            <div class="col-md-8 mb-5">
              <h2>What We Do</h2>
              <hr />
              <p>
                  <?php echo $temp_object->description ?>
              </p>

              <a class="btn btn-primary btn-lg" href="#">View Live</a>
            </div>

          </div>
        </div>
      </div>
    </div>

    <footer class="site_footer">
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
    </footer>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <!-- <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script> -->
    <script src="https://rawgithub.com/markdalgleish/stellar.js/master/jquery.stellar.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    <script src="js/isotope.pkgd.min.js"></script>
    <script src="js/main.js"></script>

    <script></script>
  </body>
</html>
