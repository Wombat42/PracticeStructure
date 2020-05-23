import React from "react";
import Try from "../../components/try";
import TreeNode from "../../structure/tree";
import DoubleLinkedList from "../../structure/doublelinkedlist";

export default function BinaryTreeDLL(props) {
  const leftSide = new TreeNode(12, new TreeNode(25), new TreeNode(30));
  const rightSide = new TreeNode(15, new TreeNode(36));
  const top = new TreeNode(10, leftSide, rightSide);

  const list = new DoubleLinkedList();
  top.visit(list.add.bind(list));
  const result = list.toString();

  return (
    <>
      <Try
        label="tree"
        value={result}
        expectedValue="[ 25, 12, 30, 10, 36, 15 ]"
      />
    </>
  );
}
