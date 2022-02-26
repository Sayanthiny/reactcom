import React from 'react';
import {BrowserRouter,Routes,Route, Navigate} from "react-router-dom";
import MasterLayout from './layouts/admin/MasterLayout';
import Home from './components/frontend/Home';
import Register from './components/frontend/auth/Register';
import Login from './components/frontend/auth/Login';import routes from './routes/routes';
import Dashboard from './components/admin/Dashboard';
;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/admin" name="Admin" render={() => <div>Home</div>}/> */}

          <Route path='/' element={<Home/>}/>
          <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
          {routes.map((route,idx)=>{
            return(
              route.component && (
                  <Route 
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={
                    <MasterLayout>
                      <route.component />
                    </MasterLayout>
                  }
                  />
                )
            ) 
          })}
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
