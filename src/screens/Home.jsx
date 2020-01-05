import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Row, Col } from "antd";

const ThemedDiv = styled.div`
  background-color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
  min-height: 100vh;
  padding-bottom: 20px;
`;

const CenteredContainer = styled.div`
  margin: 70px;
`;

const Title = styled.h1`
  color: ${props => props.theme.PRIMARY_TEXT_COLOR};
`;

const Content = styled.p`
  color: ${props => props.theme.PRIMARY_TEXT_COLOR};
`;

const Home = ({ theme }) => {
  return (
    <div className="container">
      <Row>
        <ThemeProvider theme={theme}>
          <ThemedDiv>
            <Col span={12} offset={6}>
              <CenteredContainer>
                <Title>Eraldo</Title>
                <Content>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                  "de Finibus Bonorum et Malorum" (The Extremes of Good and
                  Evil) by Cicero, written in 45 BC. This book is a treatise on
                  the theory of ethics, very popular during the Renaissance. The
                  first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                  comes from a line in section 1.10.32. The standard chunk of
                  Lorem Ipsum used since the 1500s is reproduced below for those
                  interested. Sections 1.10.32 and 1.10.33 from "de Finibus
                  Bonorum et Malorum" by Cicero are also reproduced in their
                  exact original form, accompanied by English versions from the
                  1914 translation by H. Rackham.
                </Content>
              </CenteredContainer>
            </Col>
          </ThemedDiv>
        </ThemeProvider>
      </Row>
    </div>
  );
};

export default Home;
