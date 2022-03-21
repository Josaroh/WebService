<?php
    $url = "http://lakartxela.iutbayonne.univ-pau.fr/~nvgouvet/PHP/ProjetWebService/WebServices_API/Api/Api_TeamUp/activite.php";
    $activites = file_get_contents($url);

    $listeActivite=json_decode($activites);


    foreach($listeActivite as $uneActivite){
        var_dump($uneActivite);
    }




?>

<html>
    <head>


    </head>
    <body>


    </body>
</html>