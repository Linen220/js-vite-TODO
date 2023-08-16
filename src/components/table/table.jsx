import Footer from './footer/footer';
import './table.css';

export default function Table() {
  return (
    <section className="main">
      <input type="checkbox" class="toggle-all" id="toggle-all" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {/* Rows */}
      </ul>
      <Footer />
    </section>
  )
}