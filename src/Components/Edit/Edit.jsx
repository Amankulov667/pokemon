import axios from 'axios'
import React, { useState } from 'react'

const Edit = () => {
    const [ editedUser, setEditedUser ] = useState({
        name: '',
        userName: '',
    })

    const handleChange = (e) => {
        setEditedUser({
            ...editedUser,
            [e.target.name]: e.target.value,
        })
    }

    const submitForm = (e) => {
        e.preventDefault()
        axios
            .put('https://jsonplaceholder.typicode.com/users/1', {editedUser})
            .then((res) => {
                console.log(res.data);
            })
    }
  return (
    <div>
        <div>
            <form onSubmit={submitForm}>
                <label>
                    User name:
                    <input 
                        type="text" 
                        name='name'
                        placeholder='name'
                        value={editedUser.name}
                        onChange={handleChange}
                    />
                    <input 
                        type="text" 
                        name='userName'
                        placeholder='username'
                        value={editedUser.userName}
                        onChange={handleChange}
                    />
                </label>
                <button type='submit'>add</button>
            </form>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est, ex alias quia ipsa laborum sapiente expedita vero architecto sunt rerum placeat neque, distinctio facere voluptatem! Earum consequuntur rerum modi id nesciunt porro, eos nobis amet exercitationem, sequi provident, atque sint consectetur mollitia quasi. Doloremque laudantium fuga magni, vero sequi aspernatur eaque aliquid illo quisquam explicabo ipsam illum corrupti, dolore placeat praesentium reiciendis nobis, fugiat totam inventore repudiandae dolor asperiores delectus debitis mollitia? Possimus deserunt sed ipsam, quas ad officia illum cupiditate rerum aperiam hic ab placeat, dolorum earum maxime modi harum tenetur laudantium odit itaque sint eaque aliquam quasi?</p>
        </div>
    </div>
  )
}

export default Edit
