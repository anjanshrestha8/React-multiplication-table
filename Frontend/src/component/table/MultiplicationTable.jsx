import PropTypes from "prop-types";

import colorFunction from "../../services/colorFunction";
import "./multiplicationTable.css";

const propTypes = {
  table: PropTypes.array,
};

const defaultProp = {
  table: [],
};

const MultiplicationTable = ({ table }) => {
    // console.log(table[0]);
  return (
    <>
      <div className="table">
        {table?.map((item) => {
          return (
            <>
              <div
                className={`table-row ${colorFunction(item.result)}`}
                key={item.multiplier}
              >
                {item.number} x {item.multiplier} = {item.result}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

MultiplicationTable.propTypes = propTypes;

MultiplicationTable.defaultProp = defaultProp;

export default MultiplicationTable;
