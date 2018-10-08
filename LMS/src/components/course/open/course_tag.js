import React, { Component } from 'react';
import '../../../style/course/top.css';
import { Link } from 'react-router-dom';

class CourseTag extends Component {
  render() {
    const { id } = this.props.CourseId;
    return (
      <div className="divtop">
        <ul>
          <li>课程内容</li>
        </ul>
      </div>
    );
  }
}

export default CourseTag;
