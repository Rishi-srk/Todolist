import { createSlice } from "@reduxjs/toolkit";


let nextTodo=(n)=>{
   
    return n+1;

}

export const todoListSlice = createSlice({
    name:'todos',
    initialState:[
        { message:'hello',time:'3 to 4' }
    ],
    reducers:{
        addTodo:(state,action)=>{
            
            state.push({message:action.payload.message, time:action.payload.time})
        },
        addcheck:(state,action)=>{
                 state.map((todo)=>{
                    if(todo.id===action.payload){
                        
                             todo.completed=true

                    }
                    
                })
        }
    }
})

//action function
export  const {addTodo,addcheck}=todoListSlice.actions;
//exprting educer
export default todoListSlice.reducer