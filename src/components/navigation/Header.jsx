import React from "react";
import styled from "styled-components";
import { Button } from "antd";
import { Switch, Icon } from "antd";

const StyledButton = styled(Button)``;
const Li = styled.li`
  float: left;
`;

const Ul = styled.ul`
  list-style-type: none;
`;

const Header = ({ handleChange }) => {
  return (
    <>
      <Ul>
        <Li>
          <StyledButton type="link"> About </StyledButton>
        </Li>
        <Li>
          <Switch
            checkedChildren="dark"
            unCheckedChildren="light"
            defaultChecked
            onChange={handleChange}
          />
        </Li>
      </Ul>
    </>
  );
};

export default Header;
