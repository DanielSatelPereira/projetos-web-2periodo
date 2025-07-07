<?php
$pageTitle = "Página Inicial";
include "header.php";
include "dados.php";
?>

<main>
    <h1>Produtos em Destaque</h1>

    <div class="grid">
        <?php
        $contador = 1;
        shuffle($produtos); // Embaralha os produtos

        foreach ($produtos as $produto):
        ?>
            <div class="coluna">
                <img src="imagens/<?= $produto["imagem"] ?>" alt="<?= $produto["nome"] ?>">
                <p>
                    <strong><?= $produto["nome"] ?></strong><br>
                    R$ <?= $produto["valor"] ?>
                </p>
                <p>
                    <a href="produto.php?id=<?= $produto["id"] ?>">Ver Detalhes</a>
                </p>
            </div>
        <?php
            $contador++;
            if ($contador > 4) break;
        endforeach;
        ?>
    </div>
</main>

<?php
include "footer.php";
?>
