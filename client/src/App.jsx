import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar } from './components/navbar/NavBar.component'
import { Create } from './components/create/Create.component'
import { APIBody } from './components/api/APIBody.component'
import { Routes, Route} from "react-router-dom"
import { Home } from './components/home/Home.component'
import { EditForm } from './components/edit/EditForm.component'

function App() {

  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index={true} element={<Home />}/>
        <Route path="api" element={<APIBody />} />
        <Route path="api/edit/:id" element={<EditForm />} />
        <Route path="api/product" element={<Create />} />
      </Route>
    </Routes>
  );
}

export default App;
