import { useState } from "react";
import { useNavigate } from "react-router";

const SlideSection = () => {
  const [slideNum, setSlideNum] = useState(1);
  const navigate = useNavigate();

  return (
    <div className="slide-section">
      <div className={`slide-picture picture-${slideNum}`}></div>
      <div className="slide-content">
        <h2>Family Gathering</h2>
        <p>
          We love catering for entire families. So please bring everyone along
          for a special meal with your loved ones. We’ll provide a memorable
          experience for all.
        </p>
        <button onClick={() => navigate("/booking")}>book a table</button>
        <ul className="slide-list">
          <li
            onClick={() => setSlideNum(1)}
            className={slideNum === 1 ? "active" : ""}
          >
            family Gathering
          </li>
          <li
            onClick={() => setSlideNum(2)}
            className={slideNum === 2 ? "active" : ""}
          >
            special events
          </li>
          <li
            onClick={() => setSlideNum(3)}
            className={slideNum === 3 ? "active" : ""}
          >
            social events
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SlideSection;
