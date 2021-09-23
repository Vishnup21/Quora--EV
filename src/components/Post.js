import  Avatar from "@material-ui/core/Avatar";
import React from "react";
import "../css/Post.css";
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined";
import ChatBubbleOutlinedIcon from "@material-ui/icons/ChatBubbleOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";

function Post() {
    return <div className="post">
        <div className = "post__info">
            <Avatar/>
            <h5>Username</h5>
            <small>Timestamp</small>
        </div>
        <div className = "post__body">
            <div className ="post__question">
                <p>Question</p>
                <button className= "post__btnAnswer">
                    Answer
                </button>
            </div>
            <div className ="post__answer">
                <p></p>
            </div>
            <img src ="https://cdn.vox-cdn.com/thumbor/-pJN8SXIOo6Fm6JHBlG3GptwOuQ=/0x0:3520x1816/1200x800/filters:focal(1479x627:2041x1189)/cdn.vox-cdn.com/uploads/chorus_image/image/68730355/Screen_Shot_2021_01_27_at_3.26.14_PM.0.png"
            alt=""/>
        </div>
        <div className ="post__footer">
            <div className="post__footerAction">
               <ArrowUpwardOutlinedIcon/>
               <ArrowDownwardOutlinedIcon/> 
            </div>
            <RepeatOutlinedIcon/>
            <ChatBubbleOutlinedIcon/>
            <div className="post__footerLeft">
                <ShareOutlinedIcon/>
                <MoreHorizOutlinedIcon/>
            </div>
        </div>
    </div>
}
export default Post;