import React , { Component } from 'react';
import axios from 'axios';
import { Player } from 'video-react';
import { Document } from 'react-pdf';
import "video-react/dist/video-react.css";

class UnitResources extends Component {
    constructor(props){
      super(props);
      this.state={
        url:"",
        syllabus:""
      }

      this.fetchInitStoreType();
    }

    componentDidMount(){
     console.log("props",this.props);
    }


    render(){
    const id=this.props.id;
    console.log("uuuurl",this.state.url);
    const pdf=(this.props.type==="pdf"? "block" : "none");
    const video=(this.props.type==="video"?"block" : "none");
    return (
      <div className="main_container " style={{height:"100vh",width:"100%"}}>
        <div className="pdf" style={{display:pdf,height:"100%",position:"relative"}}>
          <embed
            id="pdfPlayer"
            src={this.state.syllabus}
            type="application/pdf"
            width="100%"
            height="100%"
          />
        </div>
        <div className="player" style={{display:video}} >
          {/* <Player>
            <source src={this.state.url} />
          </Player> */}

            <video
             id="videoPlayer"
             src={this.state.url}
             width="100%"
             height="100%"
           />
        </div>
      </div>
    );
  }

    fetchURL(filepath,syllabus){
      this.setState({
        url:`/weblib/group/downloadResource.action?id=${filepath}`,
        syllabus:`/weblib/group/downloadResource.action?id=${syllabus}&isInline=1`
      })
    }


    fetchInitStoreType(){
      axios.post('/lms/json/learning/initStoreType').then(res=>{
        this.fetchAuthenticate(res.data.weblibUsername,res.data.weblibPasswd);
      });
    }

    fetchAuthenticate(username,password){
      axios.post(`/weblib/login/authenticate.action?account=${username}&password=${password}`).then(res=>{
        // res.data.members.map(item=>{
        //   this.fetchSelectMember(item.id);
        // })

        this.fetchSelectMember(res.data.members[0].id);
      });
    }

    fetchSelectMember(id){
      axios.post(`/weblib/login/selectMember.action?memberId=${id}`);
      axios.post("/weblib/user/status.action");
      this.fetchGet(this.props.id);
    }

    fetchGet(id){
      axios.post(`/lms/json/learning/getCourseware?unitId=${id}`).then(res=>{
        this.fetchURL(res.data.filepath,res.data.syllabus);
      });
    }
  }

export default UnitResources;
