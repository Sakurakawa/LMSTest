import React, { Component } from 'react';
import '../../../style/course/coursetype.css';
import CourseTag from './course_tag';
import TeacherList from './teacherlist';
import TeacherInfo from '../common/teacher_information';
import axios from 'axios';

class Teacher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course: []
    };
    const id = this.props.CourseId;
    console.log('id', id);
    this.fetchCourse(id);
  }

  componentDidMount() {}

  render() {
    console.log('course', this.state.course);
    const CourseId = this.props.CourseId;
    const coursetype = this.props.coursetype;
    return (
      <div className="course-box">
        <CourseTag CourseId={CourseId} />
        <div className="main-area">
          <TeacherList course={this.state.course} />
          <TeacherInfo CourseId={CourseId} />
        </div>
      </div>
    );
  }

  fetchCourse(id) {
    const ROOT_URL = '/lms/json/learning/listTeacherResource';
    console.log('root');
    console.log(ROOT_URL);

    const request = axios.get(`${ROOT_URL}?courseId=${id}`).then(res => {
      console.log('data');
      console.log(res.data);
      this.setState({
        course: res.data.section
      });
    });
  }
}

export default Teacher;
