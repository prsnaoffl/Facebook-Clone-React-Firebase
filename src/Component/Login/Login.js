import React from 'react'
import {Button} from "@material-ui/core";
import  "./Login.css"
import {auth, provider} from "../../firebase";
import { addUser } from './../../Store/Actions/User';
import {useDispatch} from "react-redux" 

const Login = () => {

    const dispatch= useDispatch();
  
    const signIn =()=>{
      auth
      .signInWithPopup(provider)
      .then((result)=>{
        console.log(result);
        dispatch(addUser(result.user))
      })
      .catch((err)=> console.error(err))
    }  

    return (
        <div className="login">
            <div className="login_logo">
              <img
                 src="https://image.flaticon.com/icons/png/128/145/145802.png"
                 alt="logo"  />
              <img
                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmviCm0JhKV6fOvg34zB1QIDhlivLBDQwFRQ&usqp=CAU "
                 alt="fb"  />
            </div>
          <Button onClick={signIn}>Sign In</Button>
        </div>
    );
};  

export default Login;
