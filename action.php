<?php

use PHPMailer\PHPMailer\PHPMailer;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

/* =====================================
Action.php
======================================*/

if (isset($_POST["action"])) {

    function test_input($data)
    {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    $txtName = $txtEmail = $txtPhone = $txtMsg = "";
    $isValid = true;

    $emailRe = '/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/';
    $phoneRe = '/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/';

    // validate name
    if (!isset($_POST["txtName"]) || empty($_POST["txtName"]) || is_null(empty($_POST["txtName"]))) {
        $isValid = false;
    } else {
        $txtName = test_input($_POST["txtName"]);
    }

    // validate email
    if (!isset($_POST["txtEmail"]) || empty($_POST["txtEmail"]) || is_null(empty($_POST["txtEmail"]))) {
        $isValid = false;
    } else {
        $txtEmail = test_input($_POST["txtEmail"]);
        if (!preg_match($emailRe, $txtEmail)) {
            $isValid = false;
        }
    }

    // validate phone
    if (!isset($_POST["txtPhone"]) || empty($_POST["txtPhone"]) || is_null(empty($_POST["txtPhone"]))) {
        $isValid = false;
    } else {
        $txtPhone = test_input($_POST["txtPhone"]);
        if (!preg_match($phoneRe, $txtPhone)) {
            $isValid = false;
        }
    }

    // validate message
    if (!isset($_POST["txtMsg"]) || empty($_POST["txtMsg"]) || is_null(empty($_POST["txtMsg"]))) {
        $isValid = false;
    } else {
        $txtMsg = test_input($_POST["txtMsg"]);
        if (!strlen($txtMsg) > 10) {
            $isValid = false;
        }
    }

    /*--------------------------------------------------------------------------------------------
    SEND EMAIL
    ---------------------------------------------------------------------------------------------*/

    // validate all
    if (!$isValid) {

        echo "Some fields are not correct! Please check.";

    } else {

        $mail = new PHPMailer();

        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'legenda963@gmail.com';
        $mail->Password = 'NajvecaLegenda963!';
        $mail->Port = 465; // ili 587
        $mail->SMTPSecure = 'ssl';

        $mail->isHTML(true);
        $mail->setFrom('legenda963@gmail.com', 'NajvecaLegenda963!', 'aaaa');
        $mail->addAddress('anis.dlakic.fit@gmail.com');

        // Content
        $mail->isHTML(true); // Set email format to HTML
        $mail->Subject = $txtName;
        $mail->Body = 'Phone: <b>' . $txtPhone . '</b><div>' . $txtMsg . '</div>';

        if ($mail->send()) {
            echo 'Email is sent!';
        } else {
            echo $mail->ErrorInfo;
        }
    }

}
