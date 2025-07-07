<?php

$idade = $_GET["idade"];

echo "Você só pode entrar se tiver a partir de 18 anos ou ";
echo "a partir de 16 anos acompanhado <br>";

if ($idade >= 18) {
    echo "Você tem $idade anos. Pode entrar sozinho. <br>";
} else {
    echo "Você só tem $idade anos. Você não pode entrar sozinho. <br>";
}