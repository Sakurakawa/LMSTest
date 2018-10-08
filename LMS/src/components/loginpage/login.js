import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../header.js';
import Footer from '../footer';
import MainDetail from './mainDetail';
import '../../style/loginpage.css';

class Login extends Component {
  render() {
    console.log('history', this.props.history);
    return (
      <div>
        <Header />
        <div className="main-style">
          <div className="main-box">
            <div className="main-detail-bg" />
            <div className="main-detail">
              <MainDetail history={this.props.history} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Login;
