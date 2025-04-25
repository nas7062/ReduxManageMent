import React, { useState } from 'react'
import styles from './EditForm.module.css'
import { useDispatch } from 'react-redux'
import { editList } from '../store/managementSlice'
import InputArea from './InputArea'
const EditForm = ({ id, onClose }) => {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [type, setType] = useState('income')
  const dispatch = useDispatch()
  const EditList = () => {
    if (title.trim() === '') {
      alert('내용을 입력하세요')
      inputref.current?.focus()
      return
    }
    if (isNaN(Number(price)) || price.trim() === '') {
      alert('숫자를 입력하세요')
      priceref.current?.focus()
      return
    }
    if (Number(price) < 0) {
      alert('0 이상의 숫자를 입력하세요')
      priceref.current?.focus()
      return
    }
    dispatch(editList({ id, title, price, type }))
    setTitle('')
    setPrice('')
    setType(type)
    onClose()
  }

  return (
    <div className={styles.container}>
      <InputArea
        title={title}
        setTitle={setTitle}
        price={price}
        setPrice={setPrice}
        type={type}
        setType={setType}
      />
      <button onClick={EditList}>거래 수정</button>
    </div>
  )
}

export default EditForm
