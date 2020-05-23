import React from "react";
import Try from "../../components/try";

function findLargest(array, k) {
  const result = [];
  let counter = 0;
  for (let i of array) {
    for (let x = 0; x < k; x++) {
      counter++;
      const val = result[x] || 0;
      if (i >= val) {
        result.splice(x, 0, i);
        break;
      }
    }
  }
  //console.log(result, counter);
  return [counter, result];
  //return result.slice(0, k);
}

function arrayGen(length) {
  const results = [];
  for (let x = 0; x < length; x++) {
    results[x] = Math.floor(Math.random() * 1000);
  }
  return results;
}

export default function KLargest(props) {
  const testCase1 = [30, 44, 25, 12, 11, 5];

  const [counter, result] = findLargest(testCase1, 3);
  console.log(result, counter);
  let test = JSON.stringify(result);
  let expected = JSON.stringify([44, 30, 25]);

  return (
    <>
      <Try label="kLargest" value={test} expectedValue={expected} />
    </>
  );
}
