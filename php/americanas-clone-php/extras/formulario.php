<?php include "../header.php"; ?>

<main class="container">
    <h2>Verificação de Idade</h2>

    <form action="condicoes.php" method="get">
        <label for="idade">Digite a sua idade:</label>
        <input type="number" id="idade" name="idade" required min="0" placeholder="Ex: 18">

        <button type="submit">Enviar</button>
    </form>
</main>

<?php include "../footer.php"; ?>
