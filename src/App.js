import React from "react";
import "./styles.scss";
import Try from "./components/try";
import KLargest from "./drills/klargest";
import Pythagorean from "./drills/pythagorean";
import BinaryTreeDLL from "./drills/binarytreetodll";
import BinaryTreeLCA from "./drills/binarytreeLCA";

export default function App() {
  return (
    <div className="App">
      <h1>Just some fun little drills</h1>
      <div className="tests">
        <Try
          label="Case"
          value="Value"
          expectedValue="Expected Value"
          heading
        />
        <KLargest />
        <Pythagorean />
        <BinaryTreeDLL />
        <BinaryTreeLCA />
      </div>
    </div>
  );
}
