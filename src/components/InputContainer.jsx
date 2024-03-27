import PropTypes from "prop-types";
import { useState } from "react";

function InputContainer({ setBill, setTip, setNumberOfPeople }) {
  const [bill, setBillLocal] = useState("");
  const [tip, setTipLocal] = useState("");
  const [people, setPeopleLocal] = useState("");

  const handleBillChange = (e) => {
    setBillLocal(e.target.value);
    setBill(e.target.value);
  };

  const handleTipChange = (e) => {
    setTipLocal(e.target.value);
    setTip(e.target.value);
  };

  const handlePeopleChange = (e) => {
    setPeopleLocal(e.target.value);
    setNumberOfPeople(e.target.value);
  };

  return (
    <div className="input-container">
      <div className="bill">
        <label htmlFor="bill">Bill</label>
        <input
          className="input"
          type="number"
          value={bill}
          onChange={handleBillChange}
        />
      </div>
      <div className="selectTip">
        <label htmlFor="tip">Select Tip %</label>
        <select className="select input" value={tip} onChange={handleTipChange}>
          <option className="btn" value="5">
            5%
          </option>
          <option className="btn" value="10">
            10%
          </option>
          <option className="btn" value="15">
            15%
          </option>
          <option className="btn" value="25">
            25%
          </option>
          <option className="btn" value="50">
            50%
          </option>
          <option className="btn" value="custom">
            Custom
          </option>
        </select>
      </div>
      <div className="numOfPeople">
        <label htmlFor="numOfPeople">Number of People</label>
        <input
          type="number"
          className="input"
          value={people}
          onChange={handlePeopleChange}
        />
      </div>
    </div>
  );
}

InputContainer.propTypes = {
  setBill: PropTypes.func.isRequired,
  setTip: PropTypes.func.isRequired,
  setNumberOfPeople: PropTypes.func.isRequired,
};

export default InputContainer;
