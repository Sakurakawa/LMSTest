import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../../style/course/courselist.css';
import $ from 'jquery';
import { Collapse } from 'antd';
const Panel = Collapse.Panel;

class TeacherList extends Component {
  componentDidMount() {
    $('.add-course input ').hover(
      function() {
        console.log('this', $(this));
        $(this).css('color', '#ffffff');
        $(this).css('background', '#de782f');
      },
      function() {
        $(this).css('color', '#de782f');
        $(this).css('background', '#ffffff');
      }
    );

    $('.add_it input').hover(
      function() {
        $(this).css('color', '#ffffff');
        $(this).css('background', '#de782f');
      },
      function() {
        $(this).css('color', '#de782f');
        $(this).css('background', '#ffffff');
      }
    );
  }

  render() {
    return (
      <div className="maincourse">
        {this.props.course.map((item, i, e) => {
          return (
            <div
              className="chaper"
              onClick={e => {
                console.log('222222');
                console.log(e.target);
                $('.section ,.add_it').slideToggle('slow');
              }}>
              <span>
                <img
                  src={require('../../../source/next.png')}
                  className="iconfont"
                />
              </span>
              <span className="num">{i + 1}</span>
              <span className="chaper-title">
                <span className="title">{item.name}</span>
              </span>

              <span class="c_right">
                <img src={require('../../../source/delete.png')} />
              </span>
              <span class="c_right">
                <img src={require('../../../source/edit.png')} />
              </span>

              {item.unit.map(data => {
                return (
                  <div className="section" id={i}>
                    <span className="s_icon" />
                    <span className="cell_talk">
                      <span className="s_title">{data.name}</span>
                    </span>
                    <span class="s_right">
                      <img src={require('../../../source/delete.png')} />
                    </span>
                    <span class="s_right">
                      <img src={require('../../../source/edit.png')} />
                    </span>
                  </div>
                );
              })}
              {item.homework.map(data => {
                return (
                  <div className="section">
                    <span className="s_icon" />
                    <span className="cell_talk">
                      <span className="s_title">
                        {this.typejudge(data.type)}:
                      </span>
                      <span className="s_text">{data.name}</span>
                      <span className="s_title">截止时间</span>
                      <span className="s_text">{data.endDate}</span>
                    </span>
                    <span class="s_right">
                      <img src={require('../../../source/delete.png')} />
                    </span>
                    <span class="s_right">
                      <img src={require('../../../source/edit.png')} />
                    </span>
                    <span class="s_right">|</span>
                    <span class="s_right">
                      <img src={require('../../../source/correct.png')} />
                    </span>
                  </div>
                );
              })}
              <div class="add_it">
                <span class="add_btn" />
                <input
                  type="button"
                  value="+教学元素"
                  style={{ left: '70px' }}
                />
                <input type="button" value="+作业" style={{ left: '170px' }} />
                <input type="button" value="+实验" style={{ left: '270px' }} />
                <input
                  type="button"
                  value="+大作业"
                  style={{ left: '370px' }}
                />
              </div>
            </div>
          );
        })}
        <div className="add-course">
          <input
            type="button"
            value="+添加章节"
            style={{ left: '35px' }}
            id="add-course-input1"
          />
          <input
            type="button"
            value="查看期末考试"
            style={{ left: '135px', width: '100px' }}
            id="add-course-input2"
          />
        </div>
      </div>
    );
  }

  typejudge(type) {
    switch (type) {
      case 1:
        return '课程实验';
        break;
      case 2:
        return '课程大作业';
        break;
      default:
        return '课程作业';
    }
  }
}

export default TeacherList;
