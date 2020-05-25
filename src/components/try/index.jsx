import React from "react";
import classNames from "classnames";

export default function Try(props) {
  const { label, value, expectedValue, heading, pre } = props;
  const success = value === expectedValue;
  return (
    <>
      <div className={classNames("label", { heading: heading })}>{label}</div>
      <div
        className={classNames("value", { heading: heading, preformatted: pre })}
      >
        {value}
      </div>
      <div
        className={classNames("expectedValue", {
          heading: heading,
          preformatted: pre
        })}
      >
        {expectedValue}
      </div>
      <div
        className={classNames(
          "result",
          { heading: heading },
          { success: success },
          { failed: !success && !heading }
        )}
      >
        {heading ? "Result" : success ? "Worked" : "Failed"}
      </div>
    </>
  );
}
