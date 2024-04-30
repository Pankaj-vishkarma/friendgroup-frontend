import { useReducer, useState } from "react"
import UserContext from "./UserContext"

const UserContextProvider=({children})=>{
    /*const initialState=null

    const reducer=(state,action)=>{
        if(action.type==="USER"){
            return action.payload
        }
        return state
    }

    const [state,dispatch]=useReducer(reducer,initialState)*/
    const [state,setstate]=useState()
    const [role,setrole]=useState()

    return(
        <UserContext.Provider value={{state,setstate,role,setrole}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider