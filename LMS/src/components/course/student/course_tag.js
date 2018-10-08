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
            <li>通知</li>
          </Link>
          <li>笔记</li>
          <li>讨论</li>
          <li>作业</li>
        </ul>
        <ul style={{ float: 'right' }}>
          <li>资源下载</li>
          <li>案例库</li>
        </ul>
      </div>
    );
  }
}

export default CourseTag;
