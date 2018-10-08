import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../../style/course/courselist.css';
import TeacherInfo from '../common/teacher_information';
import CourseTag from './course_tag';
import Center from './center';

class CourseList extends Component {
  constructor(props){
    super(props);

  }

  render(){
    const id = this.props.id;
    const coursetype = this.props.coursetype;
    return (
      <div className="course-box">
        <CourseTag id={id} coursetype={coursetype} />
        <div className="main-area">
          <Center id={id} coursetype={coursetype} />
          <TeacherInfo CourseId={id} />
        </div>
      </div>
    );
  }
}

export default CourseList;
