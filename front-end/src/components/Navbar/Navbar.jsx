import React from "react"
import "./Navbar.css"
import NavbarData from "./NavbarData";
import {AiOutlineMenu} from "react-icons/ai"
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";

function Navbar() {
    return (
      <div className="container">
        <div>
          <Link to="#" className="menu-bars">
            <AiOutlineMenu />
          </Link>
        </div>
          <ul>
              {NavbarData.map((item)=>{
                return(
                  <li key={uuidv4()}>
                    <Link to={item.path}>
                      <span>{item.title}</span><span>{item.icon}</span>
                    </Link>
                  </li>
                );
              })}
          </ul>
      </div>
    );
  }
  
export default Navbar;

