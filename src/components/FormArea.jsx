import React, { useRef, useState } from 'react'
import styles from './FormArea.module.css'
import { useDispatch } from 'react-redux'
import { addList } from '../store/managementSlice'
import InputArea from './InputArea'
const FormArea = () => {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [type, setType] = useState('income')
  const inputref = useRef()
  const priceref = useRef()
  const dispatch = useDispatch()
  const AddList = () => {
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
    dispatch(addList({ title, price, type }))
    setTitle('')
    setPrice('')
    setType(type)
  }

  return (
    <div className={styles.container}>
      <h2>새로운 거래 추가</h2>
      <InputArea
        title={title}
        setTitle={setTitle}
        price={price}
        setPrice={setPrice}
        type={type}
        setType={setType}
        inputref={inputref}
        priceref={priceref}
      />
      <button onClick={AddList}>거래 추가</button>
    </div>
  )
}

export default FormArea
