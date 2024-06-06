import logo from './logo.svg';
import './App.css';
import {NavLink,Link,  Route ,Routes} from 'react-router-dom';
import About from './components/About';
import Support from './components/Support';
import Labs from './components/Labs';
import NotFound from './components/NotFound';
import Home from './components/Home';
import MainHeader from './components/MainHeader';


function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            {/* home ko kise klink kre route tag  s krng n */}
            <NavLink to="/">Home</NavLink>
          </li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/support">Support</NavLink></li>
          <li><NavLink to="/labs">Labs</NavLink></li> 
        </ul>
      </nav>
      {/* bohot sare routes create krna honga uske lie routes tag ka use */}
    <Routes>
{/* single route <route> tag s honga */}

 {/* <Route path="/" element={<div>Home Page</div>}/> */}
 {/* aab hum div nahi render krne aab hum home page ka component render krnge */}
 <Route path="/" element={<MainHeader/>} > 
 {/* this beccomes you default route */}
 <Route index element={<Home/>} />

 <Route path="/support" element={<Support/>}/>
 <Route path="/about" element={<About/>}/>
 <Route path="/labs" element={<Labs />}/>
 
 {/* inko chorke or koi path dalenge to * s mtch ho jaega */}
 <Route path="*" element={<div>page Not Found</div>}/>
 </Route>
    </Routes>
    
    </div>
  );
}

export default App;
