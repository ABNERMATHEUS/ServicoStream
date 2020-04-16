<?php


date_default_timezone_set('Etc/UTC');
require '../PHPMailer/PHPMailerAutoload.php';

$tituloEmail = "Confirmação de cadastro.";

$message = 'E-mail de confirmação de cadastro no MOJAL Streaming. Obrigado!';

$mail= new PHPMailer;
$mail->IsSMTP(); 
$mail->CharSet = 'UTF-8';   
$mail->SMTPDebug = 2;       // 0 = nao mostra o debug, 2 = mostra o debug
$mail->SMTPAuth = true;     
$mail->SMTPSecure = 'ssl';  
$mail->Host = 'smtp.gmail.com'; 
$mail->Port = 465; 
$mail->Username = 'mojal2020@gmail.com'; 
$mail->Password = 'mojinha2020';
$mail->SetFrom('mojal2020@gmail.com', 'MOJAL Streaming');
$mail->addAddress($email);
$mail->Subject = $tituloEmail;
$mail->msgHTML($message);
   
$mail->send();






?>