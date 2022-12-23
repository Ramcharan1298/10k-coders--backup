import {BrowserRouter , Routes , Route} from 'react-router-dom'
import './App.css';
import Charan from './ROUTER--4/Charan';
import Home from './ROUTER--4/Home';
import Nav4 from './ROUTER--4/Nav4';
import Ntr from './ROUTER--4/Ntr';
import Pawan from './ROUTER--4/Pawan';
import Ram from './ROUTER--4/Ram';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Nav4/>
         <Routes>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/Ntr" element={<Ntr/>}/>
            <Route path="/Pawan" element={<Pawan/>}/>
            <Route path="/Ram" element={<Ram/>}/>
            <Route path="/Charan" element={<Charan/>}/>
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
