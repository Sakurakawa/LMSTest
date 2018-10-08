import React, { Component } from 'react';
import '../../style/mainPage/top.css';

class ContentTop extends Component {
  render() {
    return (
      <div className="background">
        <div className="allmargin">
          <div className="content-left">
            <img src={require('../../source/1468833457967.jpg')} alt=""/>
            <h1>系统管理员,下午好</h1>
            <p>人要独立生活，学习有用技艺</p>
          </div>
          <div className="content-right">
            <input type="button" value="创建课程" />
          </div>
        </div>
      </div>
    );
  }
}

export default ContentTop;
