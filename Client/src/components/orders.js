
import "../style.css";
import React from "react"; 

const orders = () => {return(
      
      <table class="content-table">
         
              <tr>
                  <th>Id </th>
                  <th>Buyer Name</th>
                  <th>Buyer Email</th>
                  <th>Amount</th>
                  <th>Date</th>
                  <th>Tools</th>
              </tr>
          
          <tbody>
              <tr>
              <td>1</td>
              <td>Abdou</td>
              <td>Abdou@clothlly.dz</td>
              <td>300</td>
              <td>22-05-2021</td>
              
              <td ><button class="btn btn-modify btn-sm edit btn-flat" data-id="1">
              <i className="fa fa-edit" aria-hidden="true"></i> Modify</button>
             
             
               </td>

              </tr>
              <tr>
              <td>2</td>    
              <td>Punk</td>
              <td>Punky@clothlly.dz</td>             
              <td>999</td>
              <td>12-03-2021</td>
             
              <td ><button class="btn btn-modify btn-sm edit btn-flat" data-id="1">
              <i className="fa fa-edit" aria-hidden="true"></i> Modify</button>
             
             
               </td>
              </tr>
              
          </tbody>
      </table>
   
);
}
  

export default orders;    