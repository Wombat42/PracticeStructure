import React, { useEffect } from "react";
import Try from "../../components/try";
import Matrix from "../../structure/matrix";

export default function RotateMatrix(props) {
  const [resultLeft, setLeftResult] = React.useState();
  const [resultRight, setRightResult] = React.useState();
  // prettier-ignore
  const values = [ 
    1,2,3, 
    4,5,6, 
    7,8,9, 
   ];

  React.useEffect(() => {
    const matrixRight = new Matrix(...values);
    const matrixLeft = new Matrix(...values);
    //setInterval(() => {
    matrixLeft.rotateLeft();
    matrixRight.rotateRight();
    setLeftResult(matrixLeft.toString());
    setRightResult(matrixRight.toString());
    //}, 500);
  }, [values]);

  const testCaseRight = "7 4 1\n8 5 2\n9 6 3\n";
  const testCaseLeft = "3 6 9\n2 5 8\n1 4 7\n";

  return (
    <>
      <Try
        label="matrix right"
        value={resultRight}
        expectedValue={testCaseRight}
        pre
      />
      <Try
        label="matrix left"
        value={resultLeft}
        expectedValue={testCaseLeft}
        pre
      />
    </>
  );
}
