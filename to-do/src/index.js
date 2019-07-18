let btnAdicionar = document.getElementById("btn-adicionar");
let ulRecebe = document.getElementById("recebe-conteudo");

function criaElementoComClasse(element, className) {
  let elemento = document.createElement(element);
  elemento.className = className;
  return elemento;
}

btnAdicionar.addEventListener("click", () => {
  let novaTarefa = document.getElementById("nova-tarefa").value;
  let li = document.createElement("li");
  let div = criaElementoComClasse("div", "form-check");
  let divAcoes = criaElementoComClasse("div", "acoes");
  let iPencil = criaElementoComClasse("i", "fas fa-pencil-alt");
  let iTrash = criaElementoComClasse("i", "fas fa-trash-alt");
  let label = criaElementoComClasse("label", "form-check-label");
  let checkboxNovo = criaElementoComClasse("input", "form-check-input");

  checkboxNovo.setAttribute("type", "checkbox");
  label.innerText = novaTarefa;
  label.insertBefore(checkboxNovo, label.firstChild);

  div.appendChild(label);
  li.appendChild(div);
  ulRecebe.appendChild(li);
  div.appendChild(divAcoes);
  divAcoes.appendChild(iPencil);
  divAcoes.appendChild(iTrash);
});

// TESTES COM A ARIEL
// const pegandoEvento = document.getElementById("teste");
// let mostrando = document.getElementById("app");
// let quadradinho = document.getElementById("quadradinho");
// let deFora = document.getElementById("de-fora");

// pegandoEvento.addEventListener("keyup", e => {
//     setTimeout(function () {
//         console.log(e.target.value);
//         mostrando.innerText = e.target.value;
//     }, 50);
// });

// mostrando.addEventListener("click", () => {
//     let divNova = document.createElement("div");
//     divNova.className = 'bla'
//     divNova.style = "background-color: coral; width: 100px; height: 100px;";
//     divNova.addEventListener("click", function (event) {
//         divNova.remove()
//     });

//     deFora.appendChild(divNova);

// });

// quadradinho.addEventListener("click", (e) => {
//     quadradinho.remove();
// });
