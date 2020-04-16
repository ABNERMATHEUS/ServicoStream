<?php

session_start();
if(!$_SESSION ['email']){
    header("Location: ../page/home.html");
    exit();
}

?>