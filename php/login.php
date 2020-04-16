<?php

 

session_start();
include("conexao.php");

$email = $_POST["email"];
$senha = $_POST["password"];
// Condição que não permite o acesso a página 'login.html' com login e senha vazios.
// Redireciona para a 'home.html' do sistema.



if(empty($email) || empty($senha)){
    header("Location: ../page/home.html");
    exit();
}

$emailSessao = mysqli_real_escape_string($conexao, $email);
$passwordSessao = mysqli_real_escape_string($conexao, $senha); 

$verifica = "select nome, sobrenome, email from usuario where email = '{$emailSessao}' and senha = '{$passwordSessao}'"; // Comparação com a tabela do bando de dados.


$resultado = mysqli_query($conexao, $verifica);

$row = mysqli_num_rows($resultado);  // Valida a autenticação

//Se usuário for válido, entra no sistema, se não, redireciona para a home.

// $retorno = {};

if($row == 1){
    $_SESSION['email'] = $email;
    
    $retorno->conectou = true;
    $retorno->endereco = 'catalogo.php'; 
    
}else{
    $retorno->conectou = false;
    $retorno->endereco = '../page/home.html'; 

    //header('Location: ../page/home.html');
    //exit();
}

echo json_encode($retorno);



?>



