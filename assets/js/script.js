const sortableList = document.querySelector(".sortable-list");
const items = document.querySelectorAll(".item");

items.forEach(item => {
  item.addEventListener("dragstart", () => {
    // Add a classe drag depois do delay, apenas para mostrar o elemento na tela direito.
    setTimeout(() => item.classList.add("dragging"), 0);
  });
  item.addEventListener("dragend", () => {
    // Remove a classe drag depois de soltar o elemento
    item.classList.remove("dragging");
  });
});

const initSortableList = (e) => {
  e.preventDefault();
  const draggingItem = sortableList.querySelector(".dragging");
  // Pega todos os items, menos o que esta sendo "segurado", e faz um array deles.
  const sibilings = [...sortableList.querySelectorAll(".item:not(.dragging)")]

  let nextSibling = sibilings.find(sibling => {
    // Encontra o item irmão, o qual o item que foi arrastado, deve ser colocado. 
    return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
  })
  
  // Inseri o item "arrastado" para o lugar antes do irmão
  sortableList.insertBefore(draggingItem, nextSibling);
}

sortableList.addEventListener("dragover", initSortableList);
sortableList.addEventListener("dragenter", e => e.preventDefault());