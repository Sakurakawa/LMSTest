import React , {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class UnitNav extends Component {
  constructor(props){
    super(props);
    this.state = {
      id:'',
      section:[]
    }

    this.fetchCourse(this.props.id);
  }

  render(){
    console.log("location",this.location);
    console.log("sId",this.state.id);
    var  list =
    <div className="r_menu tabContent" style={{height:"100vh",display:"block"}} >
      {
        this.state.section.map((item,key)=>{
        return <div className="persection" key={key}>
          <div className="chaper1" >
            <span className="num">{key+1}</span>
            <span className="chapertitle" ></span>
            <span className="chapertext" >{item.name}</span>
            <div className="clear"></div>
          </div>
          <div className="sectionarea">
            {
              item.unit.map((item_u,key_u)=>{
                return <div
                  key={key_u}
                  className={`section ${item_u.id}`}
                  onClick={()=>(window.location.href=`/unit/${item_u.id}`)}
                  >
                  <span className="s_icon s_doing"></span>
                  <span className="s_title"></span>
                  <span className="s_text" title="">{item_u.name}</span>
                  <span className="s_right s_play" rel={item_u.id} >
                  </span>
                  <div className="clear"></div>
                </div>
              })
            }
          </div>
        </div>
      })
    }
  </div>

    return(
      <div className="play_r">
        <ul className="r_tab">
            <li id="tab1" className="li_act"><a href="javascript:void(0)"><img src="/lms/ajax/images/tabml.png" alt="" />目录</a></li>
            <li id="tab2"><a href="javascript:void(0)"><img src="/lms/ajax/images/tabbj.png" alt="" />笔记</a></li>
            <li id="tab3"><a href="javascript:void(0)"><img src="/lms/ajax/images/tabtl.png" alt="" />讨论</a></li>
            <div className="clear"></div>
        </ul>
        {list}
      </div>
    );
  }

  setId(id){
    this.setState({id});
  }

  fetchCourse(id){
    axios.post(`/lms/json/learning/listCourseResource?unitId=${id}`).then(res=>{
      this.setState({
        section:res.data.section
      });
    });
  }

  handleJump(url){
    this.props.onSelectJump(url);
  }
}

export default UnitNav;
