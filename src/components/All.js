import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { addTodo, addcheck } from '../Slices/todoSlice';
import { RiDeleteBin6Line } from 'react-icons/ri'
import { FiMoreVertical } from 'react-icons/fi'

import { useDispatch } from 'react-redux/es/hooks/useDispatch';
function All() {
    let dispatch = useDispatch()
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let [todos, setTodo] = useState([])
    let [checked, setChecked] = useState(false)
    let [message, setMessage] = useState('');
    let [time, setTime] = useState('')
    let handleChange1 = (e) => {
        setMessage(e.target.value)
        // console.log(e.target.value)
    }
    let handleChange2 = (e) => {
        setTime(e.target.value)
    }
    let handleSubmit = (e) => {
        e.preventDefault()
        let actionObj = addTodo({ message, time })
        // console.log(actionObj)

        // //dispatch action obj to store
        dispatch(actionObj)


    }

    let arr2 = [1, 2, 3, 4]
    let [arr, setArr] = useState([])
    let todolist = useSelector(state => state.todo)
    console.log("todolist", todolist)

    return (
        <div className='mt-4 wid'>

            <div className='done1 pb-3 p-2 '>
                <div className='d-flex justify-content-between '>
                    <p className='text-start text-white'>Todo List     </p>
                    <p className='text-start text-white'><RiDeleteBin6Line /></p>
                </div>
                <div className='bg-white done2 ' >
                    <div className='d-flex justify-content-between'>
                        <p className='text-start ps-1'>Get Time with Vasu</p>
                        <p className='pe-2  '><FiMoreVertical /></p>
                    </div>
                    <p className='text-start ps-1 text-secondary'>4:30pm - 5:30pm</p>

                </div>

                {
                    todolist.map((todo, index) => {

                        return (

                            <div className='bg-white done2  ' key={index}>
                                <div className=' p'>
                                    <p className='text-start ps-1'>{todo.message}</p>
                                    <p className='text-start ps-1 text-secondary'>{todo.time}</p>
                                </div>
                            </div>

                        )

                    })

                }

            </div>



            <button type="button" className="btn btn-secondary mt-4" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                +
            </button>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Enter Task And Time</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div class="mb-3">
                                    <label for="recipient-name" className="col-form-label">Task</label>
                                    <input type="text" className="form-control" id="recipient-name" onChange={handleChange1} />
                                </div>
                                <div class="mb-3">
                                    <label for="message-text" className="col-form-label">Time</label>
                                    <textarea className="form-control" id="message-text" onChange={handleChange2}></textarea>
                                    <button className='btn btn-primary mt-3'>Submit</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
export default All;