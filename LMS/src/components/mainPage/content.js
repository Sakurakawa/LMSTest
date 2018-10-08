import React, { Component } from 'react';
import CourseArea from './course_area';
import Header from '../header';
import NewHeader from '../newheader';
import ContentTop from './content_top';
import Footer from '../footer';
import { connect } from 'react-redux';
import { login } from '../../actions';

class Content extends Component {
  componentDidMount() {
    //console.log('props', this.props.histroy);
    console.log('this.props', this.props);
    this.props.login();
  }
  render() {
    console.log('props', this.props.history);
    return (
      <div>
        <NewHeader history={this.props.history} />
        <ContentTop />
        <CourseArea />
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('state', state);
  return {
    allCourse: state.courses
  };
}

export default connect(
  mapStateToProps,
  { login }
)(Content);
