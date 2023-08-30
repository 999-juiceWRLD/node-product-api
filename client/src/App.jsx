import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar } from './components/NavBar.component'
import { APIBody } from './components/api/APIBody.component'
import { Routes, Route } from "react-router-dom"
import { Home } from './components/home/Home.component'

function App() {

  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index={true} path='home' element={<Home />}/>
        <Route path="api" element={<APIBody />} />
        <Route path="about" element={<div> <h1>about</h1> </div>} />
        <Route path="feature" element={<div> <h1>features</h1> </div>} />
      </Route>
    </Routes>
  );
}

export default App;
