import { useState } from "react";
import "./App.css";
import admin from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import User from "./components/user";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import users from "./components/user";
import products from "./components/product";
import categories from "./components/categories";
import orders from "./components/orders"


const App = () => {
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };
  return (
    <Router>
    <div className="container">
     
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <Route path="/admin" component={admin}/>  
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
      <Route path="/users" component={users}/>  
      <Route path="/products" component={products}/> 
      <Route path="/categories" component={categories}/> 
      <Route path="/orders" component={orders}/> 
    </div>
    </Router>
  );
};

export default App;
