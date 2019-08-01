const btnAdicionar = document.getElementById("btn-adicionar");
const ulRecebe = document.getElementById("recebe-conteudo");
const tagSpanQuantidadeTasks = document.getElementById("quantidade-tasks");
const formTodo = document.getElementById("form-todo");
const tagSpanMostraQtddTasksCheckadas = document.getElementById(
  "tasks-checkadas"
);
let novaTarefa = document.getElementById("nova-tarefa");
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
    contaTask <= 0
      ? ""
      : contaTask +
        (contaTask === 1 ? " task adicionada." : " tasks adicionadas.");

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
  let elementos = document.querySelectorAll("input[type=checkbox]");

  for (let index = 0; index < elementos.length; index++) {
    const element = elementos[index];
    element.addEventListener("change", () => updateQuantidadeDeTasksCheckada());
  }
}

let listaDeTodos = JSON.parse(localStorage.getItem("Lista_todos")) || [];

//AQUI ele verifica se existe algum dado no localstorage salvo, se existir, ele deixa na tela, com f5 ele mantém na tela
listaDeTodos.forEach(element => {
  criaHtmlTodo(element);
});

function criaTodo() {
  listaDeTodos.push(novaTarefa.value);
  criaHtmlTodo(novaTarefa.value);
  salvandoNoStorage();
  novaTarefa.value = "";
}

formTodo.addEventListener("submit", function() {
  criaTodo();
});

function criaHtmlTodo(valorTodo) {
  let li = document.createElement("li");
  let div = criaElementoComClasse("div", "form-check");
  let divAcoes = criaElementoComClasse("div", "acoes");
  let aPencil = criaElementoComClasse("a", "fas fa-pencil-alt");
  let aTrash = criaElementoComClasse("a", "fas fa-trash-alt");
  let label = criaElementoComClasse("label", "form-check-label");
  let checkboxNovo = criaElementoComClasse("input", "form-check-input");

  checkboxNovo.setAttribute("type", "checkbox");
  aPencil.setAttribute("href", "#");
  aTrash.setAttribute("href", "#");
  label.innerText = valorTodo;
  label.insertBefore(checkboxNovo, label.firstChild);

  aTrash.addEventListener("click", () => {
    deletaTodo(li);
  });

  div.appendChild(label);
  li.appendChild(div);
  ulRecebe.appendChild(li);
  div.appendChild(divAcoes);
  divAcoes.appendChild(aPencil);
  divAcoes.appendChild(aTrash);

  updateQuantidadeDeTasks();
  addEventoCheckado();
}

function deletaTodo(todo) {
  let posicaoTodoArray = listaDeTodos.indexOf(todo.innerText);
  listaDeTodos.splice(posicaoTodoArray, 1);
  todo.remove();
  salvandoNoStorage();
  updateQuantidadeDeTasksCheckada();
  updateQuantidadeDeTasks();
}

function salvandoNoStorage() {
  localStorage.setItem("Lista_todos", JSON.stringify(listaDeTodos));
}
