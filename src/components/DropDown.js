import { useState, useRef, useEffect } from "react";

const DropDown = ({ onSelect, options, header }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    console.log("Dropdown toggled:", !isOpen);
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside, true);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside, true);
    };
  }, []);

  return (
    <div
      className={`dropdown ${isOpen || selectedOption ? "active" : ""}`}
      ref={dropdownRef}
      onClick={toggleDropdown}
    >
      <div className="dropdown-header">
        {selectedOption ? selectedOption : header}
      </div>

      {isOpen && (
        <ul className="dropdown-list">
          {options.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option)}>
              {selectedOption === option && (
                <img
                  src="/images/icons/icon-check.svg"
                  alt="checked"
                  className="check-icon"
                />
              )}{" "}
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
