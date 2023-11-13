export function TodoItem(element, content) {
  const item = document.createElement('li')
  item.classList.add('p-2')
  item.innerHTML = `${content}`
  element.appendChild(item)
}
