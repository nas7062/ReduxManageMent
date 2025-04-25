import React, { useEffect, useState } from 'react'
import styles from './ExpenceArea.module.css'
import { useSelector } from 'react-redux'
const ExpenceArea = () => {
  const { expense } = useSelector(state => state.management)
  const [isChanged, setIsChanged] = useState(false)

  useEffect(() => {
    setIsChanged(true)
    const timer = setTimeout(() => setIsChanged(false), 500)
    return () => clearTimeout(timer)
  }, [expense])
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
