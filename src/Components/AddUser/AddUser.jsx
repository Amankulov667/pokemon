import React, { useState } from 'react'
import axios from 'axios'

const AddUser = () => {
    const [ name, setName ] = useState({
        name: ''
    })

    const handleChange = (e) => {
        e.preventDefault()

        setName({
            name: e.target.value
        })
    }

    const submitForm = (e) => {
        e.preventDefault()
        axios
            .post('https://jsonplaceholder.typicode.com/users', {name})
            .then((res) => {
                console.log(res);
                console.log(res.data);
            })
    }

  return (
    <div>
      <h2>Add Users</h2>
      <div>
        <form onSubmit={submitForm}>
            <label>
                User Name:
                <input type="text" name='name' onChange={handleChange}/>
            </label>
            <button type='submit'>Add</button>
        </form>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eligendi cumque odit hic illum quidem facilis saepe error? Dolor adipisci a aut esse totam ex nisi fugit provident odit impedit perferendis facilis laboriosam enim quidem vel pariatur ut omnis voluptate, eligendi cum unde aliquam nobis! Quae quidem voluptate iste esse?</p>
    </div>
  )
}

export default AddUser
