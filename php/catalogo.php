<!DOCTYPE html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Catalogo</title>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        <link rel="stylesheet" href="../style/catalogo.css">
    </head>
    <body>

        <?php
        session_start();
        include('verifica_login.php');
        ?>

        <h5>Bem vindo de novo, <?php echo $_SESSION['email'];?>! </h5>
        <h6><a href="logout.php">Sair</a></h6>
        
    </body>
</html>