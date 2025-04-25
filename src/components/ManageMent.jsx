import React, { useEffect, useState } from 'react'
import styles from './ManageMent.module.css'
import { useDispatch } from 'react-redux'
import { deleteList } from '../store/managementSlice'
import Modal from './Modal'
const ManageMent = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch()
  const [isEdit, setIsEdit] = useState(false)
  const deleteManageMent = id => {
    dispatch(deleteList(id))
  }
  const modalOpen = () => {
    setIsOpen(true)
  }
  const modalClose = () => {
    setIsOpen(false)
    setIsEdit(false)
  }

  const EditorOpen = () => {
    setIsEdit(true)
    setIsOpen(true)
  }

  return (
    <div className={`${item.type === 'income' ? styles.box : `${styles.red} ${styles.box} `}`}>
      <p className={styles.title}>{item.title}</p>
      <p className={styles.price}>\{item.price ? item.price.toLocaleString() : 0}</p>
      <button className={styles.del} onClick={modalOpen}>
        삭제
      </button>
      <button className={styles.edit} onClick={EditorOpen}>
        수정
      </button>
      {(isOpen || isEdit) && (
        <Modal
          isOpen={isOpen}
          isEdit={isEdit}
          onClick={deleteManageMent}
          id={item.id}
          onClose={modalClose}
        />
      )}
    </div>
  )
}

export default ManageMent
