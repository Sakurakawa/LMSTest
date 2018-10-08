import React, { Component } from 'react';
import '../../../style/course/coursetype.css';
import CourseTag from './course_tag';
import Center from './center';
import TeacherInfo from '../common/teacher_information';
import axios from 'axios';

class Student extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const CourseId = this.props.CourseId;
    const coursetype = this.props.coursetype;
    return (
      <div className="course-box">
        <CourseTag CourseId={CourseId} />
        <div className="main-area">
          <Center courseId={CourseId}/>
          <TeacherInfo CourseId={CourseId} />
        </div>
      </div>
    );
  }

}

export default Student;
