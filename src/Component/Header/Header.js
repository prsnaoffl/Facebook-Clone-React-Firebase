import React, {useState} from 'react'
import{
    Add,
    ExpandMore,
    Flag,
    Forum,
    Home,
    NotificationsActive,
    Search,
    StorefrontOutlined,
    SubscriptionsOutlined,
    SupervisedUserCircle,
} from "@material-ui/icons";
import {IconButton , Avatar} from "@material-ui/core";
import {useSelector} from "react-redux";
import "./Header.css";

const Header = () => {
    const user= useSelector(state=>state.user); 
    const [headerOption, setHeaderOption] = useState("home")
    return (
        <div className="header">

            <div className="header_left">
                <img 
                  src="https://image.flaticon.com/icons/png/128/145/145802.png"
                  alt="logo"  
                  />
            <div className="header_input">
                <Search />
                <input type="text" placeholder="Search Facebook" />
            </div>
            </div>
            <div className="header_center">
                <div className={`header_option ${
                    headerOption === "home" ? "header_option--active" : null
                }`}
                onClick={()=>setHeaderOption("home")}
                >
                    <Home fontSize="large" />
                </div>

                <div className={`header_option ${
                    headerOption === "flag" ? "header_option--active" : null
                }`}
                onClick={()=>setHeaderOption("flag")}
                >
                    <Flag fontSize="large" />
                </div>

                <div className={`header_option ${
                    headerOption === "subs" ? "header_option--active" : null
                }`}
                onClick={()=>setHeaderOption("subs")}
                >
                    <SubscriptionsOutlined fontSize="large" />
                </div>

                 <div className={`header_option ${
                    headerOption === "store" ? "header_option--active" : null
                }`}
                onClick={()=>setHeaderOption("store")}
                >
                    <StorefrontOutlined fontSize="large" />
                </div>

                <div className={`header_option ${
                    headerOption === "user" ? "header_option--active" : null
                }`}
                onClick={()=>setHeaderOption("user")}
                >
                    <SupervisedUserCircle fontSize="large" />
                </div>
            </div>
                 <div className="header_right">
                     <div className="header_info">
                         <Avatar src={user.photoURL} />
                         <h5>{user.displayName}</h5>
                     </div>
                     <IconButton>
                         <Add />
                     </IconButton>
                     <IconButton>
                        <Forum />
                     </IconButton>
                     <IconButton>
                         <NotificationsActive />
                     </IconButton>   
                     <IconButton>
                         <ExpandMore />
                     </IconButton>
                 </div>
        </div>
    )
}

export default Header;
