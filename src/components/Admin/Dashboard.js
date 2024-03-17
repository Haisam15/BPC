import React from 'react'
import './Dashboard.css'
function Dashboard() {
  return (
    <div>
      <table class="table w-100">

            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    
                    <th scope="col">Role</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Harpit sikka</td>
                    <td>Entrepreuneur</td>
                    <td><button class="btn btn-success mx-2 tick"></button>
                    <button class="btn btn-danger cross"></button> </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Ahmad</td>
                    <td>SkilledPerson</td>
                    <td><button class="btn btn-success mx-2 tick"></button>
                    <button class="btn btn-danger cross"></button> </td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Daniel lawrence</td>
                    <td>Entrepreuneur</td>
                    <td><button class="btn btn-success mx-2 tick"></button>
                    <button class="btn btn-danger cross"></button> </td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Nikhil</td>
                    <td>Skilled person</td>
                    <td><button class="btn btn-success mx-2 tick"></button>
                    <button class="btn btn-danger cross"></button> </td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Ashley</td>
                    <td>Investor</td>
                    <td><button class="btn btn-success mx-2 tick"></button>
                    <button class="btn btn-danger cross"></button> </td>
                </tr>
               
            </tbody>
        </table>
    </div>
  )
}

export default Dashboard
