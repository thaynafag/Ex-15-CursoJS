function verificar() {
    var data = new Date(); 
    var mes = data.getMonth()+1 //criar o mês atual +1 pq janeito tem valor [0]
    var dia =data.getDate() //criar o dia do mês
    var ano = data.getFullYear(); //criar o ano atual
    var fano = document.getElementById('txtano'); //buscar ano digitados dentro do box
    var fmes = document.getElementById('txtmes'); //buscar o mês digitado dentro do box
    var fdia = document.getElementById('txtdia'); //buscar dia digitado no box
    var res = document.querySelector('div#res'); //alterar a div do resultado
    var maxAno = (ano - 125); //idade máxima permitida de 12 anos
    if (fano.value.length == 0 || fano.value > ano || fano.value < maxAno) { //se não comprir os valores exigidos
        alert("[ERRO] Verifique os dados e tente novamente!");
    } else {
        var fsex = document.getElementsByName('radgen');
        var idade = ano - Number(fano.value);
        if (fmes.value > mes || fmes.value == mes && fdia.value > dia) {
            idade--
        }
        if (fdia.value > 31 || fmes.value > 12) {
            alert("[ERRO] Verifique os dados e tente novamente!");
        }
        var gênero = '';
        var img = document.createElement('img'); //criar elemento <img> 
        img.setAttribute('id', 'foto') //cria a id "foto" 
        if (fsex[0].checked) {
            gênero = 'Masculino';
            if (idade >= 0 && idade <= 13) {
                //Criança
                img.setAttribute('src', 'criançamasc.png');
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovemmasc.png');
            } else if (idade < 60 ) {
                //Adulto
                img.setAttribute('src', 'adultomasc.png');
            } else {
                //Idoso
                img.setAttribute('src', 'idosomasc.png');
            }
        } else {
            gênero = 'Feminino';
            if (idade >= 0 && idade <= 13) {
                //Criança
                img.setAttribute('src', 'criançafem.png');
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovemfem.png');
            } else if (idade < 60 ) {
                //Adulto
                img.setAttribute('src', 'adultofem.png');
            } else {
                //Idoso
                img.setAttribute('src', 'idosofem.png');
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Você é do gênero ${gênero} com a idade de ${idade} anos.`;
        res.appendChild(img) //faz a imagem aparecer no HTML
    }
}