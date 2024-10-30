import { useState } from "react";

import { InputField, Button, MultiplicationTable } from "../../component";
import getMultiplication from "../../controllers/getMultiplication";
import "./landingPage.css";

const LandingPage = () => {
  const [number, setNumber] = useState("");
  const [maxMultiplier, setMaxMultiplier] = useState("");
  const [table, setTable] = useState([]);

  const handleGenerate = () => {
    const resultTable = getMultiplication(number, maxMultiplier);

    if (resultTable) {
      setTable(resultTable);
    } else {
      setNumber("");
      setMaxMultiplier("");
    }
  };

  return (
    <>
      <div className="landing-page-wrapper">
        <h1>Welcome to Multiplication Table Section</h1>
        <br />
        <br />
        <div className="input-section">
          <InputField
            number={number}
            setNumber={setNumber}
            placeholder="Enter the number..."
          />
          <InputField
            number={maxMultiplier}
            setNumber={setMaxMultiplier}
            placeholder="Enter the maxMultipler"
          />
          <Button onClick={handleGenerate} title="Generate Table" />
        </div>
        <div className="table-view">
          <MultiplicationTable table={table} />
        </div>
      </div>
    </>
  );
};
export default LandingPage;
