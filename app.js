async function chamaLoading() {
    $("#modalLoad").modal('show');
    setTimeout(function() {
        $("#modalLoad").modal("hide");
        mostraDiamante();
    }, 4500);
}

function mostraDiamante(){

    var numero = sorteado(25, 3);
    
    for(x=1 ; x <= 25 ; x++){
        $('#botao'+ x).show();
        $('#diamante'+ x).hide();
    }

    for(x=0 ; x < numero.length ; x++){
        console.log(numero[x])
        $('#botao'+numero[x]).hide();
        $('#diamante'+numero[x]).show();
    }

}

function sorteado(max, quant) {
    var numeroS = []
    while (numeroS.length < quant) {
      e = Math.ceil(Math.random() * max);
      if (numeroS.indexOf(e) == -1) {
        numeroS.push(e)
      }
    }
   return numeroS;
}

function validarChave(){
    if($('#chaveAcesso').val() != null && $('#chaveAcesso').val() == 'hI8674Kjfs7jfs#%KF8Aks'){

        $("#modalLoadLogin").modal('show');
        setTimeout(function() {
            $("#modalLoadLogin").modal("hide");
            window.location.href = 'index.html';
        }, 4500);
    }
    else{
        alert("A chave de acesso inserido está invalida. Por favor verifique o valor informado");
    }
}