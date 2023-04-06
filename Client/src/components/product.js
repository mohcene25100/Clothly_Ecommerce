
import "../style.css";
import React from "react"; 
import Main from "./main/Main";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar"; 
import produit from "../assets/apple-icon.png";
const products = () => {return(
      
      <table class="content-table">
         
              <tr>
                  <th>Name </th>
                  <th>Photo</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Views Today</th>
                  
                  <th>Tools</th>
              </tr>
          
          <tbody>
              <tr>
              <td>Dress</td>
              <td><img src={produit} alt="produit"  class="img-circle" /></td>
              <td>Dress</td>
              <td>$ 130.00</td>
              <td>0</td>
              
              <td ><button class="btn btn-success btn-sm edit btn-flat" data-id="1">
              <i className="fa fa-edit" aria-hidden="true"></i> Edit</button>
             
              <button  class="btn btn-danger btn-sm edit btn-flat"  data-id="2" >
              <i className="fa fa-trash " aria-hidden="true"></i> Delete</button>
               </td>

              </tr>
              <tr>
              <td>Socks</td>    
              <td><img src={produit} alt="produit"  class="img-circle" /></td>
              <td>Socks</td>             
              <td>$ 130.00</td>
              <td>0</td>
             
              <td ><button class="btn btn-success btn-sm edit btn-flat" data-id="1">
              <i className="fa fa-edit" aria-hidden="true"></i> Edit</button>
             
              <button  class="btn btn-danger btn-sm edit btn-flat"  data-id="2" >
              <i className="fa fa-trash " aria-hidden="true">

              </i> Delete</button>
                  
               </td>
              </tr>
              <tr>
              <td>Tshirt</td>
              <td><img  src={produit} alt="produit"  class="img-circle" /></td>
              <td>Tshirt</td>             
              <td>$ 130.00</td>
              <td>0</td>
              
              <td ><button class="btn btn-success btn-sm edit btn-flat" data-id="1">
              <i className="fa fa-edit" aria-hidden="true">

              </i> Edit</button>
                  
             
              <button  class="btn btn-danger btn-sm edit btn-flat"  data-id="2" >
              <i className="fa fa-trash " aria-hidden="true">

              </i> Delete</button>
               </td>
              </tr>
          </tbody>
      </table>
   
);
}
  

export default products;    