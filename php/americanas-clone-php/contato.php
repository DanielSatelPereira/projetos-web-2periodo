<?php
$pageTitle = "Contato";
include "header.php";
?>

<main>
    <h1>Fale Comigo</h1>

    <p>Entre em contato para dúvidas, sugestões ou colaborações:</p>

    <form name="formContato" onsubmit="mostrarAlerta(event)">
        <label for="nome">Seu nome:</label>
        <input type="text" name="nome" id="nome" required>

        <label for="email">Seu e-mail:</label>
        <input type="email" name="email" id="email" required>

        <label for="mensagem">Sua mensagem:</label>
        <textarea name="mensagem" rows="5" required></textarea>

        <button type="submit">Enviar Mensagem</button>
    </form>

    <p style="margin-top: 20px;">
        Enquanto o formulário está em construção, você pode entrar em contato diretamente pelo e-mail:
        <strong>danielsatelpereira@gmail.com</strong>
    </p>
</main>

<script>
    function mostrarAlerta(event) {
        event.preventDefault();
        alert("⚠️ Esta função ainda está em construção.\n\nPor favor, envie um e-mail diretamente para: danielsatelpereira@gmail.com");
    }
</script>

<?php include "footer.php"; ?>
