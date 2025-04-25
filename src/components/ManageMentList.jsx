import React from 'react'
import styles from './ManageMentList.module.css'
import ManageMent from './ManageMent'
import { useSelector } from 'react-redux'
const ManageMentList = () => {
  const { list } = useSelector(state => state.management)

  return (
    <div className={styles.container}>
      <h2>내역</h2>
      <div className={styles.list}>
        {list.map(item => (
          <ManageMent item={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}

export default ManageMentList
