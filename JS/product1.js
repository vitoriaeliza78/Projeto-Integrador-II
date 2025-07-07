let count = 1;

function COMPRAR() {
  
  const carrinho = document.getElementById("cart-item-count");
  carrinho.style.display = "block";
  carrinho.innerText = count;
  count += 1;
// itens do carrinho lateral

  let imgElement = document.querySelector(".img-tela");
  let imgSrc = imgElement.src;
  let texto = document.querySelector(".product_descricao").innerText;
  let preco = document.querySelector(".descricao_preco").innerText;

  let itensLateral = document.createElement("div");
  itensLateral.style.display = "flex";
  itensLateral.style.alignItems = "center";
  itensLateral.style.gap = "40px";
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
  
  itensLateral.appendChild(img);
  itensLateral.appendChild(textoElemento);
  itensLateral.appendChild(precoElemento);

  document.getElementById("iten-carrinho").appendChild(itensLateral);
  console.log("oii");
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



