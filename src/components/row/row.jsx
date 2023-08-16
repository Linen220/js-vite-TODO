export default function row({ id, content }) {
  return (
    <li key={id}>
      <div className="view">
        <input type="checkbox" className="toggle" checked />
        <label htmlFor="">{content}</label>
        <button className="destroy"></button>
      </div>
      <input type="text" className="edit" />
    </li>
  )
}