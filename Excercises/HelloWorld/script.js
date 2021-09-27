//this is my script
function  print_date(){
    //para buscar uma 'tag do html usa-se "document.getElementById('%elementoID')" seguido de '. e o comando a executar!
    document.getElementById("demo").innerHTML = "Date of today is:"

    document.getElementById("tt").style.color="#ffffff";
    document.getElementById("tt").innerHTML = Date();
    document.getElementById("tt").style.fontSize= '20pt';

    document.getElementById('but').innerHTML = "You hit me!";
}