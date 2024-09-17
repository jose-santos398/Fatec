function dados() {
    const ds = [
        {id:1, nome:"Goku CANECA GOKU"},
        {id:2, nome:"CAMISETA DRAGON BALL"},
        {id:3, nome:"CANECA ESTILIZADA DRAGON BALL Z"},
        {id:4, nome:"CAMISETA SUPER SAIYAJIN"},
        {id:5, nome:"CANECA GOKU GENERATIONS"},
        {id:6, nome:"BONÉ GOKU"},
        {id:7, nome:"QUADRO INSTINTO SUPERIOR"},
        {id:8, nome:"MOUSEPAD ESTILIZADO GOKU"},
        {id:9, nome:"TECLADO MECANICO DRAGON BALL SUPER RGB, USB/BLUETOOTH"}
    ]
    return ds
}

const camisetas = dados();
let carrinho = [];

function comprar(id_recebido) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.push({ id: id_recebido });
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    
    console.log("Item adicionado ao carrinho:", { id: id_recebido });
    alert("Item adicionado ao carrinho!");
    
    console.log("Carrinho atual:", carrinho);

    atualizar_carrinho();
}


function atualizar_carrinho() {
    let lista = document.getElementById('lista-carrinho');
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    carrinho.forEach(item => {
        let li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = `1x ${camisetas[item.id - 1].nome} - R$ 49,90`;
        lista.appendChild(li);
    });

    let items_carrinho = parseFloat(carrinho.length)
    total.textContent = `TOTAL: R$${(items_carrinho * 49.90).toFixed(2)}`;
}
