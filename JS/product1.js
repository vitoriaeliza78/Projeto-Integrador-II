let count = 0;

function COMPRAR() {
  count += 1;
  const carrinho = document.getElementById("cart-item-count");
  carrinho.style.display = "block";
  carrinho.innerText = count;

  let imgElement = document.getElementsByClassName("img-tela");
  let imgSrc = imgElement.src;
  let texto = document.getElementById("produto-card").innerText;
  let preco = document.getElementById("preco-card").innerText;

  let itensLateral = document.createElement("div");
  itensLateral.style.display = "flex";
  itensLateral.style.alignItems = "center";
  itensLateral.style.gap = "10px";
  itensLateral.style.borderBottom = "1px solid #fff"; 

  //Cria a imagem
  let img = documeto.createElement("img");
  img.src = imgSrc;
  img.style.width="50px";
  img.style.height="50px";

  let textoElemento = document.createElement("p");
  textoElemento.innerText = texto;
  
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



