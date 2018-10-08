import { Modal, Button } from 'antd';
import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import { DatePicker } from 'antd';
import moment from 'moment';
import axios from 'axios';
import './css/addhomework.css';

const URL = '/lms/json/learning/saveHomework';
const dateFormat = 'YYYY-MM-DD';
class AddHomework extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      createDate: '',
      endDate: '',
      name: ''
    };
  }

  onSubmit() {
    axios
      .post(
        `${URL}?type=${this.props.type}`,
        `sectionId=${this.props.sectionId}&name=${this.state.name}&endDate=${
          this.state.endDate
        }`
      )
      .then(() => this.props.changeState('addhomework', false));

    console.log('success post');
  }

  onChange = value => {
    const newDate = moment(value._d).format('YYYY-MM-DD HH:mm:ss');
    this.setState({
      endDate: newDate
    });
    console.log('field', value._d);
    console.log('value', newDate);
  };

  render() {
    return (
      <div>
        <Modal
          title="管理章节"
          visible={this.props.visible}
          onOk={this.handleOk}
          onCancel={() => this.props.changeState('addhomework', false)}
          width="750px"
          footer={[
            <Button
              key="submit"
              type="primary"
              size="large"
              loading={this.state.loading}
              onClick={() => this.onSubmit()}>
              保存
            </Button>,
            <Button
              key="back"
              size="large"
              onClick={() => this.props.changeState('addhomework', false)}>
              退出
            </Button>
          ]}>
          <div className="modalcontent">
            <div>
              <span className="span">作业名称：</span>
              <input
                className="input"
                type="text"
                onChange={event => this.setState({ name: event.target.value })}
              />
            </div>

            <div>
              <span className="span">开始时间：</span>

              <DatePicker
                defaultValue={moment('2017-10-27 00:00', dateFormat)}
                format={dateFormat}
              />

              <span className="span1">截止时间：</span>
              <DatePicker
                defaultValue={moment('2020-02-11 00:00', dateFormat)}
                format={dateFormat}
                onChange={this.onChange}
              />
            </div>

            <table>
              <tbody>
                <tr>
                  <td className="sp">作业说明：</td>
                  <td>
                    <textarea
                      className="text-area"
                      placeholder="教师可以在此描述对作业的一些特殊要求。例如：作业的文件格式，可以指定为pdf文件或者其他格式文件，甚至可以将需求的模板放在附件中，供同学们下载参考"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div>
              <span className="span">作业名称：</span>
              <a href="#">template.docx</a>
            </div>
            <div className="line" />
            <table className="table1">
              <tbody>
                <tr>
                  <td className="sp">说明附件：</td>
                  <td>
                    <input
                      disabled
                      className="input"
                      placeholder="可以上传作业说明的相关附件"
                    />
                  </td>
                  <td>
                    <Button>上传</Button>
                  </td>
                </tr>
                <tr>
                  <td className="sp">标准答案：</td>
                  <td>
                    <input
                      disabled
                      className="input"
                      placeholder="可以上传作业的标准答案（建议按答案模板填写答案）"
                    />
                  </td>
                  <td>
                    <Button>上传</Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Modal>
      </div>
    );
  }
}

export default AddHomework;
