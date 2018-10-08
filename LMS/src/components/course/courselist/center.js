import React, {Component}from 'react';
import {Tree} from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios';

const TreeNode=Tree.TreeNode;

class Center extends Component {
  constructor(props){
    super(props);

    this.state={
      section:[]
    }

    const id=this.props.id;
    var coursetype;
    switch (this.props.coursetype) {
      case "teacher":
        coursetype="Teacher";

        break;
      case "student":
        coursetype="Student";
        break;
      default:
        coursetype="Open";
    };
    axios.post(`/lms/json/learning/list${coursetype}Resource?courseId=${id}`).then(post=>{
      console.log("post:",post);
      this.setState({
        section:post.data.section
      })
    });
    console.log("section constructor",this.state.section);

}

  onSelect = (selectedKeys,info)=>{
    console.log('selected',selectedKeys,info);
  }


  render(){
    var type = this.props.coursetype;
    var edit_delete;
    var ed_homework;
    var add_new;
    switch (type) {
      case "teacher":
        edit_delete=(
          <span className="s_right s_d" title="删除">
            <img src={require('../../../source/delete.png')} />
          </span>
          <span className="s_right s_edit" title="删除">
            <img src={require('../../../source/edit.png')} />
          </span>
        )
        break;
      case "student":

        break;
      case "open":

        break;
      default:

    }
    var treelist;
    if(this.state.section.length>0)
    {
      treelist =
      <div className="maincourse">
      <Tree
        showLine
        onSelect={this.onSelect} >
      {
        this.state.section.map((item,key)=>{
      return <TreeNode title={
        <div className="chaper">
          <span className="chapertitle">
            <span className="num">{key+1}</span>
            <span className="chaper_title">
              {item.name}
            </span>
          </span>
          <div className="clear"></div>
        </div>
      } key={key}>
        {
          item.unit.map((item_u)=>{
            return <TreeNode title={<span>{item_u.name}</span>} />
          })
        }
        {
          item.homework.map((item_h)=>{
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
            return <TreeNode title={
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
    if(this.state.section.length==0)
      center=
      <div className="nocourse">
        <div className="ms">本课程暂时没有内容</div>
      </div>
    else
      {
        center=
        <div className="maincourse">
          {
            this.state.section.map((item,index)=>{
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
}

export default Center;
