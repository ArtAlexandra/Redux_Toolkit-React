import React, {useState} from "react";

import { login } from "./store/store";
import { useDispatch, useSelector} from "react-redux";
import "./Home.scss"
export default function Home(){
    const email = useSelector((state)=>state.user.value.email)
    const username = useSelector((state)=>state.user.value.username)
    const password = useSelector((state)=>state.user.value.password)
    const dispatch = useDispatch()
    const [data, setData] = useState({
        username: "",
        login: "",
        password: ""
    })
    const ChangeData =(e)=>{
        e.preventDefault()
        console.log(data)
     
       
        dispatch(login({email: data.login, password: data.password, username: data.username}))
        e.target.reset()
    }
    return(
        <div className="Home">
        <p>Your data</p>
        <p>Username: {username}</p>
        <p>email: {email}</p>
        <p>password: {password}</p>
        <form onSubmit={(e)=>ChangeData(e)}>
            <p>Change your data</p>
            <input type="text" placeholder="username" onChange={(e)=>setData({...data, username: e.target.value})}/>
            <input type="text" placeholder="login" onChange={(e)=>setData({...data, login: e.target.value})}/>
            <input type="text" placeholder="password" onChange={(e)=>setData({...data, password: e.target.value})}/>
            <button type="submit">CHANGE</button>
        </form>
        </div>
    )
}