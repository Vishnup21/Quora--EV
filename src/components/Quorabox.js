import { Avatar } from "@material-ui/core";
import React from "react";
import "../css/Quorabox.css";

function Quorabox() {
    return <div className="quoraBox">
        <div className="quoraBox__info">
            <Avatar /> <h5>Username</h5>
        </div>
        <div className="quoraBox__quora">
            <p>What is your Question or link?</p>
        </div>

    </div>
}
export default Quorabox;