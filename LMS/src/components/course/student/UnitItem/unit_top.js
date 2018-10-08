import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class UnitTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      unitId:''
    }

    this.fetchName(this.props.id);
  }

  render() {
    console.log('type', this.props.type);
    const pdf = this.props.type === 'pdf' ? 'active' : '';
    const video = this.props.type === 'video' ? 'active' : '';

    return (
      <div className="nv">
        <ul className="left">
          <li className="nv-item">
            <a
              onClick={()=>this.props.history.goBack()}
              className="btn_l fa fa-chevron-left fa-lg"
            >
              {"<"}
            </a>
          </li>
          <li className="nv-item">
            <a href="javascript:void(0);" className="title">
              <span>{this.state.name}</span>
            </a>
          </li>
        </ul>
        <ul className="center resource_tabSelect">
          <li className={pdf}>
            <a onClick={() => this.handleType('pdf')}>PDF</a>
          </li>
          <li className={video}>
            <a onClick={() => this.handleType('video')}>视频</a>
          </li>
        </ul>
      </div>
    );
  }

  handleType(type) {
    this.props.onSelectType(type);
  }

  fetchName(id){
    axios.post(`/lms/json/learning/listCourseResource?unitId=${id}`).then(res=>{
      this.setState({unitId:res.data.unitId});
      res.data.section.map( item =>{
        console.log("item.unit",item.unit);
        item.unit.map(item_u =>{
          if(item_u.id===id)
          this.setState({name:item_u.name});
        })
      })
    })
  }
}

export default UnitTop;
