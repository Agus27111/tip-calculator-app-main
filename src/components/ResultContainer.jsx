// ResultContainer.jsx
import PropTypes from "prop-types";

const ResultContainer = ({ tipAmountPerPerson, totalPerPerson, onReset }) => {
  console.log("Nilai tipAmountPerPerson:", tipAmountPerPerson);
  console.log("Nilai totalPerPerson:", totalPerPerson);

  return (
    <div className="result-container">
      <div className="tip-amount">
        <div className="title-tip">
          <p className="title">Tip Amount</p>
          <p className="total-per-person">/ person</p>
        </div>
        <span>${tipAmountPerPerson}</span>
      </div>
      <div className="total">
        <div className="title-total">
          <p className="title">Total</p>
          <p className="total-per-person">/ person</p>
        </div>
        <span>${totalPerPerson}</span>
        <button className="reset" onClick={onReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

ResultContainer.propTypes = {
  tipAmountPerPerson: PropTypes.number.isRequired,
  totalPerPerson: PropTypes.number.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default ResultContainer;
