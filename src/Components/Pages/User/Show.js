import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Show() {
    const [users, setUser] = useState([])

    async function fetchData(){
        const result = await axios.get('http://localhost:5000/users')
        setUser(result.data)
    }

    useEffect(()=>{
        fetchData();
    }, [])
  return (
        <>
            <table className='table table-info table-scripted'>
                <thead>
                    <tr>
                        <th>NO</th>
                        <th>RIVER NAME</th>
                        <th>LENGTH</th>
                        <th>AREA</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((obj)=>{
                            return(
                                <tr>
                                    <td>{obj.no}</td>
                                    <td>{obj.river}</td>
                                    <td>{obj.length}</td>
                                    <td>{obj.area}</td>
                                    <td>
                                        <NavLink to={`/update/${obj.id}`}><button className='btn btn-outline-warning btn-sm me-3'>UPDATE</button></NavLink>
                                        <NavLink to={`/delete/${obj.id}`}><button className='btn btn-outline-danger'>DELETE</button></NavLink>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
  )
}
export default Show