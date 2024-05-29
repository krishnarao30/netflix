import "./Navbar.css";
import { Search } from "@material-ui/icons";
import { Notifications } from "@material-ui/icons";
import { ArrowDropDown } from "@material-ui/icons";
import {useState} from "react";
import {windows} from "react";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = ()=>{
           setIsScrolled(window.pageYOffset === 0 ? false : true);
           
           return () => windows.onscroll=null

  }
  //console.log(isScrolled);
    return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />

          <span>Home</span>
          <span>TV Shows</span>
          <span>Movies</span>
          <span>New & Populer</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>Children</span>
          <Notifications className="icon" />
          <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
