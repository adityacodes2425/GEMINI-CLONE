import { useState } from "react";
import {
  MdMenu,
  MdAdd,
  MdHelpOutline,
  MdHistory,
  MdSettings,
} from "react-icons/md";
import "./Sidebar.css";

function Sidebar() {
  const [extended, setExtended] = useState(true);

  return (
    <div className="sidebar">
      <div className="top">
        <MdMenu
          className="menu"
          size={26}
          onClick={() => setExtended(!extended)}
        />

        <div className="new-chat">
          <MdAdd size={22} />
          {extended && <p>New Chat</p>}
        </div>
      </div>

      <div className="bottom">
        <div className="bottom-item">
          <MdHelpOutline size={22} />
          {extended && <p>Help</p>}
        </div>

        <div className="bottom-item">
          <MdHistory size={22} />
          {extended && <p>Activity</p>}
        </div>

        <div className="bottom-item">
          <MdSettings size={22} />
          {extended && <p>Settings</p>}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;