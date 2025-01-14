import React, { useEffect, useState } from 'react';
import axios from 'axios'


export const DataBinding = () => {
    
    const [todoList, setToDoList] = useState([]);


    // const fetchData = () => {
    //        axios.get('https://jsonplaceholder.typicode.com/todos/1').then(res => console.log(res))
    // }
    useEffect(() => {
        const fetchData = () => {
            axios.get('https://jsonplaceholder.typicode.com/todos/').then(res => setToDoList(res.data)).catch(err => console.log(err))
        }
   fetchData();
   
    }, [])
    
    
        
    return(
        <div className='container-fluid'>
          <h1>To do list</h1>
          {todoList?.map(obj => (
           <div>
            <p>{obj.title}</p>
            <p> is completed {obj.completed ? 'true' : 'false'}</p>
           </div>
          ))}
          

        </div>
    )
}