import "./header.css"

export default function Header() {
  return (
    <header id="header_todo">
      <h1 className="title">Tareas</h1>
      <input id="new-todo-input" class="new-todo" placeholder="¿Qué necesita ser hecho?" autofocus />
    </header>
  )
}