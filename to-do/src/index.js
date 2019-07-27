const btnAdicionar = document.getElementById("btn-adicionar");
const ulRecebe = document.getElementById("recebe-conteudo");
const tagSpanQuantidadeTasks = document.getElementById("quantidade-tasks");
const tagSpanMostraQtddTasksCheckadas = document.getElementById(
  "tasks-checkadas"
);
const recebeSpan = document.getElementById("recebe-span");

function criaElementoComClasse(element, className) {
  let elemento = document.createElement(element);
  elemento.className = className;
  return elemento;
}

function getQuantidadeDeTasks() {
  let contandoTask = document.querySelectorAll("input[type=checkbox]");

  return contandoTask.length;
}

function addQuantidadeTaskNoHtml(contaTask) {
  tagSpanQuantidadeTasks.innerText =
    contaTask + (contaTask === 1 ? " task adicionada." : " tasks adicionadas.");

  // o código à cima é igual ao códígo abaixo
  // contaTask === 1
  //   ? (tagSpan.innerText = contaTask + " task adicionada.")
  //   : (tagSpan.innerText = contaTask + " tasks adicionadas.");
}

function updateQuantidadeDeTasks() {
  let contagem = getQuantidadeDeTasks();
  addQuantidadeTaskNoHtml(contagem);
}

function getQuantidadeTaskCheckada() {
  let recebeTaskCheckadaHtml = document.querySelectorAll(
    "input[type=checkbox]:checked"
  );

  return recebeTaskCheckadaHtml.length;
}

function addQuantidadeTaskCheckadaNoHtml(contaTask) {
  tagSpanMostraQtddTasksCheckadas.innerText =
    contaTask <= 0
      ? ""
      : contaTask +
        (contaTask === 1 ? " task selecionada." : " tasks selecionadas.");

  //o código à cima e o código abaixo são iguais
  // if (contaTask <= 0) {
  //   tagSpanMostraQtddTasksCheckadas.innerText = "";
  // } else {
  //   tagSpanMostraQtddTasksCheckadas.innerText =
  //     contaTask +
  //     (contaTask === 1 ? " task selecionada." : " tasks selecionadas.");
  // }
}

function updateQuantidadeDeTasksCheckada() {
  let contagem = getQuantidadeTaskCheckada();
  addQuantidadeTaskCheckadaNoHtml(contagem);
}

function addEventoCheckado() {
  //pegar todos os elementos checkbox e para cada um add addEventListner("change", updateQuantidadeDeTasksCheckada);
  let elementos = document.querySelectorAll("input[type=checkbox]");

  for (let index = 0; index < elementos.length; index++) {
    const element = elementos[index];
    console.log(element);

    element.addEventListener("change", () => updateQuantidadeDeTasksCheckada());
  }
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
  addEventoCheckado();
});
