import React, { useState } from "react";
import Footer from "../components/Footer";
import DropDown from "../components/DropDown";
import { useNavigate } from "react-router";
import swal from "sweetalert";

function BookingPage() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    month: "",
    day: "",
    year: "",
    hour: "",
    minute: "",
    ampm: "",
    people: 4,
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    date: false,
    time: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid =
      formValues.name &&
      formValues.email &&
      formValues.month &&
      formValues.day &&
      formValues.year &&
      formValues.hour &&
      formValues.minute &&
      formValues.ampm;

    if (isValid) {
      swal("Your table is booked!");
      navigate("/");
    } else {
      if (!formValues.name) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          name: true,
        }));
      }
      if (!formValues.email) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: true,
        }));
      }
      if (!formValues.day || !formValues.month || !formValues.year) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          date: true,
        }));
      }
      if (!formValues.minute || !formValues.hour) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          time: true,
        }));
      }
    }
  };

  const generateOptions = (start, end, pad = false) => {
    const options = [];
    for (let i = start; i <= end; i++) {
      const value = pad && i < 10 ? "0" + i : i.toString();
      options.push(value);
    }
    return options;
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="bookingpage">
      <div className="bookingpage__hero">
        <img className="logo" src="./images/logo.svg" alt="brand logo" />
        <div className="hero-content">
          <h1>Reservations</h1>
          <p>
            We can’t wait to host you. If you have any special requirements
            please feel free to call on the phone number below. We’ll be happy
            to accommodate you.
          </p>
          <button className="mobile">reserve place</button>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          name="name"
          value={formValues.name}
          onChange={handleChange}
          placeholder="Name"
          className={errors.name ? "error" : ""}
        />
        <input
          type="email"
          id="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          placeholder="Email"
          className={errors.email ? "error" : ""}
        />
        <div className={`date ${errors.date && "error-dropdown"}`}>
          <span>Pick a date</span>
          <div className="dropdowns">
            <DropDown
              header={"MM"}
              options={generateOptions(1, 12, true)}
              onSelect={(value) =>
                setFormValues({ ...formValues, month: value })
              }
            />
            <DropDown
              header={"DD"}
              options={generateOptions(1, 31, true)}
              onSelect={(value) => setFormValues({ ...formValues, day: value })}
            />
            <DropDown
              header={"YYYY"}
              options={generateOptions(currentYear, currentYear + 1)}
              onSelect={(value) =>
                setFormValues({ ...formValues, year: value })
              }
            />
          </div>
        </div>
        <div className={`time ${errors.time && "error-dropdown"}`}>
          <span>Pick a time</span>
          <div className="dropdowns">
            <DropDown
              header={"09"}
              options={generateOptions(1, 12, true)}
              onSelect={(value) =>
                setFormValues({ ...formValues, hour: value })
              }
            />
            <DropDown
              header={"00"}
              options={["00", "30"]}
              onSelect={(value) =>
                setFormValues({ ...formValues, minute: value })
              }
            />
            <DropDown
              header={"AM"}
              options={["AM", "PM"]}
              onSelect={(value) =>
                setFormValues({ ...formValues, ampm: value })
              }
            />
          </div>
        </div>
        <div className="people">
          <img
            src="/images/icons/icon-minus.svg"
            alt="minus"
            onClick={() =>
              setFormValues({ ...formValues, people: formValues.people - 1 })
            }
          />
          {formValues.people} people
          <img
            src="/images/icons/icon-plus.svg"
            alt="plus"
            onClick={() =>
              setFormValues({ ...formValues, people: formValues.people + 1 })
            }
          />
        </div>
        <button type="submit">make Reservation</button>
      </form>
      <div className="emptyDiv">
        <img src="/images/patterns/pattern-lines.svg" alt="pattern lines" />
      </div>
      <Footer />
    </div>
  );
}

export default BookingPage;
