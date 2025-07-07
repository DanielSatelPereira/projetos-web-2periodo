<?php
$pageTitle = "Detalhes do Produto";
include "header.php";
include "dados.php";

// Pega o ID da URL
$id = isset($_GET["id"]) ? (int)$_GET["id"] : 0;

// Verifica se o produto existe
if (!isset($produtos[$id])) {
    echo "<main><h2>Produto não encontrado.</h2></main>";
    include "footer.php";
    exit;
}
?>

<main>
    <div class="grid-2">
        <div class="coluna">
            <img src="imagens/<?= htmlspecialchars($produtos[$id]["imagem"]) ?>" alt="<?= htmlspecialchars($produtos[$id]["nome"]) ?>">
        </div>
        <div class="coluna">
            <h2><?= htmlspecialchars($produtos[$id]["nome"]) ?></h2>
            <p><strong>R$ <?= htmlspecialchars($produtos[$id]["valor"]) ?></strong></p>
        </div>
    </div>
</main>

<?php
include "footer.php";
?>
