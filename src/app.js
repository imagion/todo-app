import './style.css'

import { TodoItem } from './components/TodoItem.js'

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

TodoItem(list, 'Далеко-далеко, за словесными.')
TodoItem(list, 'Далеко-далеко, за словесными.')
TodoItem(list, 'Далеко-далеко, за словесными.')

form.addEventListener('submit', e => {
  e.preventDefault()
  const input = e.target.childNodes[1]
  input.setAttribute('value', `${input.value}`)
  TodoItem(list, input.value)
  input.value = ''
})
