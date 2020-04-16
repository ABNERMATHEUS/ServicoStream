
 <?php

	$mail= new PHPMailer;
	$mail->IsSMTP(); 
	$mail->CharSet = 'UTF-8';   
	$mail->SMTPDebug = 0;       // 0 = não mostra o debug, 2 = mostra o debug (mensagens de erro)
	$mail->SMTPAuth = true;     // Autenticação ativada
	$mail->SMTPSecure = 'ssl';  
	$mail->Host = 'smtp.gmail.com'; 
	$mail->Port = 465; 
	$mail->Username = 'eduardo.nunes.lino'; // eu sempre usei gmail 
	$mail->Password = 'ppgia@2017';
	$mail->SetFrom('eduardo.nunes.lino@gmail.com', 'Copel+');
	$mail->addAddress($tRecuperarSenhaEmail,'');
	$mail->Subject = "Recuperar senha no Copel+";
	$mail->msgHTML($message);
       
	$mail->send();

?>










