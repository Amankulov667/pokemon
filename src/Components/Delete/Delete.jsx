import axios from 'axios'
import React, { useState } from 'react'

const Delete = () => {
    const [ state, setState ] = useState('')
    const handleChange = (e) => {
        setState({id: e.target.value})
    }

    const handleRemove = (e) => {
        e.preventDefault()
        axios
            .delete(`https://jsonplaceholder.typicode.com/users/${state.id}`)
            .then((res) => {
                console.log(res);
            })
    }
  return (
    <div>
      Remove User
      <div>
        <form onSubmit={handleRemove}>
          <label>
            User ID:
            <input type="number" name="id" onChange={handleChange} />
          </label>
          <button type="submit">Delete</button>
        </form>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque error officiis itaque deserunt eveniet dignissimos tempore eligendi consequuntur nihil illum facere pariatur, rerum dolorum repellendus repudiandae nisi vel natus in? Illo amet ipsa deserunt quae aspernatur corporis tenetur facilis, accusamus aut, laborum perspiciatis magni quos doloremque nihil cupiditate dolorem dolor temporibus sapiente excepturi vitae sunt. Nobis fuga quam amet recusandae inventore itaque nesciunt tenetur corporis nemo! Ea, voluptates, non voluptas quos deleniti exercitationem delectus inventore saepe minima vel illum possimus modi suscipit harum quas nisi eos? Reiciendis obcaecati modi nesciunt provident, aspernatur, blanditiis eos minima molestias sequi fuga ex vel?</p>
    </div>
  )
}

export default Delete
