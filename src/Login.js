import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import "./Login.scss"
import { login } from "./store/store";
import { useDispatch} from "react-redux";

export default function Login(){
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [data, setData] = useState({
        username: "",
        login: "",
        password: ""
    })

    const Come =(e)=>{
        e.preventDefault()
        console.log(data)
        dispatch(login({email: data.login, password: data.password, username: data.username}))
        e.target.reset()
        navigate("/home")
    }
    return(
        <div className="Login">
        <form onSubmit={(e)=>Come(e)}>
            <p>Login</p>
            <input type="text" placeholder="username" onChange={(e)=>setData({...data, username: e.target.value})}/>
            <input type="text" placeholder="login" onChange={(e)=>setData({...data, login: e.target.value})}/>
            <input type="text" placeholder="password" onChange={(e)=>setData({...data, password: e.target.value})}/>
            <button type="submit">LOGIN</button>
        </form>
       
        </div>
    )
}