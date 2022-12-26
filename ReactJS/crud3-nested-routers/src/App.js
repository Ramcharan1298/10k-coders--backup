import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './C_R_U_D--3/MainPage';
import DeletePage from './C_R_U_D--3/DeletePage';
import Navbar from './C_R_U_D--3/NavBar';
import Main from './C_R_U_D--3/Main';
import CreatePage from './C_R_U_D--3/CreatePage';
import Editpage from './C_R_U_D--3/Editpage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={'/'} element={<MainPage />}>
            <Route index element={<Main />} />
            <Route path={'/DeletePage/:id'} element={<DeletePage/>} />
            <Route path={'/CreatePage'} element={<CreatePage/>}/>
            <Route path={'/EditPage/:id'} element={<Editpage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
