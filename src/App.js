import React from "react";
import "./styles.scss";
import Try from "./components/try";
import KLargest from "./drills/klargest";
import Pythagorean from "./drills/pythagorean";
import BinaryTreeDLL from "./drills/binarytreetodll";
import BinaryTreeLCA from "./drills/binarytreeLCA";
import LinkListGroup from "./drills/linkedlistgroup";
import RotateMatrix from "./drills/rotatematrix";

export default function App() {
  return (
    <div className="App">
      <h1>Just some fun little drills</h1>
      <p>
        Each of the drills runs a different question from{" "}
        <a href="https://www.geeksforgeeks.org/amazon-interview-questions/">
          https://www.geeksforgeeks.org/amazon-interview-questions/
        </a>
      </p>
      <div className="tests">
        <Try
          label="Case"
          value="Value"
          expectedValue="Expected Value"
          heading
        />
        <RotateMatrix />
        <LinkListGroup />
        <BinaryTreeLCA />
        <BinaryTreeDLL />
        <Pythagorean />
        <KLargest />
      </div>
    </div>
  );
}
