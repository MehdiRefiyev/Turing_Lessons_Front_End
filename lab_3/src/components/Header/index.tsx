import { NavLink } from 'react-router'
import styles from './Header.module.css'

export default function Header() {
  return (
    <div className={styles.container}>
       <NavLink to='/'>Home</NavLink>
       <NavLink to='/admin'>Admin Panel</NavLink>
    </div>
  )
}
