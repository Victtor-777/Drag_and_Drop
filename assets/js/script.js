// Seleciona o elemento da lista ordenável e todos os itens dentro dele
const sortableList = document.querySelector(".sortable-list");
const items = document.querySelectorAll(".item");

// Adiciona eventos de arrastar e soltar a cada item
items.forEach((item) => {
  item.addEventListener("dragstart", () => {
    // Adiciona a classe 'dragging' com um pequeno atraso para melhorar a aparência
    setTimeout(() => item.classList.add("dragging"), 0);
  });

  item.addEventListener("dragend", () => {
    // Remove a classe 'dragging' após soltar o elemento
    item.classList.remove("dragging");
  });
});

// Função para inicializar a lista ordenável
const initSortableList = (e) => {
  e.preventDefault();

  // Obtém o item sendo arrastado
  const draggingItem = sortableList.querySelector(".dragging");

  // Obtém todos os itens, excluindo o que está sendo arrastado, e os coloca em um array
  const siblings = [...sortableList.querySelectorAll(".item:not(.dragging)")];

  // Encontra o próximo irmão em que o item arrastado deve ser colocado
  let nextSibling = siblings.find((sibling) => {
    return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
  });

  // Insere o item arrastado antes do próximo irmão
  sortableList.insertBefore(draggingItem, nextSibling);
};

// Adiciona eventos para iniciar o processo de ordenação quando o item está sendo arrastado sobre a lista
sortableList.addEventListener("dragover", initSortableList);

// Evita que o evento dragenter padrão interfira no comportamento de arrastar e soltar
sortableList.addEventListener("dragenter", (e) => e.preventDefault());
