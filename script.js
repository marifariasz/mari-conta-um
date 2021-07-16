const btn = document.querySelector(".botao");
btn.addEventListener("click",function(e){
    e.preventDefault();
    const objeto = document.querySelector(".inputnumero");
    const numero = objeto.value;
    
    if(numero>=0){
        DOM.adicionar_lista(numero);
	
    }else{
        alert("Digite um número válido")
    } 
});

const DOM={
    adicionar: document.querySelector(".tabela"),
    adicionar_lista(numero){
        const tabela = document.createElement('table');
        const caption = document.createElement("caption");
        const cabecalho = document.createElement("thead");
        const corpo = document.createElement("tbody");
        const p = document.createElement('p');
        tabela.innerHTML= `<table class="tabela">
        <caption><strong> TABUADA DO NÚMERO ${numero}</strong></caption>
        <tr>
        <th rowspan="1"></th>
        </tr>
        <tr>
            <th>Operação</th>
            <th>Resultado</th>
        </tr>
        <tbody>
        <tr>
            <th>${numero} x 0</th>
            <th>${numero*0}</th>
        </tr>
        <tr>
            <th>${numero} x 1</th>
            <th>${numero*1}</th>
        </tr>
        <tr>
            <th>${numero} x 2</th>
            <th>${numero*2}</th>
        </tr>
        <tr>
            <th>${numero} x 3</th>
            <th>${numero*3}</th>
        </tr>
        <tr>
            <th>${numero} x 4</th>
            <th>${numero*4}</th>
        </tr>
        <tr>
            <th>${numero} x 5</th>
            <th>${numero*5}</th>
        </tr>
        <tr>
            <th>${numero} x 6</th>
            <th>${numero*6}</th>
        </tr>
        <tr>
            <th>${numero} x 7</th>
            <th>${numero*7}</th>
        </tr>
        <tr>
            <th>${numero} x 8</th>
            <th>${numero*8}</th>
        </tr>
        <tr>
            <th>${numero} x 9</th>
            <th>${numero*9}</th>
        </tr>
        <tr>
            <th>${numero} x 10</th>
            <th>${numero*10}</th>
        </tr>
    </tbody>

         </table>`
         DOM.adicionar.appendChild(tabela);
       }
}
