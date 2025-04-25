import styles from './ExpenceArea.module.css'
import { useSelector } from 'react-redux'
import useChangedEffect from '../hooks/useChangeEffect'
const ExpenceArea = () => {
  const { expense } = useSelector(state => state.management)
  const isChanged = useChangedEffect(expense)
  return (
    <div className={styles.box}>
      <h2>지출</h2>
      <p className={`${isChanged ? styles.changed : ''}`}>
        \{expense ? expense.toLocaleString() : 0}
      </p>
    </div>
  )
}

export default ExpenceArea
