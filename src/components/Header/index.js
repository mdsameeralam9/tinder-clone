import React from "react";
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';
import './Header.css';


const Header = () => {
    return (
        <div className="header">
            <IconButton className="person-icon">
              <PersonIcon fontSize="large"/>
            </IconButton>
            <img className="header-icon" src="TinderIcon/tinder-icon.png" alt="Icon" />
            <IconButton>
              <ForumIcon className="forum-icon" fontSize="large"/>
            </IconButton>
            
        </div>
    )
};

export default Header;