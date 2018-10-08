import React, { Component } from 'react';
import '../../style/mainPage/course.css';
import axios from 'axios';
import CourseBox from './course_box';
import Tag from './tag';
import $ from 'jquery';

class CourseArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courselist: [],
      open: [],
      teacher: [],
      student: [],
      team: [],
      role: 'teacher', //teacher|open/student/term
      TimeFilter: 'now' //now|past|all
    };

    this.getData(`/lms/json/learning/listAllCourse`);
  }

  componentDidMount() {
    $('.test').css('color', 'red');
  }

  render() {
    return (
      <div className="content-area">
        <Tag
          changeState={(state, index, e) => this.changeState(state, index, e)}
        />
        <CourseBox index={this.state.role} state={this.coursefilter()} />
      </div>
    );
  }

  getData(url) {
    const request = axios.get(url).then(res => {
      console.log('resdata', res.data);
      this.setState({
        open: res.data.open,
        teacher: res.data.teacher,
        team: res.data.open,
        student: res.data.student,
        courselist: res.data.teacher
      });
    });
  }

  coursefilter() {
    const course = this.state[this.state.role];

    return course.filter(item => {
      const now = new Date();
      const startDate = new Date(item.startDate);
      const endDate = new Date(item.endDate);
      switch (this.state.TimeFilter) {
        case 'now':
          //console.log(item.name);
          return now < endDate;
          break;
        case 'past':
          return now > endDate;
          break;
        default:
          return true;
      }
    });
  }

  changeState(state, index) {
    console.log(state, index);
    // // 把他兄弟元素的class 移除 remove
    // console.log('eeeee', e.target.classList);
    // console.log('kkkkkkkkkk', e);
    // e.target.classList.remove('test');
    // e.target.classList.add('test');
    if (index === 1) {
      this.setState({
        role: state
      });
    } else {
      this.setState({
        TimeFilter: state
      });
    }
  }
}

export default CourseArea;
