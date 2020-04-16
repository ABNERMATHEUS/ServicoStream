<?php

    $name = $_POST["name"];
    $last_name = $_POST["last_name"];
    $email = $_POST["email"];
    $password = $_POST["password"];

	$conexao = mysqli_connect("localhost:8889", "root", "root", "teste_moja");

    echo "insert into usuario(nome, sobrenome, email, senha) values('".$name."','".$last_name."', '".$email."', '".$password."')";


	mysqli_query($conexao, "insert into usuario(nome, sobrenome, email, senha) values('".$name."','".$last_name."', '".$email."', '".$password."')");


    include 'enviar-email.php';


?>