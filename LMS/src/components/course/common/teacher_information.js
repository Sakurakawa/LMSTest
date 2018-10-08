import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../../style/course/common/teacherInfo.css';

const ROOT_URL = '/lms/json/learning/getTeacherOfCourse';

class TeacherInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teacher: []
    };
  }

  componentDidMount() {
    const id = this.props.CourseId;
    this.fetchCourse(id);
  }

  render() {
    if (!this.state.teacher) {
      return <div>Loading...</div>;
    }

    return (
      <div className="teacher">
        <div className="teacher-detail">
          <div className="teacher-top">
            <h3>
              授课教师
              <span style={{ fontSize: '10pt' }}>(教师排序)</span>
            </h3>
          </div>
          <div className="teacher-list">
            <ul>
              {this.state.teacher.map(item => {
                return (
                  <li>
                    {this.getpic(item)}

                    <p>
                      {item.name}
                      <span>{this.typejudge(item.teacherType)}</span>
                    </p>
                    <p>{item.email}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="judge-detail">
          <div className="teacher-top">
            <h3>学生对课程评价</h3>
          </div>
        </div>
      </div>
    );
  }

  fetchCourse(id) {
    const request = axios.get(`${ROOT_URL}?courseId=${id}`).then(res => {
      this.setState({
        teacher: res.data.teacher
      });
    });
  }

  getpic(item) {
    if (!item.photo) {
      return (
        <div
          className="img-bg"
          style={{
            backgroundImage: `url(/lms/ajax/images/t2.png)`
          }}
        />
      );
    } else {
      return (
        <div
          className="img-bg"
          style={{
            backgroundImage: `url(http://211.66.87.236/lms/custom/${
              item.photo
            })`
          }}
        />
      );
    }
  }
  typejudge(type) {
    switch (type) {
      case '1':
        return '开课老师';
        break;
      case '2':
        return '主讲老师';
        break;
      case '3':
        return '助教';
        break;
      default:
    }
  }
}

export default TeacherInfo;
