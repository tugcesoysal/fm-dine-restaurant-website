/* eslint-disable jsx-a11y/img-redundant-alt */
import { useNavigate } from "react-router";
import Footer from "../components/Footer";
import SlideSection from "../components/SlideSection";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="homepage__hero">
        <img className="logo" src="./images/logo.svg" alt="brand logo" />
        <div className="hero-content">
          <div className="hero-content-text">
            <h1>Exquisite dining since 1989</h1>
            <p>
              Experience our seasonal menu in beautiful country surroundings.
              Eat the freshest produce from the comfort of our farmhouse.
            </p>
          </div>
          <button onClick={() => navigate("/booking")}>book a table</button>
        </div>
      </div>
      <div className="middle">
        <div className="middle-image"></div>
        <div className="middle-content">
          <svg xmlns="http://www.w3.org/2000/svg" width="71" height="7">
            <g fill="none" fill-rule="evenodd">
              <path fill="#9E7F66" d="M15 3h56v1H15z" />
              <circle cx="3.5" cy="3.5" r="3" stroke="#9E7F66" />
            </g>
          </svg>
          <h2>Enjoyable place for all the family</h2>
          <p>
            Our relaxed surroundings make dining with us a great experience for
            everyone. We can even arrange a tour of the farm before your meal.
          </p>
        </div>
      </div>
      <div className="middle">
        <div className="middle-image "></div>
        <div className="middle-content">
          <svg xmlns="http://www.w3.org/2000/svg" width="71" height="7">
            <g fill="none" fill-rule="evenodd">
              <path fill="#9E7F66" d="M15 3h56v1H15z" />
              <circle cx="3.5" cy="3.5" r="3" stroke="#9E7F66" />
            </g>
          </svg>
          <h2>The most locally sourced food</h2>
          <p>
            All our ingredients come directly from our farm or local fishery. So
            you can be sure that you’re eating the freshest, most sustainable
            food.
          </p>
        </div>
      </div>
      <div className="dark-middle">
        <div className="middle-content">
          <svg xmlns="http://www.w3.org/2000/svg" width="71" height="7">
            <g fill="none" fill-rule="evenodd">
              <path fill="#9E7F66" d="M15 3h56v1H15z" />
              <circle cx="3.5" cy="3.5" r="3" stroke="#9E7F66" />
            </g>
          </svg>
          <h2>A few highlights from our menu</h2>
          <p>
            We cater for all dietary requirements, but here’s a glimpse at some
            of our diner’s favourites. Our menu is revamped every season.{" "}
          </p>
        </div>
        <div className="dark-middle-pictures">
          <div className="picture-card">
            <div className="picture"></div>
            <div className="picture-card-content">
              <h3>Seared Salmon Fillet</h3>
              <p>
                Our locally sourced salmon served with a refreshing buckwheat
                summer salad.
              </p>
            </div>
          </div>
          <div className="picture-card">
            <div className="picture"></div>
            <div className="picture-card-content">
              <h3>Rosemary Filet Mignon</h3>
              <p>
                Our prime beef served to your taste with a delicious choice of
                seasonal sides.
              </p>
            </div>
          </div>
          <div className="picture-card">
            <div className="picture"></div>
            <div className="picture-card-content">
              <h3>Summer Fruit Chocolate Mousse</h3>
              <p>
                Creamy mousse combined with summer fruits and dark chocolate
                shavings.
              </p>
            </div>
          </div>
        </div>
      </div>
      <SlideSection />
      <div className="top-footer">
        <h2>Ready to make a reservation?</h2>
        <button onClick={() => navigate("/booking")}>book a table</button>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
