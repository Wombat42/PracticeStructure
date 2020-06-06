import React from "react";
import Try from "../../components/try";
import ngram from "../../structure/ngram";

export default function NGRam(props) {
  const string = "463782649732698463278164789326473269478213";
  const res = ngram(string);
  const res2 = ngram(string, 2);
  const res3 = ngram(string, 3);

  const string2 =
    "this is a set of works that may not repeat very often or at all this fjkhsdakjfjkds dhjakJKLDSKLJDHSA jkashdljkashLDJKHSA bmncbnmxznmCXNMZC sdfhiusdfhkjdsh jkdhsfjklsdhfkljdshalk jsdfjkhsdjfkhdsalkjfhsdljkhfa ds;afhlkjdsahfkljsdahlk this this this";
  const res4 = ngram(string2);
  const res5 = ngram(string2, 2);
  const res6 = ngram(string2, 3);
  const res7 = ngram(string2, 4);

  return (
    <>
      <Try label="ngram k=1" value={res} expectedValue="see console" />
      <Try label="ngram k=2" value={res2} expectedValue="see console" />
      <Try label="ngram k=3" value={res3} expectedValue="see console" />
      <Try label="ngram words k=1" value={res4} expectedValue="see console" />
      <Try label="ngram words k=2" value={res5} expectedValue="see console" />
      <Try label="ngram words k=3" value={res6} expectedValue="see console" />
      <Try label="ngram words k=3" value={res7} expectedValue="see console" />
    </>
  );
}
