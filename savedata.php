<?php
$host = "localhost"; 
$user = "root"; 
$password = ""; 
$dbname = "pdk40k"; 

$connection = mysqli_connect($host, $user, $password,$dbname);

$method = $_SERVER['REQUEST_METHOD'];
$request = explode('/', trim($_SERVER['PATH_INFO'],'/'));


if (!$connection) {
  die("Connection failed: " . mysqli_connect_error());
}

switch ($method) {
    case 'GET':
      $id = $_GET['playerID'];
      $sql = "select * from player"; 
      break;
}

// run SQL statement
$result = mysqli_query($connection,$sql);

// die if SQL statement failed
if (!$result) {
  http_response_code(404);
  die(mysqli_error($connection));
}

if ($method == 'GET') {
    if (!$id) echo '[';
    for ($i=0 ; $i<mysqli_num_rows($result) ; $i++) {
      echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
    }
    if (!$id) echo ']';
  } elseif ($method == 'POST') {
    echo json_encode($result);
  } else {
    echo mysqli_affected_rows($connection);
  }

$connection->close();