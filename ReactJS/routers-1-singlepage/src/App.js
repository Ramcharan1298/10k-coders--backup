
import { Route, Routes , Link, BrowserRouter} from 'react-router-dom';
import './App.css';
import Chris from './ROUTER__1/Chris';
import Daniel from './ROUTER__1/Daniel';
import Home from './ROUTER__1/Home';
import Navbar from './ROUTER__1/Navbar';
import Prabhas from './ROUTER__1/Prabhas';
import Stathum from './ROUTER__1/Stathum';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Navbar/>
           <Routes>
              <Route path='/Home' element={<Home/>}/>
              <Route path='/Prabhas' element={<Prabhas/>}/>
              <Route path='/Chris' element={<Chris/>}/>
              <Route path='/Stathum' element={<Stathum/>}/>
              <Route path='/Daniel' element={<Daniel/>}/>
           </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
