
import { Route, Routes ,Link, BrowserRouter } from 'react-router-dom';
import './App.css';
import Evans from './ROUTER__2/Evans';
import Henry from './ROUTER__2/Henry';
import Home from './ROUTER__2/Home';
import Hugh from './ROUTER__2/Hugh';
import Navbar2 from './ROUTER__2/Navbar';
import Nicolas from './ROUTER__2/Nicolas';

function App() {
  return (
    <div className="App">
         <BrowserRouter>
         <Navbar2/>
             <Routes>
                 <Route path='/' element={<Home/>}/>
                 <Route path='/Evans' element={<Evans/>}/>
                 <Route path='/Hugh' element={<Hugh/>}/>
                 <Route path='/Henry' element={<Henry/>}/>
                 <Route path='/Nicolas' element={<Nicolas/>}/>
             </Routes>
         </BrowserRouter>
    </div>
  );
}

export default App
