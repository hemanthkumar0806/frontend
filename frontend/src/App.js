import logo from './logo.svg';
import './App.css';
// import { Component } from './components/signin/personal';
// import { Events } from './components/signin/evnts';
// import { UseStateFunction } from './components/signin/count';
import { SignIn } from './components/signin/signin';
import { SignUp } from './components/signin/signup';
 import { Forgort } from './components/signin/forgotpass';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/signin' element={<SignIn/>} />
          <Route path='/SignUp' element={<SignUp/>} />
          <Route path='/forgotpassword' element={<Forgort/>} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
