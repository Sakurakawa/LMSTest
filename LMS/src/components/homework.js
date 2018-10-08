import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import HomeworkDetail from './homework_detail';

class Homework extends Component {
  render() {
    console.log('ccc');
    console.log(this.props);
    return (
      <div style={{ background: '#eeeeee' }}>
        <Header />
        <div className="course-box">
          <HomeworkDetail />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Homework;
