<?php
include "header.php";
include "dados.php";
?>

<main>
    <h1>Nossos produtos:</h1>
    <div class="grid">
        <?php foreach ($produtos as $produto): ?>
            <div class="coluna">
                <img src="imagens/<?= htmlspecialchars($produto["imagem"]) ?>" alt="<?= htmlspecialchars($produto["nome"]) ?>">
                <p>
                    <strong><?= htmlspecialchars($produto["nome"]) ?></strong><br>
                    R$ <?= htmlspecialchars($produto["valor"]) ?>
                </p>
                <p>
                    <a href="produto.php?id=<?= (int)$produto["id"] ?>">Detalhes</a>
                </p>
            </div>
        <?php endforeach; ?>
    </div>
</main>

<?php
include "footer.php";
?>
