import React from 'react';
import HomeIcon from '@material-ui/icons/Home'
import  FeaturedPlayListOutlinedIcon  from '@material-ui/icons/FeaturedPlayListOutlined';
import  AssignmentIndOutlinedIcon  from '@material-ui/icons/AssignmentIndOutlined';
import  PeopleAltOutlinedIcon  from '@material-ui/icons/PeopleAltOutlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import  SearchIcon from '@material-ui/icons/Search';
import  Avatar  from '@material-ui/core/Avatar';

import  Button  from '@material-ui/core/Button';
import '../css/Navbar.css';
function Navbar() {
    return (
      <div className="qHeader">
        <div className="qHeader__logo">
            <img
             src="img/logo.jpg"

             alt= 'CST'
            />
        </div>
        <div className = "qHeader__icons">
            <div className ="qHeader__icon">
                <HomeIcon />

            </div>
            <div className ="qHeader__icon">
                <FeaturedPlayListOutlinedIcon />
                
            </div>
            <div className ="qHeader__icon">
                <AssignmentIndOutlinedIcon/>
                
            </div>
            <div className ="qHeader__icon">
                <PeopleAltOutlinedIcon/>
                
            </div>
            <div className ="qHeader__icon">
                <NotificationsOutlinedIcon/>

                
            </div>

        </div>
        <div className="qHeader__input">
            <SearchIcon/>
            <input type="text" placeholder ="Search CST"/>

        </div>
        <div className ="qHeader__Rem">
            <div className ="qheader__avatar">
                <Avatar />
               
            </div>
            
            <div className ="qheader__button">
            <Button>Add Question</Button>
                
            </div>
            
        </div>
      
      </div>
    )
  }
  
  export default Navbar;