export function TodoItem(element) {
  const item = document.createElement('li')
  item.classList.add('p-2')
  item.innerHTML = `Далеко-далеко, за.`
  element.appendChild(item)
}
