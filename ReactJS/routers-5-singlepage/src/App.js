import {BrowserRouter ,Route , Routes} from 'react-router-dom'
import './App.css';
import Home from './ROUTER--5/Home';
import Nani from './ROUTER--5/Nani';
import Nav5 from './ROUTER--5/Nav5';
import Ravi from './ROUTER--5/Ravi';
import Sesh from './ROUTER--5/Sesh';
import Sharwa from './ROUTER--5/Sharwa';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Nav5/>
         <Routes>
             <Route path="/Home" element={<Home/>}/>
             <Route path="/Nani" element={<Nani/>}/>
             <Route path="/Sesh" element={<Sesh/>}/>
             <Route path="/Sharwa" element={<Sharwa/>}/>
             <Route path="/Ravi" element={<Ravi/>}/>
         </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
