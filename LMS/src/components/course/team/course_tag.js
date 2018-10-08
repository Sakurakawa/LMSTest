import React, { Component } from 'react';
import '../../../style/course/top.css';
import { Link } from 'react-router-dom';

class CourseTag extends Component {
  render() {
    const { id } = this.props.CourseId;
    console.log(this.props);
    console.log('idd', id);
    return (
      <div className="divtop">
        <ul>
          <li>课程内容</li>
          <Link to={`/homework/${id}`}>
            <li>作业</li>
          </Link>
          <li>实验</li>
          <li>大作业</li>
          <li>测验</li>
          <li>通知</li>
        </ul>
        <ul style={{ float: 'right' }}>
          <li>讨论</li>
          <li>学习进度</li>
          <li>课程评价</li>
          <li>公共资源库</li>
          <li>案例库</li>
          <li>题库</li>
        </ul>
      </div>
    );
  }
}

export default CourseTag;
