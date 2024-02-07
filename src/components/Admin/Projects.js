import React from 'react'
import './Projects.css'
function Projects() {
  return (
    <div className='Test'>
      <h1>Projects</h1>
      <table class="table w-100">
            
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Garments</td>
                    <td>Working</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Saloon</td>
                    <td>Not Working</td>
                </tr>
                
            </tbody>

            </table>
    </div>
  )
}

export default Projects
