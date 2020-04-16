
 <?php

	$message .= '</div>';
	$message .= '<table width="100%" style="background-color: white; ">';
	$message .= '<tr>';
	$message .= '<td style="padding: 10px; text-align: center;">';
	$message .= 'Seu código para recupear a senha é: <br><br> <b>'.$codigo.'</b>';
	$message .= '</td>';
	$message .= '</tr>';
	$message .= '</table>';

	$message .= '<table width="100%" style="background-color: white; ">';
	$message .= '<tr>';
	$message .= '<td style="padding: 10px; text-align: center;">';

	$message .= '<a style="background-color: #F3863F; color: white; border: none; padding: 10px; cursor: pointer; font-size: 16px; padding-top: 10px; padding-bottom: 10px; padding-left: 15px; padding-right: 15px; text-decoration: none; " href="http://'.$endereco.$porta.'/plataforma/password?tCodigo='.$codigo.'">Nova Senha</a>';

	$message .= '</td>';
	$message .= '</tr>';
	$message .= '</table>';

?>









