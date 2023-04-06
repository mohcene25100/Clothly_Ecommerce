import "./Sidebar.css";
import logo from "../../assets/logo.png";
import User from "../../components/user";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <Router>
      <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logo"  class="img-circle" />
          <div className="admin">
          <h2>Admin</h2>
        </div>
        </div>
        
        
       
      </div>

      <div className="sidebar__menu">
       
        <h2>REPORTS</h2>
        <div className="active_menu_link">
        <div className="sidebar__link ">
          <i className="fa fa-home"></i>
          <a href="/admin">Panneau Administrateur</a>
        </div>
        <div className="sidebar__link ">
      
          <i className="fa fa-money" aria-hidden="true"></i>
          <a href="/orders">Ordres</a>
        </div>
</div>
      
        <h2>MANAGE</h2>
        <div className="active_menu_link">
        <div className="sidebar__link">
          <i className="fa fa-user-secret"></i>
          <a href="/users">Utilisateurs</a>

        </div>
        <div className="sidebar__link">
          <i className="fa fa-briefcase"></i>
          <a href="/categories">Catégories</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-product-hunt"></i>
          <a href="/products">Produits</a>
        </div>
        </div>
        
        <div className="sidebar__logout">
          <i className="fa fa-power-off"></i>
          <a href="#">Log out</a>
        </div>
      </div>
      </div>
    
    
    </Router>
    
  );
};

export default Sidebar;
