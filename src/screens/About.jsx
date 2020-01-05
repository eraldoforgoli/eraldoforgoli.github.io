import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Row, Col, Timeline, Typography, Collapse as AntCollapse } from "antd";
import Collapse from "../components/generic/Collapse";

const { Panel } = AntCollapse;
const { Title } = Typography;

const ThemedDiv = styled.div`
  background-color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
  min-height: 100vh;
`;

const ThemedCollapse = styled(Collapse)`
  background-color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
`;

const CenteredContainer = styled.div`
  margin: 70px;
`;

const ThemedTitle = styled(Title)`
  color: ${props => props.theme.HEADER} !important;
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
  & .ant-collapse-header {
    color: ${props => props.theme.PRIMARY_TEXT_COLOR} !important;
    font-weight: bold;
  }

  & .ant-collapse-content {
    color: ${props => props.theme.PRIMARY_TEXT_COLOR} !important;
  }
  borderradius: 4;
  marginbottom: 24;
  border: 0;
  overflow: "hidden";
`;

const Text = styled.p`
  color: ${props => props.theme.PRIMARY_TEXT_COLOR};
`;

//TODO refactor into reusable components.
// Create reusable lists for experience items
const About = ({ theme }) => {
  console.log(theme);
  return (
    <div className="container">
      <Row>
        <ThemeProvider theme={theme}>
          <ThemedDiv>
            <Col span={12} offset={6}>
              <CenteredContainer>
                <ThemedTitle>About me</ThemedTitle>
                <Content>
                  Passionate software engineer, interested in clean, performant,
                  scalable software architectures, cloud computing, and clean
                  coding.
                </Content>
                <ThemedTitle>Experience</ThemedTitle>
                <Timeline>
                  <TimelineItem>
                    <ThemedCollapse>
                      <ThemedPanel
                        header="Software Engineer, Full Time, Ritech Solutions, Aug 2018 –
                    Present"
                        key="1"
                      >
                        <Text>
                          Current position: Working as a Backend Engineer for
                          peoplekep.com software. Developing a new feature
                          regarding the new benefits law in USA (ICHRA).
                          Programming language: Java, JavaScript. Database:
                          PostgreSQL. Frameworks: React, Angular. Technologies:
                          Docker, AWS, GIT, Buildkite for CI/CD, JDBI, etc.
                          Programming technique: Microservices. Others:
                          Mandrill/Mailchimp for emails. Previous position:
                          Developing startups (mostly bots), designing the
                          architecture and implementing the solutions.
                          Programming Languages: Java, JavaScript. Frameworks
                          and tools: Vue.js, Jersey, Maven, Bootstrap. Database:
                          MySQL, PostgreSQL. Editors: Visual Studio, IntelliJ.
                          Others: GIT, Rest Api, AWS, ubuntu, Apache, Nginx,
                          Slack api, Postman, etc.
                        </Text>
                      </ThemedPanel>
                    </ThemedCollapse>
                  </TimelineItem>
                  <TimelineItem>
                    <ThemedCollapse>
                      <ThemedPanel
                        header=" Full Stack Developer, Part Time, Nov 2019 - Present"
                        key="2"
                      >
                        <Text>
                          Developing Web applications, using: <br />
                          Programming Languages: C#, JavaScript. <br />
                          Frameworks and tools: .Net core, React, Entity
                          Framework Core (Code First approach). <br />{" "}
                          Programming technique: Clean Architecture & Clean
                          Code. Editors: Visual Studio Code, Rider.
                        </Text>
                      </ThemedPanel>
                    </ThemedCollapse>
                  </TimelineItem>
                  <TimelineItem>
                    <ThemedCollapse>
                      <ThemedPanel
                        header="DevOps Engineer, BMW Group, Apr 2019 – Sep 2018"
                        key="3"
                      >
                        <Text>
                          Supporting BMW DevOps team, ConnectedDrive department.
                          <ol>
                            <li>
                              Maintaining the CI/CD infrastructure, by making
                              sure every platform was working properly.
                            </li>
                            <li>
                              Constantly adding features/fixing the pipelines
                              using groovy.
                            </li>
                            <li>
                              Translating customer needs to concrete solutions,
                              by implementing changes in the infrastructure
                              using tools like Ansible, Terraform, etc, or
                              directly helping BMW teams to have working
                              pipelines.
                            </li>
                          </ol>
                          Programming language: Groovy Technologies & tools:
                          Docker, OpenShift, OpenStack, Jenkins, Linux,
                          Atlassian platforms (Bitbucket, Jira, Confluence,
                          Crowd), Terraform, Ansible, etc.
                        </Text>
                      </ThemedPanel>
                    </ThemedCollapse>
                  </TimelineItem>
                  <TimelineItem>
                    <ThemedCollapse>
                      <ThemedPanel
                        header="Apprentice, Ritech Solutions, Apr 2018 – Aug 2018"
                        key="4"
                      >
                        <Text>
                          Solved programming challenges provided by my mentor
                          (mostly logical tasks). My main task was to develop an
                          application on different platforms, using Java as a
                          programming language. First, I developed the
                          application as a command-line application, storing
                          data in files. Then converted it into a GUI
                          application, using Swing, MySQL database. The final
                          step was migrating it to a web application, using the
                          existing code as backend, and creating the frontend
                          using Vue.js
                        </Text>
                      </ThemedPanel>
                    </ThemedCollapse>
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
