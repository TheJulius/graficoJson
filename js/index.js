
function validation(){ //retorna true se os campos forem preenchidos
    
    var razao = document.getElementById("razao").value;
    var a1 = document.getElementById("a1").value;
    
    if( razao ==='' || a1 ===''){
        alert("Preencha todos os campos!!");
        return false;
    } else {
        return true;
    }
}

function form_submit() {

    var razao = document.getElementById("razao").value;
    var a1 = document.getElementById("a1").value;
    var qtd_de_elementos = document.getElementById("qtd_de_elementos").value;
    var pa_pg = document.getElementById("pa_pg").value;

    if (validation()){
        document.getElementById("form_id").submit(); //form submission
        console.log("FORM ENVIADO COM SUCESSO")
        alert("A1: " + a1 + "\nRazão: " + razao + "\nQuantidade de Elementos : " + qtd_de_elementos + "\nPA/PG: " + pa_pg + "\n\nDADOS ENVIADOS COM SUCESSO");
    }
}

function cria_json(){

    var razao = document.getElementById("razao").value;
    var a1 = document.getElementById("a1").value;
    var qtd_de_elementos = document.getElementById("qtd_de_elementos").value;
    var pa_pg = document.getElementById("pa_pg").value;

    
    if(validation()){

        var stringJson = '{"a1": ' + a1 +
        ', "razao": ' + razao + 
        ',"qtdElementos": ' + qtd_de_elementos + 
        ', "papg": "' + pa_pg + 
        '"}';

        var objeto = JSON.parse(stringJson);
        console.log("JSON CRIADO COM SUCESSO");
        console.log(objeto);

        return(objeto);
    }
}

function converte_json_string(arq){

    var jsonString = JSON.stringify(arq);
    console.log(jsonString);
}

function cria_arquivo(){

    var infoJson = cria_json();

    var file = new File(['"' + infoJson + '"'], "hello world.txt", {type: "text/plain;charset=utf-8"});
    FileSaver.saveAs(file);
}