const btnAdicionar = document.getElementById("btn-adicionar");
const ulRecebe = document.getElementById("recebe-conteudo");
const tagSpan = document.getElementById("quantidade-tasks");
const recebeSpan = document.getElementById("recebe-span");

function criaElementoComClasse(element, className) {
  let elemento = document.createElement(element);
  elemento.className = className;
  return elemento;
}

function getQuantidadeDeTasks() {
  let contandoTask = document.querySelectorAll("input[type=checkbox]");
  let contaTask = 0;
  for (let index = 0; index < contandoTask.length; index++) {
    if (contandoTask[index].checked || btnAdicionar.click) {
      contaTask += 1;
    }
  }
  return contaTask;
}

function updateQuantidadeDeTasks() {
  let contagem = getQuantidadeDeTasks();
  addQuantidadeTaskNoHtml(contagem);
}

function addQuantidadeTaskNoHtml(contaTask) {
  tagSpan.innerText =
    contaTask + (contaTask === 1 ? " task adicionada." : " tasks adicionadas.");

  // o código à cima é igual ao códígo abaixo
  // contaTask === 1
  //   ? (tagSpan.innerText = contaTask + " task adicionada.")
  //   : (tagSpan.innerText = contaTask + " tasks adicionadas.");
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

  updateQuantidadeDeTasks();
});
