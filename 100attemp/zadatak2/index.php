<?php 

echo "<h2>Zadatak 2</h2>";

$enteredAge = 22;
$currentYear = date("Y");
$birthYear = $currentYear - $enteredAge;
echo "Unijete godine: " . $enteredAge . " godina rodjenja: " . $birthYear;