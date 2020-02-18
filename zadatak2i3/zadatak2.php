<?php 

function povrsinaOsnove($x,$y){ return $x*$y; }

function obimOsnove($x,$y){ return 2*$x*$y; }

function povrsinaOmotaca($x,$y){ return (2*$x*$y)+(2*$x*$y); }

function povrsinaKvadra($x,$y){ return 2*povrsinaOsnove($x,$y) + povrsinaOmotaca($x,$y); }

function zapreminaKvadra($x,$y,$z){ return $x*$y*$z; }
    
if($_SERVER["REQUEST_METHOD"] == "GET"){

    !empty($_GET['X']) ? $x = htmlspecialchars($_GET['X']) : die('Prvo popunite formu!');
    !empty($_GET['Y']) ? $y = htmlspecialchars($_GET['Y']) : die('Prvo popunite formu!');
    !empty($_GET['Z']) ? $z = htmlspecialchars($_GET['Z']) : die('Prvo popunite formu!');

    $povrsinaOsnove = povrsinaOsnove($x,$y);
    $obimOsnove = obimOsnove($x,$y);
    $povrsinaOmotaca = povrsinaOmotaca($x,$y,$z);
    $povrsinaKvadra = povrsinaKvadra($x,$y,$z);
    $zapreminaKvadra = zapreminaKvadra($x,$y,$z);

    $assoc = array(
        "Dimenzije_kvadra: " => array(
            "X" => $x,
            "Y" => $y,
            "Z" => $z
        ),
        "Zapremina_kvadra:" => zapreminaKvadra($x,$y,$z),
        "Povrsina_kvadra:" => povrsinaKvadra($x,$y,$z),
        "Osnova_kvadra:" => array(
            "Strane:" => array(
                "X:" => $x,
                "Y:" => $y
            ),
            "Povrsina:" => povrsinaOsnove($x,$y)
        ),
        "Povrsina_omotaca:" => povrsinaOmotaca($x,$y,$z)
    );

    header("Content-Type: application/json");
    echo json_encode($assoc);

} else {

    !empty($_POST['X']) ? $x = htmlspecialchars($_POST['X']) : die('X nepoznato');
    !empty($_POST['Y']) ? $y = htmlspecialchars($_POST['Y']) : die('Y nepoznato');
    !empty($_POST['Z']) ? $z = htmlspecialchars($_POST['Z']) : die('Z nepoznato');

    $povrsinaOsnove = povrsinaOsnove($x,$y);
    $obimOsnove = obimOsnove($x,$y);
    $povrsinaOmotaca = povrsinaOmotaca($x,$y,$z);
    $povrsinaKvadra = povrsinaKvadra($x,$y,$z);
    $zapreminaKvadra = zapreminaKvadra($x,$y,$z);

    echo <<<HTML
    <link rel="stylesheet" type="text/css" href="../style.css">    
    <table>
        <thead>
            <th>X</th>
            <th>Y</th>
            <th>Z</th>
            <th>Povrsina osnove kvadra</th>
            <th>Obim osnove kvadra</th>
            <th>Povrsina omotaca</th>
            <th>Povrsina kvadra</th>
            <th>Zapremina kvadra</th>
        </thead>
        <tbody>
            <tr>
                <td>$x</td>
                <td>$y</td>
                <td>$z</td>
                <td>$povrsinaOsnove</td>
                <td>$obimOsnove</td>
                <td>$povrsinaOmotaca</td>
                <td>$povrsinaKvadra</td>
                <td>$zapreminaKvadra</td>
            </tr>
        </tbody>
    </table>
    <a href="index2.html" class="btn back">Nazad</a>
HTML;

}

?>