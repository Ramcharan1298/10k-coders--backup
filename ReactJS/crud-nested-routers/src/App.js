import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Layout from './C_R_U_D--NESTED/Layout';
import Edituser from './C_R_U_D--NESTED/Edituser';
import Deleteuser from './C_R_U_D--NESTED/Deleteuser';
import Createuser from './C_R_U_D--NESTED/Createuser';
import Navbar from './C_R_U_D--NESTED/Navbar';
import Main from './C_R_U_D--NESTED/Main';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
          <Navbar/>
          <Routes>
             <Route path='/' element={<Layout/>}>
                  <Route index element={<Main/>}/>
                  <Route path='/Edituser/:id' element={<Edituser/>}/>
                  <Route path='/Deleteuser/:id' element={<Deleteuser/>}/>
                  <Route path='/Createuser' element={<Createuser/>}/>
             </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
