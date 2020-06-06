import React from "react";
import styled from "styled-components";

const Cell = styled.div`
  justify-self: start;
  white-space: ${props => (props.pre ? "pre" : "inherit")};
  color: ${props => props.theme.pallete.primary};
`;

const TestLabel = styled(Cell)`
  text-transform: capitalize;
  color: ${props => props.theme.pallete.info};
`;

const HeadingCell = styled(TestLabel)`
  font-size: 22px;
  font-weight: 900;
  color: ${props => props.theme.pallete.primary.dark};
`;

const Result = styled(Cell)`
  font-weight: 700;
  color: ${props =>
    props.success ? props.theme.pallete.success : props.theme.pallete.error};
`;

export function Heading(props) {
  const { label, value, expectedValue, result } = props;
  return (
    <>
      <HeadingCell>{label}</HeadingCell>
      <HeadingCell>{value}</HeadingCell>
      <HeadingCell>{expectedValue}</HeadingCell>
      <HeadingCell>{result}</HeadingCell>
    </>
  );
}

export default function Try(props) {
  const { label, value, expectedValue, pre } = props;
  const success = value === expectedValue;
  return (
    <>
      <TestLabel>{label}</TestLabel>
      <Cell pre={pre}>{value}</Cell>
      <Cell pre={pre}>{expectedValue}</Cell>
      <Result success={success}>{success ? "Worked" : "Failed"}</Result>
    </>
  );
}
