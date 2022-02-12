import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "../../assets/admin/css/styles.css";
import "../../assets/admin/js/scripts";
import {Routes,Route,Navigate} from "react-router-dom";
import routes from "../../routes/routes";


const MasterLayout = () => {
  return (
    <div className="sb-nav-fixed">
      <Navbar />
      <div id="layoutSidenav">

        <div id="layoutSidenav_nav">
          <Sidebar />
        </div>
      <div id="layoutSidenav_content">
        <main>
          <Routes>
            {routes.map((route,idx)=>{
              return(
                route.component && (
                    <Route 
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={(props)=>(
                      <route.component {...props}/>
                    )
                    }
                    />
                  )
              ) 
            })}
            <Navigate from="/admin" to="/admin/dashboard"/>
          </Routes>
        </main>
        <Footer />
      </div>
      </div>
    </div>
  );
};

export default MasterLayout;
