import React, { useState,useEffect } from "react"
import facade from "../../apiFacade.js";
function LoggedIn({user}){
    const [dataFromServer, setDataFromServer] = useState("Loading...")
    useEffect(() => { 
      const url = user.roles.split(',').includes('user') ? '/api/info/user' : '/api/info/admin';
      facade.fetchData(url).then(res => {
        console.log(res);
        setDataFromServer(res.msg)});
    },[])
  
    return (
      <div>
        <label>{dataFromServer}</label>
        {/*<h4>{user.username} with roles: {user.roles}</h4>*/}
      </div>
    )
  }
export default LoggedIn;