import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Table } from './components/Table.component'

/*
name, quantity, price, image (yok denecek kadar az)
*/

function App() {

  return (
    <div className='container my-3'>
      <h3 className='mb-4'>Product API</h3>
      <Table />
    </div>
  )
}

export default App
