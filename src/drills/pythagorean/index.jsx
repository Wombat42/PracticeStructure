import React from "react";
import Try from "../../components/try";

function findTripletBad(array) {
  let counter = 0;
  for (let aI = 0; aI < array.length; aI++) {
    let a = Math.pow(array[aI], 2);
    for (let bI = 0; bI < array.length; bI++) {
      let b = Math.pow(array[bI], 2);
      for (let cI = 0; cI < array.length; cI++) {
        counter++;
        let c = Math.pow(array[cI], 2);
        if (a + b === c) return [`${a} + ${b} = ${c}`, counter];
      }
    }
  }

  return ["No", counter];
}

function findTriplet(array) {
  let counter = 0;
  const hash = {};
  array.forEach(num => {
    let t = Math.pow(num, 2);
    hash[t] = t;
    counter++;
  });
  let innerCounter = 0;
  let values = Object.values(hash);
  for (let x = 0; x < values.length - 1; x++) {
    for (let y = x + 1; y < values.length - 1; y++) {
      innerCounter++;
      const a = values[x];
      const b = values[y];
      const c = hash[a + b];
      if (hash[values[x] + values[y]]) {
        return [`${a} + ${b} = ${c}`, counter + innerCounter];
      }
    }
  }
  return ["No combinations", counter + innerCounter];
}

export default function Pythagorean(props) {
  const testCase1 = [3, 2, 4, 6, 5];
  const testCase2 = [5, 2, 4, 6, 3];
  const testCase3 = [10, 4, 6, 12, 5, 32, 444, 555, 7676767, 87, 433, 2, 5];

  const [result, counter] = findTriplet(testCase1);
  const [result2, counter2] = findTriplet(testCase2);
  const [result3, counter3] = findTriplet(testCase3);

  return (
    <>
      <Try label="Pythagorean" value={result} expectedValue="9 + 16 = 25" />
      <Try label="Pythagorean" value={result2} expectedValue="9 + 16 = 25" />
      <Try
        label="Pythagorean"
        value={result3}
        expectedValue="No combinations"
      />
    </>
  );
}
