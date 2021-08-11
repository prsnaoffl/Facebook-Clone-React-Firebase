import React,{useState,useEffect} from 'react';
import StoryReel from '../StortyReel/StoryReel';
import MessageSender from './../MessageSender/MessageSender';
import {db} from "../../firebase"; 
import Posts from '../Posts/Posts';
import "./Feed.css";

const Feed = () => {
        const [posts, setPosts] = useState([])

        useEffect(() =>{
            db.collection("posts")
              .orderBy("timestamp","decs")
              .onSnapshot((snapShot)=>{
               setPosts(
               snapShot.docs.map((doc)=>{
                //console.log(doc.id.data());
                return {
                    id:doc.id,
                    data:doc.data()
                }
               })
               );
            });
        },[]);

        return (
            <div className="feed">
            {/* Story */}
            <StoryReel />
            {/* ,MessaageSender */}
            <MessageSender />
            {/* Posts */}
           {posts.map((post)=>{
                return( 
                    <Posts
                      key={post.id}
                      profilePic={post.data.profilePic}
                      message={post.data.message}
                      timestamp={post.data.timestamp}
                      username={post.data.username}
                      image={post.data.image}
                    />

                )
            })}
        </div>
    )
}

export default Feed
