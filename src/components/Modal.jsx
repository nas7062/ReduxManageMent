import React, { useEffect, useState } from 'react'
import styles from './Modal.module.css'
import EditForm from './EditForm'
const Modal = ({ isOpen, isEdit, id, onClick, onClose }) => {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(isOpen)
    }, 100)

    return () => clearTimeout(timer)
  }, [isOpen])
  console.log(isEdit)
  return (
    <div className={`${styles.back} ${isActive ? styles.active : ''}`}>
      <div className={`${styles.container} ${isEdit ? styles.edit : ''}`}>
        <h2>{isEdit ? '내용을 수정할까요?' : '정말로 삭제하시겠습니까?'}</h2>
        {isEdit && <EditForm id={id} onClose={onClose} />}
        <div className={styles.btnArea}>
          <button className={styles.cancle} onClick={onClose}>
            취소
          </button>
          {isEdit ? (
            ''
          ) : (
            <button className={styles.remove} onClick={() => onClick(id)}>
              삭제
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Modal
