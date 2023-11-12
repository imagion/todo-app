import './style.css'

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

    <ul class="[&>*:nth-child(odd)]:bg-neutral-500">
      <li class="p-2">Далеко-далеко, за.</li>
      <li class="p-2">Далеко-далеко, за.</li>
      <li class="p-2">Далеко-далеко, за.</li>
    </ul>
  </div>
`
