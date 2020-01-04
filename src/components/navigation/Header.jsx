import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Button } from "antd";
import { Switch } from "antd";
import { darkTheme } from "../../styles/theme";

const StyledHeader = styled.div`
  background-color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};

  display: flex;
  flex-direction: column;
  align-items: center;
  position: inherit;

  width: 100%;
`;

const Div = styled.div`
  display: inline-block;
`;

const ThemedLink = styled(Button)`
  color: ${props => props.theme.PRIMARY_TEXT_COLOR};
`;

const ThemedSwitch = styled(Switch)`
  background-color: ${props => props.theme.PRIMARY_BUTTON_COLOR};
`;

StyledHeader.defaultProps = {
  theme: darkTheme
};

const Header = ({ handleChange, theme }) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledHeader>
        <Div>
          <ThemedLink type="link"> About </ThemedLink>
          <ThemedSwitch
            checkedChildren="dark"
            unCheckedChildren="light"
            defaultChecked
            onChange={handleChange}
          />
        </Div>
      </StyledHeader>
    </ThemeProvider>
  );
};

export default Header;
