<?php
session_start();
session_destroy(); //Destroi todas as sessões.
header("Location: ../page/home.html");
exit();


?>