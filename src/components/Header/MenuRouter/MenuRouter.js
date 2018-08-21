import React, { Component } from "react";
import { Menu } from "antd";
import { Link, withRouter } from "react-router-dom";

const MenuItem = Menu.Item;

class MenuRouter extends Component {
  render() {
    const menu = this.props.dataSource || (
      <p>Menu required dataSource props (Array)</p>
    );

    return Array.isArray(menu) ? (
      <Menu
        mode={`horizontal`}
        defaultSelectedKeys={[`/`]}
        selectedKeys={[this.props.location.pathname]}
        style={this.props.style}
      >
        {menu.map(m => (
          <MenuItem key={m.path}>
            <Link to={m.path}>{m.content}</Link>
          </MenuItem>
        ))}
      </Menu>
    ) : (
      menu
    );
  }
}

export default withRouter(MenuRouter);
