import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../../style/course/courselist.css';
import $ from 'jquery';
import { Collapse } from 'antd';
const Panel = Collapse.Panel;

class TeamList extends Component {
  componentDidMount() {
    $('.chaper1').click(function() {
      $('.chaper').slideToggle('slow');
    });
  }

  render() {
    console.log('lll');
    console.log(this.props.course);
    return (
      <div className="maincourse">
        <div className="chaper1">
          <span className="num">1</span>
          <span className="s_left">name</span>
        </div>
        <div className="chaper">
          <p>bbb</p>
        </div>
      </div>
      // {this.state.course.map((item, i) => {
      //   return (
      //     <div>
      //       <div className="chaper1">
      //         <span className="num">{i + 1}</span>
      //         <span className="s_left">{item.name}</span>
      //         <span className="s_right">
      //           <img
      //             src={require('../../source/icon_section.png')}
      //             className="icon_right"
      //           />
      //         </span>
      //         <span className="s_right">
      //           <img
      //             src={require('../../source/icon_section.png')}
      //             className="icon_right"
      //           />
      //         </span>
      //       </div>
      //       <div className="chaper">
      //         <p>aaa</p>
      //       </div>
      //     </div>

      // {item.unit.map(data => {
      //   return (
      //     <div className="chaper">
      //       <span className="s-icon" />
      //       <span className="s_left">{data.name}</span>
      //       <span className="s_right">
      //         <img
      //           src={require('../../source/icon_section.png')}
      //           className="icon_right"
      //         />
      //       </span>
      //       <span className="s_right">
      //         <img
      //           src={require('../../source/icon_section.png')}
      //           className="icon_right"
      //         />
      //       </span>
      //     </div>
      //   );
      // })}
      // {item.homework.map(data => {
      //   return (
      //     <div className="chaper">
      //       <span className="s-icon" />
      //       <span className="s_left">
      //         {this.typejudge(data.type)}:{data.name} 截止时间：{
      //           data.endDate
      //         }
      //       </span>
      //       <span className="s_right">
      //         <img
      //           src={require('../../source/icon_section.png')}
      //           className="icon_right"
      //         />
      //       </span>
      //       <span className="s_right">
      //         <img
      //           src={require('../../source/icon_section.png')}
      //           className="icon_right"
      //         />
      //       </span>
      //       <span className="s_right">|</span>
      //       <span className="s_right">
      //         <img
      //           src={require('../../source/icon_section.png')}
      //           className="icon_right"
      //         />
      //       </span>
      //     </div>
      //   );
      // })}
      //   );
      // })}
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

export default TeamList;
