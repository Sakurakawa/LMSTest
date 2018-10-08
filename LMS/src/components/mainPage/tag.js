import React, { Component } from 'react';
import '../../style/mainPage/tag.css';
import $ from 'jquery';

class Tag extends Component {
  componentDidMount() {
    // $('.test').css('color', '#de782f');
    $('.list-area-left li').click(function() {
      $(this).css('color', '#de782f');
      $(this)
        .siblings()
        .css('color', '#000000');
    });

    $('.list-area-right li').click(function() {
      $(this).css({ color: '#ffffff', background: '#c91c1d' });
      $(this)
        .siblings()
        .css({ color: '#000000', background: '#ffffff' });
    });
  }
  render() {
    return (
      <div className="list-area">
        <div className="list-area-left">
          <ul>
            <li
              onClick={() => this.props.changeState('teacher', 1)}
              style={{ color: '#de782f' }}>
              我教的课程
            </li>
            <li onClick={() => this.props.changeState('team', 1)}>团队项目</li>
            <li onClick={() => this.props.changeState('student', 1)}>
              我学习的课程
            </li>
            <li
              style={{ border: '0px' }}
              onClick={() => this.props.changeState('open', 1)}>
              公开课
            </li>
          </ul>
        </div>
        <div className="list-area-right">
          <ul>
            <li
              onClick={() => this.props.changeState('now', 2)}
              style={{ color: '#ffffff', background: '#c91c1d' }}>
              正在进行
            </li>
            <li
              style={{ padding: '5px 17px' }}
              onClick={() => this.props.changeState('past', 2)}>
              已结束
            </li>
            <li
              style={{ padding: '5px 24px' }}
              onClick={e => this.props.changeState('all', 2)}>
              全部
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Tag;
