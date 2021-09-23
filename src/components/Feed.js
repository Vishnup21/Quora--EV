import React from "react";
import "../css/Feed.css";
import Post from "./Post";
import Quorabox from "./Quorabox";

function Feed() {
    return ( 
    <div className="feed">
        <Quorabox/>
        <Post />

    </div>
    )
}
export default Feed;