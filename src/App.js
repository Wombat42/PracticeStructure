import React from "react";
import "./styles.scss";
import { Heading } from "./components/try";
import styled, { ThemeProvider } from "styled-components";
import KLargest from "./drills/klargest";
import Pythagorean from "./drills/pythagorean";
import BinaryTreeDLL from "./drills/binarytreetodll";
import BinaryTreeLCA from "./drills/binarytreeLCA";
import LinkListGroup from "./drills/linkedlistgroup";
import RotateMatrix from "./drills/rotatematrix";

const theme = {
  font: {
    fontFamily: "Roboto"
  },
  pallete: {
    primary: "#63a2a3",
    info: "#2b6c95",
    success: "#66b774",
    warning: "#e3a63c",
    error: "#f44336",
    background: "#fbf9fa",
    constrastText: "#fbf9fa"
  }
};

const AppContainer = styled.div`
  color: ${props => props.theme.pallete.constrastText};
  font-family: ${props => props.theme.font.fontFamily};
  padding-top: 20px;
  text-align: center;
  margin: 0px 20px 0 20px;
  a {
    color: white;
  }
  p {
    text-align: left;
  }
`;

const Tests = styled.div`
  background-color: ${props => props.theme.pallete.background};
  text-align: left;
  display: grid;
  grid-template-columns: 20% auto auto auto;
  grid-gap: 1rem;
  padding: 20px;
  box-shadow: 5px 5px 40px -5px rgba(0, 0, 0, 0.65);
`;

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <h1>Just some fun little drills</h1>
        <p>
          Each of the drills runs a different question from{" "}
          <a href="https://www.geeksforgeeks.org/amazon-interview-questions/">
            https://www.geeksforgeeks.org/amazon-interview-questions/
          </a>
        </p>
        <Tests>
          <Heading
            label="Case"
            value="Value"
            expectedValue="Expected Value"
            result="Result"
          />
          <RotateMatrix />
          <LinkListGroup />
          <BinaryTreeLCA />
          <BinaryTreeDLL />
          <Pythagorean />
          <KLargest />
        </Tests>
      </AppContainer>
    </ThemeProvider>
  );
}
