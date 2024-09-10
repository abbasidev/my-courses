<?php
$input    = $_POST['json'];
$books    = json_decode($input , true);
$output   = array();

foreach($books as $book){
     $output[] = $book['title'];
}

echo json_encode($output);