<?php
// read input
$places = json_decode(file_get_contents('places.json'), true);
var_dump($places);
// $places = [
//   'place1',
//   'place2',
//   'place3',
//   'place4',
//   'museum',
//   'place6',
// ];
// process

// write output
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <!-- Bootstrap CSS -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <div class="container">
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Places</a>
        </div>
      </nav>
      <ul class="list-group">
        <?php foreach($places as $place) : ?>
          <li class="list-group-item" data-description="<?= $place['description'] ?>">
            <?= $place['title'] ?>
          </li>
        <?php endforeach ?>
      </ul>
      <!-- task1.b -->
      <!-- TODO -->
      <h1>Description</h1>
      <p id="description"></p>
    </div>
    <script src="index.js"></script>
  </body>
</html>
