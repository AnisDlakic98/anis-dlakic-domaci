<?php

// Napraviti  varijablu string: “​The quick brown fox jumps over the lazy dog​”.
// Shuffle-ovati riječi i napraviti sljedeće od dobijenog:
// a.Spojiti sve riječi i lower-case-ovati ih
// b.Ubaciti prije zadnje riječi string ‘​Obuka’​ i staviti da svaka riječ počinje savelikim slovom
// c.Zamijeniti svako slovo ​o​ za karakter 
// ​*Napomena​: a i b, c su zasebni zadaci sa istom varijablom. Ispisati rezultate 

echo "<h2>Zadatak 3</h2>";

$string = "The quick brown fox jumps over the lazy dog";
$shuffled = str_shuffle($string);
$array = explode(" ", $string);
$joined = "";

foreach($array as $key => $value) {
    $joined .= strtolower($value);
}

array_splice($array, count($array) - 1, 0, "Obuka");
$capitalized = ucwords(implode($array));
$replaced = str_replace("o", ".", ($string));

echo "<strong>Original: </strong>" . $string . "</br>";
echo "<strong>Shuffle: </strong>" . $shuffled . "</br>";
echo "<strong>Join & lowercase: </strong>" . $joined . "</br>";
echo "<strong>Added 'Obuka' & capitalized: </strong>" . $capitalized . "</br>";
echo "<strong>Replaced with characther: </strong>" . $replaced . "</br>";



