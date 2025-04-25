import React from 'react'

const InputArea = ({ title, setTitle, price, setPrice, type, setType, inputref, priceref }) => {
  const TypeChange = e => setType(e.target.value)
  return (
    <>
      <input
        type="text"
        placeholder="내용입력"
        value={title}
        onChange={e => setTitle(e.target.value)}
        ref={inputref}
      />
      <div>
        <input
          type="radio"
          name="income"
          id="income"
          value="income"
          onChange={TypeChange}
          checked={type === 'income'}
        />
        <label htmlFor="income">수입</label>
      </div>
      <div>
        <input
          type="radio"
          name="expense"
          id="expense"
          value="expense"
          onChange={TypeChange}
          checked={type === 'expense'}
        />
        <label htmlFor="expense">지출</label>
      </div>
      <input
        type="text"
        placeholder="금액입력"
        value={price}
        onChange={e => setPrice(e.target.value)}
        ref={priceref}
      />
    </>
  )
}

export default InputArea
