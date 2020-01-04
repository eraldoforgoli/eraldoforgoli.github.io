import React from "react";
import styled, { ThemeProvider } from "styled-components";

const ThemedDiv = styled.div`
  background-color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
  min-height: 100vh;
`;

const Title = styled.h1`
  color: ${props => props.theme.PRIMARY_TEXT_COLOR};
`;

const Home = ({ theme }) => {
  return (
    <div className="container">
      <ThemeProvider theme={theme}>
        <ThemedDiv>
          <Title>Cim Peka </Title>
        </ThemedDiv>
      </ThemeProvider>
    </div>
  );
};

export default Home;
