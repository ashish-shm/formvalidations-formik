import React, { Component } from "react";

export class Header extends Component {
  render() {
    const { title } = this.props;
    return (
      <div className="header">
        <h2 className="title">{title}</h2>
      </div>
    );
  }
}

export default Header;
