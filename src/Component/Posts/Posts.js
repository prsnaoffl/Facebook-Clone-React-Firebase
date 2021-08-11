import React from 'react'
import {Avatar } from "@material-ui/core"
import{
    AccountCircle,
    ChatBubbleOutlined,
    ExpandMoreOutlined,
    NearMe,
    ThumbUp,
} from "@material-ui/icons"
import "./Posts.css";

const Posts = ({profilePic,image,username,timestamp,message}) => {
    return (
        <div className="post">
            <div className="post_top">
                <Avatar src={profilePic} className="post_avatar"/>
            <div className="post_topInfo">
                <h5>{username}</h5>
                <p>{new Date(timestamp?.toDate()).toDateString()}</p>
            </div>
            </div>
            <div className="post_bottom">
                <p>{message}</p>
            </div>
            <div classNames="post_image">
                <img src={image} alt=" " />
            </div>    
            <div className="post_options">
                <div className="post_option">
                    <ThumbUp />
                    <p>Like</p>
                </div>
                <div className="post_option">
                    <ChatBubbleOutlined />
                    <p>Comment</p>
                </div>
                <div className="post_option">
                    <NearMe />
                    <p>Share</p>
                </div>
                <div className="post_option">
                    <AccountCircle />
                    <ExpandMoreOutlined />
                </div>
            </div>
        </div>
    );
};

export default Posts
