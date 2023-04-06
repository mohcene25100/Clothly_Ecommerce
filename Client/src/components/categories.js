
import "../style.css";
import React from "react"; 
import Main from "./main/Main";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar"; 
const categories = () => {return(
      
      <table class="content-table">
         
              <tr>
                  <th>Catégorie </th>
                  
                  <th>Sous catégories </th>
                  <th>Tools</th>
              </tr>
          
          <tbody>
              <tr>
              <td>Hommes</td>
                <td>Jeans,Tricos</td>
              
              <td ><button class="btn btn-success btn-sm edit btn-flat" data-id="1">
              <i className="fa fa-edit" aria-hidden="true"></i> Edit</button>
             
              <button  class="btn btn-danger btn-sm edit btn-flat"  data-id="2" >
              <i className="fa fa-trash " aria-hidden="true"></i> Delete</button>
               </td>

              </tr>
              <tr>
              <td>Femmes</td>    
              <td>Tricos</td>
              
             
              <td ><button class="btn btn-success btn-sm edit btn-flat" data-id="1">
              <i className="fa fa-edit" aria-hidden="true"></i> Edit</button>
             
              <button  class="btn btn-danger btn-sm edit btn-flat"  data-id="2">
              <i className="fa fa-trash " aria-hidden="true"></i> Delete</button>
               </td>
              </tr>
              <tr>
              <td>Bébés</td>
                <td>Tricos</td>
              
              <td ><button class="btn btn-success btn-sm edit btn-flat" data-id="1">
              <i className="fa fa-edit" aria-hidden="true"></i> Edit</button>
             
              <button  class="btn btn-danger btn-sm edit btn-flat"  data-id="2" >
              <i className="fa fa-trash " aria-hidden="true"></i> Delete</button>
               </td>
              </tr>
          </tbody>
      </table>
   
);
}
  

export default categories;    