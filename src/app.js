import './style.css'

import { TodoItem } from './components/TodoItem.js'

document.querySelector('#app').innerHTML = `
  <div
  class="bg-neutral-700 p-8 rounded-3xl w-[min(100%,40rem)] [&>*+*]:mt-4"
  >
    <form class="flex">
      <input
        class="w-full p-2"
        type="text"
        name="newTodo"
        id="newTodo"
        placeholder="Что нужно сделать?"
      />
      <button class="bg-sky-700 py-2 px-4" type="submit">Добавить</button>
    </form>

    <ul id="list" class="[&>*:nth-child(odd)]:bg-neutral-500">
    </ul>
  </div>
`

const list = document.getElementById('list')

TodoItem(list)
TodoItem(list)
TodoItem(list)
