import React, { useState } from 'react'

const GroceryItemComponent = ({item, handleEditItem, handleDeleteItem}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newItem, setnewItem] = useState(item.name);
    const [error, setError] = useState("");
    const onEdit = () => {
        //handleEditItem
        if(newItem)
        {
            handleEditItem(item.id, newItem);
            setIsEditing(false);
            setError("");
        }
        else
        {
            setError("Grocery Item must not be empty.");
        }
       
    }
  return (
   <>
        <li>
            {isEditing ? <input type='text' value={newItem} onChange={(event) => setnewItem(event.target.value)}/> : <span>{item.name}</span>}
            <div>
                <button onClick={() => {isEditing ? onEdit() : setIsEditing(true)}} className='btn-edit'>{isEditing ? "Save" : "Edit"}</button>
                <button className='btn-delete' onClick={() => handleDeleteItem(item.id)}>Delete</button>
            </div>
        </li>

        {error ? <p className='errors'>{error}</p> : null}
   </>
  )
}

export default GroceryItemComponent
