import useChangedEffect from '../hooks/useChangeEffect'
import styles from './IncomArea.module.css'
import { useSelector } from 'react-redux'

const IncomArea = () => {
  const { income } = useSelector(state => state.management)
  const isChanged = useChangedEffect(income)

  return (
    <div className={styles.box}>
      <h2>수입</h2>
      <p className={`${isChanged ? styles.changed : ''}`}>
        \{income ? income.toLocaleString() : 0}
      </p>
    </div>
  )
}

export default IncomArea
