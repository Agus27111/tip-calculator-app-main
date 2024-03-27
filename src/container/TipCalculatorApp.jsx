// TipCalculatorApp.jsx
import { useState, useEffect } from "react";
import InputContainer from "../components/InputContainer";
import ResultContainer from "../components/ResultContainer";
import styles from "./TipCalculatorApp.module.css";

const TipCalculatorApp = () => {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [tipAmountPerPerson, setTipAmountPerPerson] = useState(0);
  const [totalPerPerson, setTotalPerPerson] = useState(0);

  useEffect(() => {
    if (bill && tip && numberOfPeople) {
      const tipAmount = (bill * tip) / 100;
      const total = parseFloat(bill) + tipAmount;
      const totalPerPerson = total / numberOfPeople;
      setTipAmountPerPerson(tipAmount.toFixed(2));
      setTotalPerPerson(totalPerPerson.toFixed(2));
    }
  }, [bill, tip, numberOfPeople]);
  const resetCalculator = () => {
    setBill("");
    setTip("");
    setNumberOfPeople("");
    setTipAmountPerPerson(0);
    setTotalPerPerson(0);

    window.location.reload();
  };

  return (
    <div className={styles.tipCalculatorApp}>
      <InputContainer
        setBill={setBill}
        setTip={setTip}
        setNumberOfPeople={setNumberOfPeople}
      />
      <ResultContainer
        tipAmountPerPerson={tipAmountPerPerson}
        totalPerPerson={totalPerPerson}
        onReset={resetCalculator}
      />
    </div>
  );
};

export default TipCalculatorApp;
