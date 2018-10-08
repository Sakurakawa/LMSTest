import React, {Component} from "react";
import axios from 'axios';
import '../App.css';
import {fetchCourse} from '../actions/index';
import {connect} from 'react-redux';

const ROOT_URL='/lms/json/learning/listTeacherResource';
class HomeworkDetail extends Component{
  // constructor(props){
  //   super(props);
  //   this.state={
  //     course:[]
  //   }
  //
  // }

  componentDidMount(){
    const {id}=this.props.match.params;
    this.props.fetchPost(id);
    console.log("redux");
    console.log(id);
  }

  render(){
    console.log("props");
    console.log(this.props);
    const {post}=this.props;
    console.log(post);
    return(
      <table className="table">
        <tr>
          <th></th>
          <th>序号</th>
          <th>章节</th>
          <th>名称</th>
          <th>开始时间</th>
          <th>截止时间</th>
          <th>备注</th>
          <th>操作</th>
        </tr>
        {
          post.map((item,i)=>{
            return(
              <tr>
                <th><input type="checkbox" style={{width:'20px',height:'20px'}} /></th>
                <th>{i+1}</th>
                <th>{item.name}</th>
                <th>aa</th>
                <th>{item.startDate}</th>
                <th>{item.endDate}</th>
                <th>aaaa</th>
                <th>批改</th>
              </tr>
            );
          })
        }
      </table>
    );
  }

}

function mapStateToProps(state){
  return {courses:state.courses};
}

export default connect(mapStateToProps)(HomeworkDetail);
