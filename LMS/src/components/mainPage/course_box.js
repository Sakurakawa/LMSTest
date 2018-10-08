import React, { Component } from 'react';
import '../../style/mainPage/course.css';
import { Link } from 'react-router-dom';

class CourseBox extends Component {
  render() {
    return (
      <div className="content-box">
        {this.props.state.map(item => {
          return (
            <div className="col">
              <div className="classdiv">
                {this.getpic(item)}

                <div className="class-info">
                  <h2>{item.name}</h2>
                  {this.sort(item)}
                  <div className="date">
                    课程:{item.startDateString}~{item.endDateString}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="clear" />
      </div>
    );
  }

  getpic(item) {
    if (!item.filepath) {
      return (
        <div
          className="imgdiv"
          style={{
            backgroundImage: `url(/lms/ajax/images/classimg.png)`
          }}>
          <Link to={`/${this.props.index}/${item.id}`} />
        </div>
      );
    } else {
      return (
        <div
          className="imgdiv"
          style={{
            backgroundImage: `url(http://211.66.87.236/lms/custom/384_216/${
              item.filepath
            })`
          }}>
          <Link to={`/${this.props.index}/${item.id}`} />
        </div>
      );
    }
  }
  sort(item) {
    //console.log(this.props.index);
    switch (this.props.index) {
      case 'teacher':
        return (
          <div>
            <p>创建者：{item.courseCreator}</p>
            <p>教师：{item.courseTeacherString}</p>
            <p>学生：{item.studentNum}</p>
          </div>
        );
        break;
      case 'open':
        return (
          <div>
            <p>创建者：{item.courseCreator}</p>
            <p>学生：{item.studentNum}</p>
          </div>
        );
        break;
      case 'student':
        return (
          <div>
            <p>创建者：{item.courseCreator}</p>
            <p>教师：{item.courseTeacherString}</p>
            <p>浏览量：{item.visits}</p>
          </div>
        );
        break;
      default:
        return (
          <div>
            <p>创建者：{item.courseCreator}</p>
            <p>学生：{item.studentNum}</p>
          </div>
        );
    }
  }

  linkTo(item) {
    switch (this.props.index) {
      case 'teacher':
        return (
          <Link to={`/teacher/${item.id}`}>
            <div
              className="imgdiv"
              style={{
                backgroundImage:
                  'url(' + require('../../source/1458718182282.jpg') + ')'
              }}
            />
          </Link>
        );
        break;
      case 'open':
        return (
          <Link to={`/open/${item.id}`}>
            <div
              className="imgdiv"
              style={{
                backgroundImage:
                  'url(' + require('../../source/1458718182282.jpg') + ')'
              }}
            />
          </Link>
        );
        break;
      case 'student':
        return (
          <Link to={`/student/${item.id}`}>
            <div
              className="imgdiv"
              style={{
                backgroundImage:
                  'url(' + require('../../source/1458718182282.jpg') + ')'
              }}
            />
          </Link>
        );
        break;
      default:
        return (
          <Link to={`/team/${item.id}`}>
            <div
              className="imgdiv"
              style={{
                backgroundImage:
                  'url(' + require('../../source/1458718182282.jpg') + ')'
              }}
            />
          </Link>
        );
    }
  }
}

export default CourseBox;
