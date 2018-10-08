import React, { Component } from 'react';
import '../style/newheader.css';

class NewHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('history', this.props.history);
    return (
      <div className="newheader">
        <div className="header-area">
          <div className="logo2" />
          <ul className="mainMenu">
            <li>我的课程</li>
            <li>公开课</li>
          </ul>
          <div className="logReg">
            <div className="teacher-info">
              <a>你好，系统管理员</a>
              <span>|</span>
              <a>
                <img src={`/lms/ajax/images/news.png`} />
              </a>
              <span>|</span>
              <a
                onClick={() => {
                  this.props.history.replace('/');
                }}>
                退出
              </a>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    );
  }
}

export default NewHeader;
