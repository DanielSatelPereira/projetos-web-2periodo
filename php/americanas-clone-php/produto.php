<?php
    include "header.php";
    include "dados.php";
    $id = $_GET["id"];
    //echo "<pre>";
    //var_dunp($_GET);
    ?>
<main>
    <div class="grid-2">
        <div class="coluna"><img src="imagens/<?= $produtos[$id]["imagem"]?>" alt="">
    </div>
    <div class="coluna">
        <h2><?= $produtos[$id]["nome"]?></h2>
        <p>R$<?=$produtos[$id]["valor"]?></p>
    </div>    
</div>
</main>

<?php
include "footer.php";
?>