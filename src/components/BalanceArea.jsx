import styles from './BalanceArea.module.css'
import { useSelector } from 'react-redux'
import useChangedEffect from '../hooks/useChangeEffect'
const BalanceArea = () => {
  const { balance } = useSelector(state => state.management)
  const isChanged = useChangedEffect(balance)
  return (
    <div className={styles.box}>
      <h2>잔액</h2>
      <strong
        className={`${balance > 0 ? styles.green : styles.red} ${isChanged ? styles.changed : ''}`}
      >
        \{balance ? balance.toLocaleString() : 0}
      </strong>
    </div>
  )
}

export default BalanceArea
