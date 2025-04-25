import MoneyArea from './components/MoneyArea'
import FormArea from './components/FormArea'
import ManageMentList from './components/ManageMentList'
import './index.css'
function App() {
  return (
    <>
      <h1 className="title">용돈 기입장</h1>
      <div className="app">
        <MoneyArea />
        <div className="inputList">
          <FormArea />
          <ManageMentList />
        </div>
      </div>
    </>
  )
}

export default App
