import React from "react";
import Try from "../../components/try";
import TreeNode from "../../structure/tree";

export default function BinaryTreeLCA(props) {
  const leftSide = new TreeNode(12, new TreeNode(25), new TreeNode(30));
  const rightSide = new TreeNode(
    15,
    new TreeNode(36, new TreeNode(66, new TreeNode(88))),
    new TreeNode(40)
  );
  const top = new TreeNode(10, leftSide, rightSide);
  const res1 = top.findLCA(25, 30);
  const res2 = top.findLCA(36, 40);
  const res3 = top.findLCA(12, 15);
  const res4 = top.findLCA(25, 40);
  const res5 = top.findLCA(7, 40);
  const res6 = top.findLCA(66, 40);
  const res7 = top.findLCA(88, 15);
  const res8 = top.findLCA(88, 12);

  return (
    <>
      <Try label="tree LCA 1" value={res1} expectedValue={12} />
      <Try label="tree LCA 2" value={res2} expectedValue={15} />
      <Try label="tree LCA 3" value={res3} expectedValue={10} />
      <Try label="tree LCA 4" value={res4} expectedValue={10} />
      <Try label="tree LCA 5" value={`${res5}`} expectedValue="null" />
      <Try label="tree LCA 6" value={res6} expectedValue={15} />
      <Try label="tree LCA 7" value={res7} expectedValue={10} />
      <Try label="tree LCA 7" value={res8} expectedValue={10} />
    </>
  );
}
