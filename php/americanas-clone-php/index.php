<?php
include "header.php";
include "dados.php";
?>

<main>
    <h1>Produtos destaque:</h1>
    <div class="grid">

        <?php
        //echo "<pre>";
        //var_dump($produtos);
        $contador = 1;
        shuffle($produtos);
        foreach ($produtos as $produto) {


            ?>
            <!--trecho do HTML-->
            <div class="coluna">
                <img src="imagens/<?= $produto["imagem"] ?>" alt="<?= $produto["nome"] ?>">
                <p>
                    <strong><?= $produto["nome"] ?></strong><br>
                    R$ <?= $produto["valor"] ?>
                </p>
                <p><a href="produto.php?id=<?= $produto["id"] ?>">Detalhes</a>
                </p>
            </div>
            <?php
            $contador++;
            if ($contador > 4) break;
        }
        ?>
    </div>
</main>

<?php
include "footer.php";
?>