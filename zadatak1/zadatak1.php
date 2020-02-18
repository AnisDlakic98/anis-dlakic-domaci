<?php

$firstName = $lastName = $phone = $email = $year = "";

if(isset($_POST['submit'])){

    !empty($_POST['firstName']) ? $firstName = htmlspecialchars($_POST['firstName']) : die('Prvo popunite formu!');
    !empty($_POST['lastName']) ? $lastName = htmlspecialchars($_POST['lastName']) : die('Prvo popunite formu!');
    !empty($_POST['phone']) ? $phone = htmlspecialchars($_POST['phone']) : $phone = die('Prvo popunite formu!');
    !empty($_POST['email']) ? $email = htmlspecialchars($_POST['email']) : $email = die('Prvo popunite formu!');

    switch ($_POST['year']) {
        case 'I':
            $year = "Prva Godina";
            break;
        case 'II':
            $year = "Druga Godina";
            break;
        case 'III':
            $year = "Treca Godina";
            break;
        case 'IV':
            $year = "Specijalisticke Studije";
            break;
        default:
            $year = "nepoznato";
            break;
    }

    echo <<<HTML
    <link rel="stylesheet" type="text/css" href="../style.css">    
    <table>
        <thead>
        <th>Ime</th>
            <th>Prezime</th>
            <th>Telefon</th>
            <th>Email</th>
            <th>Godina studija</th>
        </thead>
        <tbody>
            <tr>
                <td>$firstName</td>
                <td>$lastName</td>
                <td>$phone</td>
                <td>$email</td>
                <td>$year</td>
            </tr>
        </tbody>
    </table>
    <a href="index1.html" class="btn back">Nazad</a>
HTML;

}

?>