import React from 'react';
import './Users.css';

function Users(){
    return(
        <div className='User'>
            <h1>Users</h1>
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
                    <td>1</td>
                    <td>Harpit sikka</td>
                    <td>Saloon</td>
                    <td>Pakistan</td>
                    <td>+9212345678</td>
                    <td>Entrepreuneur</td>
                    <td>NIL</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Aqsa </td>
                    <td>Garments</td>
                    <td>Pakistan</td>
                    <td>+9212345678</td>
                    <td>Entrepreuneur</td>
                    <td>Hassan</td>
                </tr>
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
                    <td>Skilled Person</td>
                    <td>NIL</td>
                </tr>
            </tbody>

            </table>

        </div>
    )
}

export default Users
