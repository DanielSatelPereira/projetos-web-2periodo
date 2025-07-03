<?php
echo "Olá amiguinhos!<br>";

//Criação de variavel
$idade = 19;
echo $idade;

//Operações matemáticas
$soma = 2 + 2;
$subtracao = 4 - 2;
$multiplicacao = 2 * 2;
$divisao = 4 / 2;

echo "<br>";

//Tipos de dados
$idade = 20; // integer
echo "$idade <br>";
$texto = "Olá tudo bem? <br>"; // string
$divisao = 10 / 3; // float
$verdadeiro = true; // boolean
$falso = false; // boolean

echo 'Olá, eu tenho ' . $idade . ' anos'; // ' nao consegue processar as variaveis dentro o texto e meio raro
echo "<br>";
echo "Olá, eu tenho $idade anos"; // consegue processar as variaveis dentro o texto e mais comum
?>

<main>
    <h1>Entre em Contato:</h1>
    <form name="form1" method="post" action="enviar.php">

        <label for="nome">Seu nome:</label>
        <input type="text" name="nome" id="nome">
        <br>
        <label for="email">Seu e-mail:</label>
        <input type="text" name="email" id="email">
        <br>
        <label for="mensagem">Sua mensagem:</label>
        <textarea name="mensagem" rows="5"></textarea>
        <br>
        <button type="submit">Enviar Mensagem</button>

    </form>
</main>