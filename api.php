<?php

$jsonString = file_get_contents('work.json');
$jsonArray = json_decode($jsonString, true);
$work = [];

// get all objects
for($i = 0; $i < count($jsonArray); $i++){
    $temp = (object) $jsonArray[$i];
    array_push($work, $temp);
}

// get distinct categories
$categories = [];
foreach ($work as $temp){
    if(!in_array($temp->category, $categories, true)){
        array_push($categories, $temp->category);
    }
}

// return object by id
function findByID($id, $array){
    foreach ($array as $temp){
        if($temp->id == $id) {
            return $temp;
        }
    }
}