import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Row, Col, Timeline, Icon, Collapse as AntCollapse } from "antd";
import Collapse from "../components/generic/Collapse";

const { Panel } = AntCollapse;

const ThemedDiv = styled.div`
  background-color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
  min-height: 100vh;
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

const TimelineItem = styled(Timeline.Item)`
  padding: 0px !important;
  color: ${props => props.theme.PRIMARY_TEXT_COLOR};
`;

const ThemedPanel = styled(Panel)`
background-color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
color: ${props => props.theme.PRIMARY_TEXT_COLOR} !important;
& .ant-collapse-header  {
  color: ${props => props.theme.PRIMARY_TEXT_COLOR} !important;

}
borderRadius: 4;
marginBottom: 24;
border: 0;
overflow: 'hidden;`;

const About = ({ theme }) => {
  console.log(theme);
  return (
    <div className="container">
      <Row>
        <ThemeProvider theme={theme}>
          <ThemedDiv>
            <Col span={12} offset={6}>
              <CenteredContainer>
                <Title>About me</Title>
                <Content>
                  Passionate software engineer, interested in clean, performant,
                  scalable software architectures, cloud computing, and clean
                  coding.
                </Content>
                <Title>Experience</Title>
                <Timeline>
                  <TimelineItem>
                    <Collapse>
                      <ThemedPanel
                        header="Software Engineer, Full Time, Ritech Solutions, Aug 2018 –
                    Present"
                        key="1"
                      >
                        <p>Text here</p>
                      </ThemedPanel>
                    </Collapse>
                  </TimelineItem>
                  <TimelineItem>
                    <Collapse>
                      <ThemedPanel
                        header=" Full Stack Developer, Part Time, Nov 2019 - Present"
                        key="2"
                      >
                        <p>Text here</p>
                      </ThemedPanel>
                    </Collapse>
                  </TimelineItem>
                  <TimelineItem>
                    <Collapse>
                      <ThemedPanel
                        header="DevOps Engineer, BMW Group, Apr 2019 – Sep 2018"
                        key="3"
                      >
                        <p>Text here</p>
                      </ThemedPanel>
                    </Collapse>
                  </TimelineItem>
                  <TimelineItem>
                    <Collapse
                      bordered={false}
                      defaultActiveKey={["1"]}
                      expandIcon={({ isActive }) => (
                        <Icon type="caret-right" rotate={isActive ? 90 : 0} />
                      )}
                    >
                      <ThemedPanel
                        header="Apprentice, Ritech Solutions, Apr 2018 – Aug 2018"
                        key="4"
                      >
                        <p>Text here</p>
                      </ThemedPanel>
                    </Collapse>
                  </TimelineItem>
                </Timeline>
              </CenteredContainer>
            </Col>
          </ThemedDiv>
        </ThemeProvider>
      </Row>
    </div>
  );
};

export default About;
