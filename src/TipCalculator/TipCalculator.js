import React, { useState } from "react";
import '../App.css';

export default function TipCalculator() {
  const [bill, setBill] = useState(1);
  const [tip, setTip] = useState(10);
  const [people, setPeople] = useState(1);
  return (
    <>
      <h1>Tip Calculator</h1>
      <form></form>
      <label htmlFor="bill">Bill</label>
      <input
        type={"number"}
        id="bill"
        name="bill"
        min="1"
        defaultValue={"1"}
        onChange={(e) => setBill(e.target.value)}
      />
      <label htmlFor="tip">Tip</label>
      <input
        type={"number"}
        id="tip"
        name="tip"
        min="1"
        defaultValue={"10"}
        onChange={(e) => setTip(e.target.value)}
      />
      <label htmlFor="people">Number of People</label>
      <input
        type={"number"}
        id="people"
        name="people"
        min="1"
        defaultValue={"1"}
        onChange={(e) => setPeople(e.target.value)}
      />
      <p>Total Tip : $<span>{(bill*tip)/100}</span></p>
      <p>Tip per person: $<span>{parseInt(((bill*tip)/100)/people)}</span></p>
      <p>Total Sum: $<span>{parseInt(bill)+((bill*tip)/100)}</span></p>
    </>
  );
}
