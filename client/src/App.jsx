import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar } from './components/NavBar.component'
import { Table } from './components/api/Table.component'

/*
name, quantity, price, image (yok denecek kadar az)
*/

function App() {

  return (
    <div>
      <NavBar />
      <div className='container my-3'>
        <h3 className='mb-4'>Product API</h3>
        <Table />
      </div>
    </div>
  )
}

export default App
