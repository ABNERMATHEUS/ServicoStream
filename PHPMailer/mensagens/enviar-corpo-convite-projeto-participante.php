
 <?php

	$message .= '</div>';
	$message .= '<table width="100%" style="background-color: white; ">';
	$message .= '<tr>';
	$message .= '<td style="padding: 10px; text-align: center;">';
	$message .= 'O usuário <b>'.$tUsuarioEmail.'</b> da plataforma <b>Copel+</b> está lhe convidando para participar de seu projeto <b>'.$tTituloProjetoAtual.'</b> como Participante. <br><br> <b>Descrição do projeto:</b> '.$tDescricaoProjetoAtual.'.<br><br>Click no link abaixo para ser redirecionado a plataforma e se cadastrar.';
	$message .= '</td>';
	$message .= '</tr>';
	$message .= '</table>';

	$message .= '<table width="100%" style="background-color: white; ">';
	$message .= '<tr>';
	$message .= '<td style="padding: 10px; text-align: center;">';

	$message .= '<a style="background-color: #F3863F; color: white; border: none; padding: 10px; cursor: pointer; font-size: 16px; padding-top: 10px; padding-bottom: 10px; padding-left: 15px; padding-right: 15px; text-decoration: none; " href="http://'.$endereco.$porta.'/plataforma">Acesso a Plataforma</a>';

	$message .= '</td>';
	$message .= '</tr>';
	$message .= '</table>';

?>





