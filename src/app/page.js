import styles from './page.module.css'
import DatePicker from './datePicker';
import DateDisplay from './dateDisplay';

export default function Home() {
  return (
    <main className={styles.main}>
      <DatePicker />
      <DateDisplay />
    </main>
  )
}
