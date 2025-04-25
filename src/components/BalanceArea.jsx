import React, { useEffect, useState } from 'react'
import styles from './BalanceArea.module.css'
import { useSelector } from 'react-redux'
const BalanceArea = () => {
  const { balance } = useSelector(state => state.management)
  const [isChanged, setIsChanged] = useState(false)

  useEffect(() => {
    setIsChanged(true)
    const timer = setTimeout(() => setIsChanged(false), 500)
    return () => clearTimeout(timer)
  }, [balance])
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
