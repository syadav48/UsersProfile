import React from 'react'
import { useEffect, useState } from "react"
import axios from 'axios'
function Users() {
    const [allUsers, setAllUsers] = useState([])

    useEffect(() => {
        axios.get('https://reqres.in/api/users/')
        .then(res => {
            setAllUsers(res.data.data)
          console.log(res.data.data)
        })
      }, [])
    return (
        <div className='all-user'>
        {allUsers.map((user) => {
            const {id, first_name, email, avatar} = user
            return (
                <div key={id}>
                    <img src={avatar} alt={first_name}/>
                    <h3>{first_name}</h3>
                    <p>{email}</p>
                </div>

            )
        })}
        </div>
    )
}

export default Users
