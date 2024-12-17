import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faHashtag, faBell, faEnvelope, faBookmark, faList, faUser, faEllipsis } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1 className="sidebar-logo">X</h1>
      <nav>
        <ul className="sidebar-menu">
          <li><FontAwesomeIcon icon={faHome} /> Home</li>
          <li><FontAwesomeIcon icon={faHashtag} /> Explore</li>
          <li><FontAwesomeIcon icon={faBell} /> Notifications</li>
          <li><FontAwesomeIcon icon={faEnvelope} /> Messages</li>
          <li><FontAwesomeIcon icon={faBookmark} /> Bookmarks</li>
          <li><FontAwesomeIcon icon={faList} /> Lists</li>
          <li><FontAwesomeIcon icon={faUser} /> Profile</li>
          <li><FontAwesomeIcon icon={faEllipsis} /> More</li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
