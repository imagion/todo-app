import './style.css'
import { TodoItem } from './components/TodoItem.js'
// import DB from '../data/db.json'

document.querySelector('#app').innerHTML = `
  <div
    class="bg-neutral-700 p-8 rounded-3xl w-[min(100%,40rem)] [&>*+*]:mt-4"
  >
    <form id="form" class="flex">
      <input
        class="w-full p-2 text-black"
        type="text"
        name="newTodo"
        id="newTodo"
        placeholder="Что нужно сделать?"
      />
      <button class="bg-sky-700 py-2 px-4 " type="submit">Добавить</button>
    </form>

    <ul id="list" class="[&>*:nth-child(odd)]:bg-neutral-500">
    </ul>
  </div>
`
const form = document.getElementById('form')
const list = document.getElementById('list')

const data = JSON.parse(localStorage.getItem('TODO_KEY') || '[]')
// check if any existing todos in localStorage
// and propagate them to the DOM
if (data !== []) {
  for (let item of data) {
    TodoItem(list, item.name)
  }
}

function handleNewTodo(e) {
  e.preventDefault()
  const input = e.target.childNodes[1].value
  // not empty input value
  if (input.trim()) {
    console.log('🚀 -> input:', input)
    TodoItem(list, input)
    data.push({
      id: data.length + 1,
      name: input,
      checked: false,
    })
    localStorage.setItem('TODO_KEY', JSON.stringify(data))
  }
  e.target.childNodes[1].value = ''
}
form.addEventListener('submit', handleNewTodo)
