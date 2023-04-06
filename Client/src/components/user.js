
import "../style.css";
import React from "react"; 
import Main from "./main/Main";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar"; 
const users = () => {return(
    
    
 
      <table class="content-table">
         
              <tr>
                  <th>Id </th>
                  <th>Email</th>
                  <th>Nom</th>
                  <th>Adresse</th>
                  <th>Statue</th>
                  <th>Date_added</th>
                  <th>Tools</th>
              </tr>
          
          <tbody>
              <tr>
              <td>1</td>
              <td>Abdou@clothlly.dz</td>
              <td>Abdou</td>
              <td>Batna</td>
              <td></td>
              <td>2602</td>
              <td ><button class="btn btn-ban btn-sm edit btn-flat" data-id="1">
              <i className="fa fa-ban" aria-hidden="true"></i> Ban</button>
             
              <button  class="btn btn-danger btn-sm edit btn-flat"  data-id="2" >
              <i className="fa fa-trash " aria-hidden="true"></i> Delete</button>
               </td>

              </tr>
              <tr>
              <td>2</td>    
              <td>Abdou@clothlly.dz</td>
              <td>Punk</td>             
              <td>Jijel</td>
              <td></td>
              <td>2602</td>
              <td ><button class="btn btn-ban btn-sm edit btn-flat" data-id="1">
              <i className="fa fa-ban" aria-hidden="true"></i> Ban</button>
             
              <button  class="btn btn-danger btn-sm edit btn-flat"  data-id="2" >
              <i className="fa fa-trash " aria-hidden="true"></i> Delete</button>
               </td>
              </tr>
              <tr>
              <td>3</td>
              <td>Punky@clothlly.dz</td>
              <td>Punk</td>             
              <td>Jijel</td>
              <td></td>
              <td>2602</td>
              <td ><button class="btn btn-ban btn-sm edit btn-flat" data-id="1">
              <i className="fa fa-ban" aria-hidden="true"></i> Ban</button>
             
              <button  class="btn btn-danger btn-sm edit btn-flat"  data-id="2" >
              <i className="fa fa-trash " aria-hidden="true"></i> Delete</button>
               </td>
              </tr>
          </tbody>
      </table>
      
   
);
}
  

export default users;    