import React from "react";
import { Collapse as AntCollapse, Icon } from "antd";

const Collapse = props => {
  return (
    <AntCollapse
      bordered={false}
      defaultActiveKey={["1"]}
      expandIcon={({ isActive }) => (
        <Icon type="caret-right" rotate={isActive ? 90 : 0} />
      )}
    >
      {props.children}
    </AntCollapse>
  );
};

export default Collapse;
