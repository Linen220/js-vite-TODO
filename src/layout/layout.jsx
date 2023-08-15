import './layout.css';

export default function Layout({ children }) {
  return (
    <div className='todoapp'>
      {children}
    </div>
  )
}