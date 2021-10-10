import React from 'react'
import { useEffect, useState } from "react"
import axios from 'axios'
import List from './List'
import Alert from './Alert'
import Users from './Users'


function App() {
    const [data, setData] = useState([])
    const [users, setUsers] = useState(data)
    const [name, setName] = useState('')
    const [alert, setAlert] = useState({show: false, msg: '', type: ''})
    const [isEditing, setIsEditing] = useState(false)

    useEffect(() => {
        axios.get('https://reqres.in/api/users/')
        .then(res => {
            setData(res.data.data)
          console.log(res.data.data)
        })
      }, [])
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!name){
          showAlert(true, 'danger', 'please enter the first-name');
        }
        else if(name && isEditing){
          setUsers(
            data.filter((user) => user.first_name === name)
          )
          setName('');
          setIsEditing(false);
          showAlert(true, 'success', 'User changed');
        }
        else {
          showAlert(true, 'success', 'User added');
          setUsers(data.filter((user) => user.first_name === name ))
          setName('');
        }
    }

    const removeItem = (id) => {
      setUsers(users.filter(user => user.id !== id))
      showAlert(true, 'danger', 'User deleted')
    }
    const editItem = (id) => {
      const specificItem = users.find((user) => user.id === id) 
      setIsEditing(true)
      setName(specificItem.first_name)
    }
    const showAlert = (show = false, type = '', msg = '') => {
      setAlert({ show, type, msg });
    };
    return (
        <div>
          <h1>Hello users</h1>
        <section className='section-center'>
        <form className='users-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} users={users} />}
          <div className = 'form-control'>
            <input 
            type='text'
            className='users'
            placeholder='Enter the first name'
            value = {name}
            onChange={(e) => setName(e.target.value)}
            />
            <button type='submit' className='submit-btn'>{isEditing ? 'edit' : 'submit'}</button>
          </div>
        </form>
        <div className='users-container'>
          <List users={users} removeItem={removeItem} editItem={editItem} />
          <Users /> 
        </div>
        
        </section>
        </div>
    )
}

export default App
