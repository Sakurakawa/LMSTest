import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../../style/course/common/contentdetail.css';

const ROOT_URL = '/lms/json/learning/courseDetail';

class ContentDetail extends Component {
  constructor(props) {
    super(props);
    console.log('aaa');
    console.log(this.props);
    this.state = {
      course: []
    };
  }

  componentDidMount() {
    const id = this.props.CourseId;
    this.fetchCourse(id);
  }

  render() {
    //const {course}=this.props;
    //console.log("aaa");
    //console.log(this.course);
    const {
      name,
      credit,
      startDateString,
      endDateString,
      textbook,
      introduction,
      filepath
    } = this.state.course;
    if (!this.state.course) {
      return <div>Loading...</div>;
    }

    return (
      <div className="course-detail">
        <div className="clear" />
        {this.getpic(filepath)}
        <div className="course-info">
          <h3>{name}</h3>
          <p>认证学分：{credit}学分</p>
          <p>
            授课时间：{startDateString}~{endDateString}
          </p>
          <p>教材课程：{textbook}</p>
          <p>课程介绍：{introduction}</p>
        </div>
      </div>
    );
  }

  fetchCourse(id) {
    const request = axios.get(`${ROOT_URL}?courseId=${id}`).then(res => {
      //console.log(res.data);
      this.setState({
        course: res.data
      });
      //console.log(this.state.course);
    });
  }

  getpic(filepath) {
    if (!filepath) {
      return <img src={`/lms/ajax/images/classimg.png`} />;
    } else {
      return (
        <img src={`http://211.66.87.236/lms/custom/384_216/${filepath}`} />
      );
    }
  }
}

export default ContentDetail;
