function clickMe() 
{
   //alert('Chegou aqui')

    //console.log("Teste do console");

    //o getElementById serve pra pegar elementos HTML através do ID
    console.log(document.getElementById("title"));
    console.log(document.getElementById("title").innerText);

    // Busca todos os elemento que tenham a class text, retorna uma lista(array)
    console.log(document.getElementsByClassName('text'));
    console.log(document.getElementsByClassName('text')[0]);
}