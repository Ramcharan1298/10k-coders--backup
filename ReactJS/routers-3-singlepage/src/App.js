import {BrowserRouter ,Routes,Route} from 'react-router-dom'
import './App.css';
import Allu from './ROUTER--3/Allu';
import Gal from './ROUTER--3/Gal';
import Home from './ROUTER--3/Home';
import Nav from './ROUTER--3/Nav';
import Prabhas from './ROUTER--3/Prabhas';
import Ryan from './ROUTER--3/Ryan';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
          <Routes>
              <Route path="/Home" element={<Home/>}/>
              <Route path='/Gal' element={<Gal/>}/>
              <Route path='/Ryan' element={<Ryan/>}/>
              <Route path='/Allu' element={<Allu/>}/>
              <Route path='/Prabhas' element={<Prabhas/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
