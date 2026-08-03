import { useState, useContext } from "react";
import { Context } from "../../context/context";

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
  const { prevPrompts, newChat, loadPrompt } = useContext(Context);

  return (
    <div className="sidebar">
      <div className="top">
        <MdMenu
          className="menu"
          size={26}
          onClick={() => setExtended(!extended)}
        />

       <div className="new-chat" onClick={newChat}>
          <MdAdd size={22} />
          {extended && <p>New Chat</p>}
        </div>
        {extended && (
         <div className="recent">
           <p className="recent-title">Recent</p>

  {prevPrompts.slice().reverse().map((item, index) => (
  <div
    className="recent-item"
    key={index}
    onClick={() => loadPrompt(item)}
  >
    <p>{item}</p>
  </div>
))}
  </div>
)}
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