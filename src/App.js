import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import MasterLayout from './layouts/admin/MasterLayout';
import Home from './components/frontend/Home';
import Register from './components/frontend/auth/Register';
import Login from './components/frontend/auth/Login';;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/admin" name="Admin" render={(props)=><MasterLayout {...props}/>}/>

          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
