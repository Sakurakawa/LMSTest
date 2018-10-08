import React, {Component}from 'react';
import {Tree} from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios';
import '../../../style/course/courselist.css';
import { Link } from 'react-router-dom';

const TreeNode=Tree.TreeNode;

class Center extends Component {
  constructor(props){
    super(props);
    this.state={
      course:[]
    }

    this.fetchCourse(this.props.courseId);
  }

  onSelect = (selectedKeys,info)=>{
    console.log('selected',selectedKeys,info);
  }


  render(){
    console.log("section",this.state.course);
    var treelist;
    if(this.state.course.length>0)
    {
      treelist =
      <div className="maincourse">
      <Tree

        onSelect={this.onSelect} >
      {
        this.state.course.map((item,key)=>{
      return <TreeNode title={
        <div className="chaper">
            <span className="number">{key+1}</span>
            <span className="chaper_title">
              {item.name}
            </span>
        </div>
      } key={key}>
        {
          item.unit.map((item_u,key_u)=>{
            return <TreeNode title={<span className="course_item"
              key={key_u}
              >
              <span className="item_name">{item_u.name}</span>
              <div className="play" title="播放">
                <Link to={`/unit/${item_u.id}`}></Link>
              </div>
            </span>
          } />
          })
        }
        {
          item.homework.map((item_h,key_h)=>{
            var type;
            switch (item_h.type) {
              case "":
                type="课程作业:"
                break;
              case "2":
                type="课程大作业:"
                break;
              default:
                type="课程实验:"

            }
            return <TreeNode
              key={key_h}
              title={
            <div className="cell_text">
            <span>{type} </span>
            <span>{item_h.name}</span>
            <span className="ddl">截止时间: {item_h.endDate}</span>
            <div className="clear"></div>
            </div>
          }  />
          })
        }
      </TreeNode>
    })
    }
    </Tree>
  </div>
  }
  else{
    treelist=<div className="nocourse">
      <div className="ms">本课程暂时没有内容</div>
    </div>
  }

    var center;
    if(this.state.course.length==0)
      center=
      <div className="nocourse">
        <div className="ms">本课程暂时没有内容</div>
      </div>
    else
      {
        center=
        <div className="maincourse">
          {
            this.state.course.map((item,index)=>{
              const unit=item.unit.map((item_u,index_u)=>{
                return <div className="section" key={index_u}>
                  <span className="s_icon s_teacher"></span>
                  <span>{item_u.name}</span>
                  <span></span>
                  <div className="clear"></div>
                </div>
              });
              const homework=item.homework.map((item_h,index_h)=>{
                return <div className="section homework" key={index_h}>
                  <span className="s_icon s_teacher"></span>
                  <span>{item_h.name}</span>
                  <span>截止时间:{item_h.endDate}</span>
                  <div className="clear"></div>
                </div>
              });

              return (<div className="persection" key={index}>
                <div className="chaper chaper-background">
                  <span className="chaper-more"><i className="iconfont "></i></span>
                  <span className="num">{index+1}</span>
                  <span className="chapertitle"><span className="chaper_title">{item.name}</span></span>
                  <div className="clear"></div>
                </div>
                <div className="sectionarea displayNone">
                {unit}
                {homework}
                </div>
              </div>
            );

            })
          }
        </div>
      }

    return (
      <div className="center">
        <div className="c_l">
          <div className="c_la">
            {treelist}
          </div>
        </div>
      </div>
    );
  }

  fetchCourse(id) {
    axios.post(`/lms/json/learning/listStudentResource?courseId=${id}`).then(res => {
      this.setState({
        course: res.data.section
      });
    });
  }
}

export default Center;
