import "./Main.css";
import {
  MdAutoAwesome,
  MdCode,
  MdLightbulb,
  MdTravelExplore,
  MdSend,
} from "react-icons/md";

function Main() {
  return (
    <div className="main">
      <div className="main-nav">
        <h2>Gemini AI</h2>

        <div className="profile">
          A
        </div>
      </div>

      <div className="main-content">
        <div className="greeting">
          <h1>Hello, Aditya 👋</h1>
          <p>How can I help you today?</p>
        </div>

        <div className="cards">
          <div className="card">
            <MdTravelExplore size={28} />
            <p>Plan a weekend trip</p>
          </div>

          <div className="card">
            <MdCode size={28} />
            <p>Explain my React code</p>
          </div>

          <div className="card">
            <MdLightbulb size={28} />
            <p>Generate project ideas</p>
          </div>

          <div className="card">
            <MdAutoAwesome size={28} />
            <p>Write professional emails</p>
          </div>
        </div>

        <div className="search-box">
          <input
            type="text"
            placeholder="Ask anything..."
          />

          <button>
            <MdSend size={22} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;