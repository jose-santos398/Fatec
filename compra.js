// Função para adicionar itens ao carrinho
function comprar(id, nome, preco) {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const itemExistente = carrinho.find(item => item.id === id);

    if (itemExistente) {
        itemExistente.quantidade += 1;
    } else {
        // Caso contrário, adiciona o novo item
        carrinho.push({ id, nome, preco, quantidade: 1 });
    }

    // Salva o carrinho no localStorage
    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    // Atualiza a exibição do carrinho
    atualizar_carrinho();
}

// Função para atualizar a lista de itens no carrinho
function atualizar_carrinho() {
    const lista = document.getElementById('lista-carrinho');
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    // Limpar a lista antes de atualizar
    lista.innerHTML = '';

    let totalCarrinho = 0;

    carrinho.forEach(item => {
        let li = document.createElement('li');
        li.className = 'list-group-item';

        li.textContent = `${item.quantidade}x ${item.nome} - R$ ${(item.preco * item.quantidade).toFixed(2)}`;
        lista.appendChild(li);

        totalCarrinho += item.preco * item.quantidade;
    });

    // Exibir o total no carrinho
    const total = document.getElementById('total');
    total.textContent = `TOTAL: R$ ${totalCarrinho.toFixed(2)}`;
}

// Função para finalizar a compra
function finalizar_compra() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    if (carrinho.length > 0) {
        alert("Obrigado por comprar na Loja Super!");
        
        // Limpa o carrinho após a compra
        localStorage.removeItem('carrinho'); 
        
        // Atualiza a exibição (irá mostrar "TOTAL: R$ 0.00")
        atualizar_carrinho(); 
        
        // Redireciona para a página index.html
        window.location.href = 'index.html';  
    } else {
        alert("Seu carrinho está vazio!");
    }
}
function confirma_compra() {
    alert('Adicionado item no carrinho!');
    }



// Inicializa a exibição do carrinho quando a página carrega
document.addEventListener("DOMContentLoaded", function() {
    atualizar_carrinho();
});
