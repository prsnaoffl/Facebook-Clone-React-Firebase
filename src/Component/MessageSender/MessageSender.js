import React,{useState} from 'react'
import{Avatar, LinearProgress} from "@material-ui/core"
import {InsertEmoticon, PhotoLibrary, Videocam} from "@material-ui/icons";
import "./MessageSender.css";
import {useSelector} from 'react-redux';
import {db,storage,timestamp} from "../../firebase";


const MessageSender = () => {
const user = useSelector(state=>state.user);
const [input, setInput] = useState(""); 
const [image, setImage] = useState(""); 
const [progress, setProgress] = useState(0);

const handleSubmit =(event)=>{
    event.preventDefault();

    const uploadTask= storage.ref(`images/${image.name}`).put(image);
    uploadTask.on("state_changed",(snapShot)=>{ //eventlister and listener name //fun 1
        const progress=Math.round(
        (snapShot.bytesTransferred / snapShot.totalBytes)*100
        );
        setProgress(progress);   //state variable
    },
    (error)=>{   //fun2
        console.log(error);
    },
    ()=>{    //fun 3
        storage
         .ref("images")
         .child(image.name)
         .getDownloadURL()
         .then((url)=>{
            db.collection("posts").add({
                message: input,
                timestamp: timestamp,
                profilePic: user.photoURL,
                username: user.displayName,
                image:url,
            });
                setProgress(0);
                setInput("");
                setImage("");
         })
         .catch((err)=>{
             console.log(err);
         });
     }
    );     
};

    return (
        <div className="messageSender">
            <div className="messageSender_top">
                <Avatar src={user.photoURL} />
                <form>
                    <input 
                      className="messageSender_input"
                      type="text"
                      value={input}
                      placeholder={`Whats on your mind, ${user.displayName}?`}
                      onChange={(e)=> setInput(e.target.value)}                      
                      />
                    <input type="file" onChange={(e)=> setImage(e.target.files[0])} />
                    <button type="submit" onClick={handleSubmit}>
                        {" "}
                        hidden
                        </button> 
                </form>
            </div>

            {progress > 0 &&  (
                <LinearProgress variant="determinate"  value={progress} />
            )}

            <div className="messageSender_bottom">
                <div className="messageSender_option">
                    <Videocam style={{ color:"red" }} />
                    <h5> Live Video </h5>
                </div>
                <div className="messageSender_option">
                    <PhotoLibrary style={{ color:"green" }} />
                    <h5> Photo/Video </h5>
                </div>
                <div className="messageSender_option">
                    <InsertEmoticon style={{ color:"orange" }} />
                    <h5>Feeling/Activity </h5 >
                </div>
            </div>
        </div>
    )
}

export default MessageSender
