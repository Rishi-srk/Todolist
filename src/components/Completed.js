import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { useSelector } from 'react-redux/es/exports';
import {RiDeleteBin6Line} from 'react-icons/ri'
import {FiMoreVertical} from 'react-icons/fi'


function Completed(){

    let todolist=useSelector(state=>state.todo)
   
   
    let [arr,setArr]=useState([])
    todolist.map((todo)=>{
        if(!todo.completed){
            arr.push(todo.text)
        }
    })
    // console.log(arr)

    return(
        <div className='mt-4 '>
        
        <div className=' p-2  done1 pb-5  '>
            <div className='d-flex justify-content-between'>
            <p className=' text-white text-start'>Done</p>
            <p className='text-start text-white'><RiDeleteBin6Line/></p>
            </div>
            <div className='m-2 bg-white p-2 done2 d-flex justify-content-between '>
                <p className='text-start ps-1 '>Workout</p>
                <p className='ps-5'><FiMoreVertical/></p>
            </div>
            <div className='m-2 bg-white p-2 done2 '>

                <p className='text-start ps-1'>Get Ready for Office</p>
            </div>
            </div>
        <button type="button" className="btn btn-secondary mt-3" >  + </button>

    
             

        </div>
    )
}
export default Completed;