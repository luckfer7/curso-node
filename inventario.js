let inventario = [];

function adcProduto (nome, quantidade, preco) {
    let produto = {
        nome: nome,
        quantidade: quantidade,
        preco: preco
    }

    inventario.push(produto)
}

function remProduto (nome) {
    inventario = inventario.filter(produto => produto.nome !== nome)
}

function atualizarQuantidade (nome, novaQuantidade) {
    let produto = inventario.find(produto => produto.nome === nome)
    if (produto) {
        produto.quantidade = novaQuantidade;
    } else {
        console.log("Produto não encontrado");
    }
}

function atualizarPreco (nome, novoPreco) {
    let produto = inventario.find(produto => produto.nome === nome)
    if (produto) {
        produto.preco = novoPreco;
    } else {
        console.log("Produto não encontrado");
    } 
}

function calcularValorTotal () {
    let valorTotal = 0;
    for(let i = 0; i < inventario.length; i++) {
        valorTotal += inventario[i].quantidade * inventario[i].preco;
        
    }
    return valorTotal;
}

adcProduto("banana", 100, 1.90);
adcProduto("laranja", 321, 0.74);
adcProduto("maca", 41, 3.90);
adcProduto("pera", 540, 0.35);
adcProduto("amexa", 20, 9.15);
adcProduto("uva", 35, 6.34)

atualizarQuantidade("maca", 60);
atualizarPreco("maca", 3.0)

console.log("Preço total do inventário: " + calcularValorTotal());

console.log(inventario);