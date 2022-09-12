import 'bootstrap/dist/css/bootstrap.min.css';
import {RiDeleteBin6Line} from 'react-icons/ri'
import React, { useState } from 'react';
import { useSelector } from 'react-redux/es/exports';
import {FiMoreVertical} from 'react-icons/fi'

function Active(){
    let todolist=useSelector(state=>state.todo)
   
   
    let [arr,setArr]=useState([])
    todolist.map((todo)=>{
        if(todo.completed){
            arr.push(todo.text)
        }
    })
   
let x=[1,2,3]
    return (
        <div className='mt-4 ms-2 me-2'>   
       <div className='   done1 pb-3 p-2'>
        <div className='d-flex justify-content-between'>
            <p className=' text-white text-start'>In progress</p>
            <p className='text-start text-white'><RiDeleteBin6Line/></p>
            </div>
            <div className=' bg-white  done2 p-2'>
                <div className='d-flex justify-content-between'>
                <p className='text-start ps-1'>Get kids Ready for school</p>
                <p className='ps-5'><FiMoreVertical/></p>
                </div>
                <p className='text-start ps-1 text-secondary'>4:30pm - 5:30pm</p>
            </div>
            
            </div>
        <button type="button" className="btn btn-secondary mt-3" >  + </button>

    
        
           
           
        </div>
    )
}
export default Active;