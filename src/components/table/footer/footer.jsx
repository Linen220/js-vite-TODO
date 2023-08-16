import './footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong id="pending-count">0</strong>
        &nbsp;pendiente(s)
      </span>
      <ul className="filters">
        <li><a href="#/" classname="filtro selected">Todos</a></li>
        <li><a href="#/active" classname="filtro">Pendientes</a></li>
        <li><a href="#/completed" classname="filtro">Completados</a></li>
      </ul>
      <button className="clear-completed">Borrar completados</button>
    </footer>
  )
}