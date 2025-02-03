import ButtonDelete from '../../components/ButtonDelete'
import ButtonEdit from '../../components/ButtonEdit'
import styles from './Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <ul>
        <li>#</li>
        <li>Coding Name</li>
        <li>Display Name</li>
        <li>Description</li>
        <li>Action</li>
      </ul>
      <ul>
        <li>#</li>
        <li>Coding Name</li>
        <li>Display Name</li>
        <li>Description</li>
        <li className={styles.action}>
          <ButtonEdit/>
          <ButtonDelete />
        </li>
      </ul>
    </div>
  )
}
