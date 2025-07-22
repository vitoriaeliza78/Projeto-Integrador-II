let count = 0;

function COMPRAR(produtoId) {
  
  const carrinho = document.getElementById("cart-item-count");

  count += 1;
  carrinho.style.display = "flex";
  carrinho.innerText = count;

  const produto = document.getElementById(produtoId)
  console.log(produto);

  // itens do carrinho lateral
  let imgElement = produto.querySelector(".img-tela");
  let imgSrc = imgElement.src;
  let texto = produto.querySelector(".product_descricao").innerText;
  let preco = produto.querySelector(".descricao_preco").innerText;

  console.log("elementos: ", imgSrc, texto, preco);
 
  let itensLateral = document.createElement("div");
  itensLateral.style.display = "flex";
  itensLateral.style.alignItems = "center";
  itensLateral.style.gap = "30px";
  itensLateral.style.borderBottom = "1px solid #fff"; 

  //Cria a imagem
  let img = document.createElement("img");
  img.src = imgSrc;
  img.style.width="70px";
  img.style.height="80px";

  // Cria o nome do produto
  let textoElemento = document.createElement("p");
  textoElemento.innerText = texto;

  // Cria o preço do produto
  let precoElemento = document.createElement("p");
    precoElemento.innerText = preco;
  
  let iconeApagar = document.createElement("i");
  iconeApagar.className = "bi bi-trash";
  iconeApagar.style.cursor= "pointer";
  iconeApagar.style.color="black";

  iconeApagar.addEventListener("click", function(){
    itensLateral.remove();

    count -= 1;
    carrinho.innerText = count;

    if (count === 0) {
        document.getElementById("botoes").style.display = "none";
        carrinho.style.display = "none";
    }
});

  itensLateral.appendChild(img);
  itensLateral.appendChild(textoElemento);
  itensLateral.appendChild(precoElemento);
  itensLateral.appendChild(iconeApagar);
  
  document.getElementById("iten-carrinho").appendChild(itensLateral);
  document.getElementById("botoes").style.display = "flex";
  console.log("oii");

}

function abrirCarrinho() {
  let botoes = document.getElementById("botoes");
  if (count === 0) {
    botoes.style.display = "none";
  } else {
    botoes.style.display = "flex";
  }
  // resto do código pra abrir o carrinho
}

function apareceCarrinho() {
  let carrinhoLateral = document.getElementById("sideBar")
  carrinhoLateral.style.display = "block";
}

function fecharCarrinho() {
  document.getElementById("sideBar").style.display = "none";
}
function mostrar(pergunta) {
  const resposta = pergunta.nextElementSibling;

  if (resposta.style.display === "none" || resposta.style.display === "") {
    resposta.style.display = "block";
  } else {
    resposta.style.display = "none";
  }
}



