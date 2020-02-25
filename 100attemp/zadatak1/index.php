<?php 

$name_surname = $email = $phone = $file = "";
$name_surnameErr = $emailErr = $phoneErr = $fileErr = "";
$isValid = true;

if (isset($_POST['submit'])) {

    // validate name_surname
    if (!isset($_POST["name__surname"]) || empty($_POST["name__surname"]) || is_null(empty($_POST["name__surname"]))) {
        $name_surnameErr = "&#10007 &nbsp; Molimo unesite ime!";
        $isValid = false;
    } else {
        $name_surname = test_input($_POST["name__surname"]);
        if (!preg_match("/^[a-zA-Z]*[ ][a-zA-Z]*$/", $name_surname) || strlen($name_surname) > 50) {
            $name_surnameErr = "&#10007 &nbsp; Dozvoljeni su karakteri, prazan prostor i da nije dužine preko 50 karaktera";
            $isValid = false;
        }
    }

    // validate email
    if (!isset($_POST["email"]) || empty($_POST["email"]) || is_null(empty($_POST["email"]))) {
      $emailErr = "&#10007 &nbsp; Molimo unesite email!";
      $isValid = false;
    } else {
        $email = test_input($_POST["email"]);
        if (!strpos($email, "@") || !strpos($email, ".com")) {
            $emailErr = "&#10007 &nbsp; Email mora da sadrži karaktere ​@ ​i ​.com";
            $isValid = false;
        }
    }

    // validate phone +123/123
    if (!isset($_POST["phone"]) || empty($_POST["phone"]) || is_null(empty($_POST["phone"]))) {
      $phoneErr = "&#10007 &nbsp; Molimo unesite broj telefona!";
      $isValid = false;
    } else {
        $phone = test_input($_POST["phone"]);
        if (!preg_match("/\d*[\/+-]*$/", $phone) || strlen($phone) < 3) {
            $phoneErr = "&#10007 &nbsp; Broj telefona može da sadrži samo brojeve i specijalne karaktere (​/+-​) i da jeminimalne dužine 3 karaktera";
            $isValid = false;
        } 
    }

    // get file info
    $file = "images/" . basename($_FILES['upload']['name']);
    $fileType = pathinfo($file, PATHINFO_EXTENSION);
    $fileSize = $_FILES['upload']['size'];
    
    // validate file 
    if(!empty($_FILES['upload']['name'])) {
      if(!file_exists($file)){
          if($fileSize <= 5000000){
              if($fileType == 'svg' || $fileType == 'SVG' || $fileType == 'jpg' || $fileType == 'JPG' || $fileType == 'png' || $fileType == 'PNG'){
                move_uploaded_file($_FILES['upload']['tmp_name'], $file);
            } else {
                $fileErr = "Tip fajla nije ok";
                $isValid = false;
            }
          } else {
            $fileErr = "Fajl ne smije biti veci od 5MB";
            $isValid = false;
          }
      } else {
          $fileErr = "Fajl vec postoji!";
          $isValid = false;
      }
    } else {
        $fileErr = "Molimo odaberite fajl!";
        $isValid = false;
    }
  
    // validate all 
    if($isValid) {
        echo "<script>alert('Uspjesan upload!')</script>";
    }
  }

  function test_input($data) {
      $data = trim($data);
      $data = stripslashes($data);
      $data = htmlspecialchars($data);
      return $data;
  }

?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Zadatak 1</title>
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <!-- Ime i prezime, email, broj telefona, slika​ (fajl) i dugme za submit. -->
    <section>
      <div class="container">
        <form
          action="<?php echo $_SERVER['PHP_SELF']; ?>"
          method="post"
          enctype="multipart/form-data"
          id="firstForm"
        >
          <h2 class="form-title">Zadatak 1</h2>
          <div class="form__group">
            <label for="name__surname">Ime i Prezime</label>
            <input type="text" name="name__surname" class="form__control" value="<?php echo $name_surname; ?>"/>
            <span class="form__err"><?php echo $name_surnameErr; ?></span>
          </div>
          <div class="form__group">
            <label for="email">Email</label>
            <input type="text" name="email" class="form__control" value="<?php echo $email; ?>"/>
            <span class="form__err"><?php echo $emailErr; ?></span>
          </div>
          <div class="form__group">
            <label for="phone">Telefon</label>
            <input type="text" name="phone" class="form__control" value="<?php echo $phone; ?>"/>
            <span class="form__err"><?php echo $phoneErr; ?></span>
          </div>
          <div class="form-group">
            <label for="upload">Slika</label>
            <input type="file" name="upload" class="form__control" />
            <span class="form__err"><?php echo $fileErr; ?></span>
          </div>
          <div class="form__btns">
            <input type="submit" value="Submit" name="submit" class="btn" />
          </div>
        </form>
      </div>
    </section>
  </body>
</html>
