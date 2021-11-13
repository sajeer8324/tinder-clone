import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import { IconButton } from "@mui/material";
import ForumIcon from "@mui/icons-material/Forum";

function Header() {
    return (
        <div className="header">
           <IconButton>
           <PersonIcon fontSize="large" className="header__icon" />
           </IconButton>

           <img className="header__logo" 
           src="https://brandlogos.net/wp-content/uploads/2021/09/tinder-flame-logo-512x512.png"
           alt=""
           />
           <IconButton>
           <ForumIcon fontSize="large" className="header__icon"/>
           </IconButton>
        </div>
    );
}

export default Header;
