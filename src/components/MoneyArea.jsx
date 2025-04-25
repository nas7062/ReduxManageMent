import React from 'react'
import BalanceArea from './BalanceArea'
import IncomArea from './IncomArea'
import ExpenceArea from './ExpenceArea'
import styles from './MoneyArea.module.css'
const MoneyArea = () => {
  return (
    <main className={styles.container}>
      <BalanceArea />
      <div className={styles.ieArea}>
        <IncomArea />
        <ExpenceArea />
      </div>
    </main>
  )
}

export default MoneyArea
