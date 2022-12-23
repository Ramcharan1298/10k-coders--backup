import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Layout from './C_R_U_D--NESTED/Layout';
import Edituser from './C_R_U_D--NESTED/Edituser';
import Deleteuser from './C_R_U_D--NESTED/Deleteuser';
import Createuser from './C_R_U_D--NESTED/Createuser';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      
          <Routes>
             <Route path='/' element={<Layout/>}>
                  <Route path='/Edituser' element={<Edituser/>}/>
                  <Route path='/Deleteuser' element={<Deleteuser/>}/>
                  <Route path='/Createuser' element={<Createuser/>}/>
             </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
