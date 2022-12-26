
import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import MainLayout from './C_R_U_D--5/MainLayout';
import Main from './C_R_U_D--5/Main';
import Navbar from './C_R_U_D--5/Navbar';
import DeletePage from './C_R_U_D--5/Delete';
import CreatePage from './C_R_U_D--5/Create';
import Editpage from './C_R_U_D--5/Edit';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Navbar/>
          <Routes>
             <Route path={'/'} element={<MainLayout/>}>
                 <Route index element={<Main/>}/>
                 <Route path='/Delete/:id' element={<DeletePage/>}/>
                 <Route path='/Create' element={<CreatePage/>}/>
                 <Route path='/Edit/:id' element={<Editpage/>}/>
             </Route>
          </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
