import React from 'react';
import SidebarRow from "../SidebarRow/SidebarRow";
import "./Sidebar.css";
import{
    Chat,
    EmojiFlags,
    ExpandMoreOutlined,
    LocalHospital,
    People,
    Storefront,
    VideoLibrary,
} from "@material-ui/icons";
import {useSelector} from "react-redux";

const Sidebar = () => {
    const user =useSelector((state)=> state.user);
    return (
        <div className="sidebar">
             <SidebarRow title={user.displayName} src={user.photoURL} /> 
             <SidebarRow title="COVID-19 Information Center" Icon={LocalHospital} /> 
            <SidebarRow title="Pages"  Icon={EmojiFlags} />
            <SidebarRow title="Friend"  Icon={People} />
            <SidebarRow title="Message"  Icon={Chat} />
            <SidebarRow title="MarketPlace"  Icon={Storefront} />
            <SidebarRow title="Video"  Icon={VideoLibrary} />
            <SidebarRow title="More Items"  Icon={ExpandMoreOutlined} />
        </div>
    )
}

export default Sidebar;

