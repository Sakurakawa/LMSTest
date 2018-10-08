import React, { Component } from 'react';
import '../../../../style/course/student/unit_item.css';
import UnitTop from './unit_top';
import UnitResources from './unit_resources';
import UnitNav from './unit_nav';

class UnitItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      url: '',
      type: 'pdf',
    };
  }

  render() {
    const id = this.props.match.params.id;
    console.log("url",this.state.url);
    // this.props.history.replace(this.state.url);
    return (
      <div className="main">
        <div className="play_l">
          <div className="play_l_inner">
            <UnitTop
              history={this.props.history}
              onSelectType={this.onSelectType.bind(this)}
              name={this.state.name}
              type={this.state.type}
              id={id}
            />
            <UnitResources type={this.state.type} id={id}  />
          </div>
        </div>
        <UnitNav
          history={this.props.history}
          id={id}
        />
        <div className="clear" />
      </div>
    );
  }

  onSelectType(type) {
    this.setState({ type });

  }
}

export default UnitItem;
