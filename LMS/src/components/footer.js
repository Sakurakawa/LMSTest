import React, { Component } from 'react';
import '../style/footer.css';

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="footer">
        <div className="footer-contain">
          <div className="footer-word">
            <p>
              © Copyright 2003-2018
              <a href="#"> DCampus Networks ltd</a>
              ./
              <a href="#">CCNL </a>
              LMS.5.1.0
            </p>
          </div>
          <div className="qrCode">
            <div className="pic-left">
              <a href="#">下载IOSAPP</a>
              <img src={require('../source/LMS_iOSApp.png')} />
            </div>
            <div className="pic-right">
              <a href="#">访问移动版</a>
              <img src={require('../source/LMS_mobile_web.png')} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
