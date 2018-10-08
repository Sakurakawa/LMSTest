import React, { Component } from 'react';
import '../../style/loginpage.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class MainDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  render() {
    return (
      <div>
        <h3 className="h3-style">用户登录</h3>
        <div className="login">
          <input
            type="text"
            className="login-user"
            onChange={event => this.inputChangeName(event.target.value)}
          />
          <input
            type="password"
            className="login-lock"
            onChange={event => this.inputChangePassword(event.target.value)}
          />
          <input type="checkbox" style={{ width: '12px', height: '12px' }} />
          <span>记住密码</span>

          <input
            type="button"
            value="登录"
            onClick={() =>
              this.post_test(
                `/lms/htmlLogin?username=${this.state.username}&password=${
                  this.state.password
                }`
              ).then(res => {
                console.log(res.data);
                if (res.status == 200 && res.data.result == 'success') {
                  this.props.history.replace('/course');
                } else {
                  alert('账号或密码错误');
                }
              })
            }
            className="login-button"
          />

          <div className="down-style">
            <p>
              建议在
              <span>
                <a href="http://www.chromeliulanqi.com/Chrome_Latest_Setup.exe">
                  {' '}
                  Chrome{' '}
                </a>
              </span>
              浏览器下访问
            </p>
          </div>
        </div>
      </div>
    );
  }

  post_test(url) {
    return axios({
      method: 'post',
      //headers:{'Content-type':'application/x-www-form-urlencoded'},
      url: url
      //data:data,
    })
      .then(function(res) {
        console.log(url + '\tPost请求到:');
        console.log(res);
        // window.location.href= url;
        if (res.status == 200) {
          return res;
        }
      })
      .catch(function(error) {
        alert('post失败');
        console.log(error);
      });
  }

  inputChangeName(term) {
    this.setState({
      username: term
    });
  }
  inputChangePassword(term) {
    this.setState({
      password: term
    });
  }
}

export default MainDetail;
