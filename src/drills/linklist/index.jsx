import React from "react";
import Try from "../../components/try";
import LinkedList from "../../structure/linklist2";

export default function LinkList(props) {
  const list = new LinkedList(1, 2, 3, 4, 5, 6);
  const results = list.toString();

  const linklist2 = new LinkedList(1, 2, 3, 4, 5, 6);
  linklist2.reverse();
  const results2 = linklist2.toString();

  const linklist3 = new LinkedList(1, 2, 3, 4, 5, 6);
  linklist3.reverse();
  linklist3.reverse();
  const results3 = linklist3.toString();

  const linklist4 = new LinkedList(1, 2, 3, 4, 5, 6, 7, 8);
  linklist4.group(3);
  const results4 = linklist4.toString();

  const linklist5 = new LinkedList(1, 2);
  linklist5.group(3);
  const results5 = linklist5.toString();

  const linklist6 = new LinkedList(1, 2);
  linklist6.reverse();
  const results6 = linklist6.toString();

  const linklist7 = new LinkedList(1, 2, 3);
  linklist7.group(3);
  const results7 = linklist7.toString();

  return (
    <>
      <Try
        label="Simple Linked List"
        value={results}
        expectedValue="[1,2,3,4,5,6]"
      />
      <Try
        label="Reversed Linked List"
        value={results2}
        expectedValue="[6,5,4,3,2,1]"
      />
      <Try
        label="Link List reversed twice"
        value={results3}
        expectedValue="[1,2,3,4,5,6]"
      />
      <Try
        label="Reversed Linked List batched"
        value={results4}
        expectedValue="[3,2,1,6,5,4,8,7]"
      />
      <Try
        label="Reversed Linked List batched, small group"
        value={results5}
        expectedValue="[2,1]"
      />
      <Try
        label="Reversed Linked List, small group"
        value={results6}
        expectedValue="[2,1]"
      />
      <Try
        label="Reversed Linked List, single batch"
        value={results7}
        expectedValue="[3,2,1]"
      />
    </>
  );
}
