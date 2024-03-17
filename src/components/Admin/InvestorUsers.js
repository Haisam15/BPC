import React from 'react'

function InvestorUsers() {
  return (
    <div className='User'>
            <h1>Investor</h1>
            <table class="table w-100">
            
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Idea</th>
                    <th scope="col">Country</th>
                    <th scope="col">Contact</th>
                    <th scope="col">Role</th>
                    <th scope="col">Working With</th>

                </tr>
            </thead>
            <tbody>
                
                
                <tr>
                    <td>3</td>
                    <td>Hassan</td>
                    <td>NIL</td>
                    <td>Pakistan</td>
                    <td>+9212344756</td>
                    <td>Investor</td>
                    <td>Aqsa</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Harpit sikka</td>
                    <td>NIL</td>
                    <td>Pakistan</td>
                    <td>+9212347578</td>
                    <td>Investor</td>
                    <td>NIL</td>
                </tr>
            </tbody>

            </table>

        </div>
  )
}

export default InvestorUsers
