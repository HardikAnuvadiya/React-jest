import React, { useState } from "react";

const FunctionTesting = () => {
  const [add, setAdd] = useState();
  const [multiple, setMultiple] = useState();
  const [formatedNumber, setFormattedNumber] = useState();

  const sum = (a, b) => {
    const total = a + b;
    setAdd(total);
  };

  const mul = (value) => {
    const multiple = (20 / 100) * value;
    setMultiple(multiple);
  };

  const getFractionFormattedNumber = (numberValue) => {
    setFormattedNumber(
      new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(numberValue)
    );
  };

  return (
    <>
      <button type="button" onClick={() => sum(7, 3)} data-testid="addition">
        Addition
      </button>
      <button
        type="button"
        onClick={() => mul(1000)}
        data-testid="Muliplication"
      >
        Multiplication
      </button>
      <button
        type="button"
        onClick={() => getFractionFormattedNumber(1000.777)}
        data-testid="format_number"
      >
        formated number
      </button>
      <p data-testid="sum">{add}</p>
      <p data-testid="multiple">{multiple}</p>
      <p data-testid="show_format">{formatedNumber}</p>
    </>
  );
};

export default FunctionTesting;
