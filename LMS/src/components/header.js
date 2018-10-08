import React, { Component } from 'react';
import '../style/footer.css';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <div className="header-width">
          <div className="logo" />
        </div>
      </div>
    );
  }
}

export default Header;
