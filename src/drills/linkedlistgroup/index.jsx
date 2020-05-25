import React from "react";
import Try from "../../components/try";
import LinkList from "../../structure/linkedlist";

export default function LinkListGroup(props) {
  const elements = [1, 2, 3, 4, 5, 6, 7, 8];
  const test = "[3,2,1,6,5,4,8,7]";
  const k = 3;

  const list = new LinkList(elements);
  list.reverse(k);
  let results = list.toString();
  return (
    <>
      <Try label="Link list grouping" value={results} expectedValue={test} />
    </>
  );
}
