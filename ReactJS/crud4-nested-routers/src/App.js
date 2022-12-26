
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './C_R_U_D--4/MainLayout';
import MainUser from './C_R_U_D--4/MainUser';
import Navbar from './C_R_U_D--4/NavbarPage';
import Delete from './C_R_U_D--4/Delete';
import Edit from './C_R_U_D--4/Edit';
// import Create from './C_R_U_D--4/Form';
import CreatePage from './C_R_U_D--4/Create';

function App() {
   return (
      <div className="App">
         <BrowserRouter>
            <Navbar />
            <Routes>
               <Route path='/' element={<MainLayout />}>
                  <Route index element={<MainUser />} />
                  <Route path='/Delete/:id' element={<Delete />} />
                  <Route path='/Create' element={<CreatePage />} />
                  <Route path='/Edit/:id' element={<Edit />} />
               </Route>
            </Routes>
         </BrowserRouter>
      </div>
   );
}

export default App;
