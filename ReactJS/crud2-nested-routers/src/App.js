
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Mainframe from './C_R_U_D--2_Nested/Mainframe';
import Main from './C_R_U_D--2_Nested/Main';
import Delete from './C_R_U_D--2_Nested/Delete';
import Create from './C_R_U_D--2_Nested/Create';
import NavBar from './C_R_U_D--2_Nested/NavBar';
import Edit from './C_R_U_D--2_Nested/Edit';

 

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <NavBar/>
             <Routes>
                 <Route path='/' element={<Mainframe/>}>
                    <Route index element={<Main/>}/>
                    <Route path='/Delete/:id' element={<Delete/>}/>
                    <Route path='/Create' element={<Create/>}/>
                    <Route path='/Edit/:id' element={<Edit/>}/>
                 </Route>
             </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
