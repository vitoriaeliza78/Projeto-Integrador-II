let count = 0;

function COMPRAR() {
  count += 1;
  const carrinho = document.getElementById("cart-item-count");
  carrinho.style.display = "block";
  carrinho.innerText = count;
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

function COMPRAR(){
  let nome = document.getElementById("produto-card").textContent;

  let imagem = document.getElementById("img-produto").scr;

  let preco = document.getElementById("preco-card").textContent;

  adicionarAoCarrinhoLateral(nome, imagem, preco);
}

function adicionarAoCarrinhoLateral(nome, imagem, preco){
  let container = document.getElementById("iten-carrinho");

  let item = document.createElement("div");
  item.classList.add("iten-lateral");

  let img = document.createElement("img")
  img.src = imagem;
  img.alt = nome;

  let texto = document.createElement("div");
  texto.classList.add("texto-item");
  texto.innerHTML = `<strong>${nome}</strong><br><span>${preco}</span>`;

  item.appendChild(img);
  item.appendChild(texto);

  container.appendChild(item);
}

