import React from 'react';
import { Menu, Dropdown, Icon, Select, Modal, Button, DatePicker } from 'antd';
import moment from 'moment';
import { connect } from 'react-redux';
import axios from 'axios';
import './css/addelement.css';
const Option = Select.Option;

const URL = '/lms/json/creator/saveUnit';
const dateFormat = 'YYYY-MM-DD';

function handleChange(value) {
  console.log(`selected ${value}`);
}
class AddElement extends React.Component {
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
        `${URL}`,
        `sectionId=${this.props.sectionId}&name=${this.state.name}&endDate=${
          this.state.endDate
        }`
      )
      .then(() => this.props.changeState('addelement', false));

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
    // console.log('modalbox', this.props.visible);

    const menu = (
      <Menu>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.alipay.com/">
            本地上传
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.taobao.com/">
            Weblib上传
          </a>
        </Menu.Item>
      </Menu>
    );

    return (
      <div>
        <Modal
          title="单一课堂教学元素（资料）生命周期管理"
          visible={this.props.visible}
          onOk={this.handleOk}
          onCancel={() => this.props.changeState('addelement', false)}
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
              onClick={() => this.props.changeState('addelement', false)}>
              退出
            </Button>
          ]}>
          <div className="modalcontent">
            <table>
              <tbody>
                <tr>
                  <td>资料名称:</td>
                  <td>
                    <input
                      className="input"
                      type="text"
                      onChange={event =>
                        this.setState({ name: event.target.value })
                      }
                    />
                  </td>
                  <td>
                    <span className="table-p">显示排序</span>
                  </td>
                  <td>
                    <Select
                      defaultValue="0"
                      style={{ width: 100 }}
                      onChange={handleChange}>
                      <Option value="0">可不填</Option>
                      <Option value="1">1</Option>
                      <Option value="2">2</Option>
                      <Option value="3">3</Option>
                      <Option value="4">4</Option>
                      <Option value="5">5</Option>
                      <Option value="6">6</Option>
                      <Option value="7">7</Option>
                      <Option value="8">8</Option>
                      <Option value="9">9</Option>
                      <Option value="10">10</Option>
                      <Option value="11">11</Option>
                      <Option value="12">12</Option>
                      <Option value="13">13</Option>
                      <Option value="14">14</Option>
                      <Option value="15">15</Option>
                    </Select>
                  </td>
                </tr>
                <tr>
                  <td>资料PDF:</td>
                  <td>
                    <input
                      disabled
                      className="input"
                      placeholder="提示：各种PPT，PPS等格式的课件请转化为PDF标准"
                    />
                  </td>
                  <td>
                    <Dropdown overlay={menu} placement="bottomCenter">
                      <Button>上传</Button>
                    </Dropdown>
                  </td>
                  <td>
                    <Button>清除</Button>
                  </td>
                </tr>
                <tr>
                  <td>资料视频:</td>
                  <td>
                    <input
                      disabled
                      className="input"
                      placeholder="提示：各种格式视频文件请先转换为MP4格式"
                    />
                  </td>
                  <td>
                    <Dropdown overlay={menu} placement="bottomCenter">
                      <Button>上传</Button>
                    </Dropdown>
                  </td>
                  <td>
                    <Dropdown overlay={menu} placement="bottomCenter">
                      <Button>清除</Button>
                    </Dropdown>
                  </td>
                </tr>
                <tr>
                  <td>辅导材料:</td>
                  <td>
                    <input
                      disabled
                      className="input"
                      placeholder="提示：可以上传任何格式的辅导资料供学生下载"
                    />
                  </td>
                  <td>
                    <Dropdown overlay={menu} placement="bottomCenter">
                      <Button>上传</Button>
                    </Dropdown>
                  </td>
                  <td>
                    <Dropdown overlay={menu} placement="bottomCenter">
                      <Button>清除</Button>
                    </Dropdown>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="line" />
            <table>
              <tbody>
                <tr>
                  <td>开始时间：</td>
                  <td>
                    <DatePicker
                      defaultValue={moment('2017-10-27', dateFormat)}
                      format={dateFormat}
                    />
                  </td>
                  <td>截止时间：</td>
                  <td>
                    <DatePicker
                      defaultValue={moment('2020-02-11', dateFormat)}
                      format={dateFormat}
                      onChange={this.onChange}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <table>
              <tbody>
                <tr>
                  <td className="sp">资料简介:</td>
                  <td>
                    <textarea className="text-area" />
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

export default AddElement;
