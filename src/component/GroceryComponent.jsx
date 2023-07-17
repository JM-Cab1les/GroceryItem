import React, { useEffect, useState, useRef } from 'react'
import {v4 as uuid} from 'uuid';
import GroceryItemComponent from './GroceryItemComponent';

const GroceryComponent = () => {

    const inputRef = useRef();
    const [item, setItem] = useState("")
    const [groceryItems, setGroceryItems] = useState([])

    const [error, setError] = useState("");

    // useEffect(() => {
    //     inputRef.current.focus()
    //   }, [])
    


    const handleAddItem = (event) => {

        event.preventDefault();

        if(item)
        {
            setGroceryItems([...groceryItems, {id: uuid(), name:item}]);
            setItem("");
            setError("");
        }
        else{
            setError("Input Field must not empty");
            // inputRef.current.focus()
            inputRef.current.focus()

        }
        
    }

    const handleEditItem = (id, newItem) => {
        const updatedGroceryItems = groceryItems.map((item) => {
            if(item.id == id)
            {
                return{
                    ...item, name: newItem
                }
            }

            return item;
        })

        setGroceryItems(updatedGroceryItems)
    }

    const handleDeleteItem = (removeId) => {
        const filteredItems = groceryItems.filter((item) => item.id !== removeId);
        setGroceryItems(filteredItems);
    }

    const handleClearItem = () => {
        setGroceryItems([]);
    }
  return (
    <div className='grocery-buddy'>
        <h1>Grocery Buddy</h1>
        <div className='input-section'>
            <div className='input-container'>
                <input ref={inputRef} type='text' placeholder='Enter a Item...' value={item} 
                onChange={(event) => setItem(event.target.value)}/>
                <button onClick={handleAddItem} className='btn-add'>Add Item</button>
            </div>
        </div>
        {error ? <p className='error text-danger'>{error}</p> :null }
        <ul className='grocery-list'>
            {groceryItems.map((item) => (
                <GroceryItemComponent key={item.id} item={item} handleEditItem={handleEditItem} handleDeleteItem={handleDeleteItem}/>
            ))}
        </ul>
        {groceryItems.length > 0 ? <button onClick={handleClearItem} className='btn-clear'>Clear Grocery item {""}</button> : null}
    </div>
  )
}

export default GroceryComponent
