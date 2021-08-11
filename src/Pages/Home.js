import React from 'react';
import { useSelector } from 'react-redux';
import Login from "../Component/Login/Login";
import Header from "../Component/Header/Header";
import Sidebar from  "../Component/Sidebar/Sidebar";
import Feed from  "../Component/Feed/Feed";
import Widget from "../Component/Widget/Widget"; 
 

export const Home = () => {
    const user = useSelector((state)=> state.user);

    return (
        <div className="app">
              {/* {!user? <h1>Login</h1> : <h1>Home</h1>} */} 
              {!user ? (
                  <Login/>
              ) : (
                  <>
                      <Header />
                  <div className="app_body">
                      <Sidebar />
                      {/* Feed */}\
                      <Feed />
                      {/* widget */}
                      <Widget/>

                  </div>
                  </>
              )} 

            
            
        </div>
    );
};

export default Home;
