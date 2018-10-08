import {
  Modal,
  Button,
  Menu,
  Dropdown,
  Icon,
  DatePicker,
  Select,
  Upload,
  message
} from 'antd';
import React from 'react';
import moment from 'moment';
import axios from 'axios';
import Dropzone from 'react-dropzone';
import './css/addchapter.css';
const Option = Select.Option;

const URL = '/lms/json/creator/saveSection';
const dateFormat = 'YYYY-MM-DD';

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJPG = file.type === 'image/jpeg';
  if (!isJPG) {
    message.error('You can only upload JPG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJPG && isLt2M;
}

class AddChapter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      createDate: '',
      endDate: '',
      name: '',
      uploadedFile: null,
      uploadedFileCloudinaryUrl: ''
    };
  }

  handleChange = info => {
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({ imageUrl })
      );
    }
  };

  onSubmit() {
    axios
      .post(
        `${URL}`,
        `courseId=${this.props.CourseId}&sectionId=${
          this.props.sectionId
        }&name=${this.state.name}&endDate=${this.state.endDate}`
      )
      .then(() => this.props.changeState('addchapter', false));
    this.props.fetchCourse(this.props.CourseId);
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
    const menu = (
      <Menu>
        <Menu.Item>
          <p>item</p>
        </Menu.Item>
        <Menu.Item>
          <p>item</p>
        </Menu.Item>
      </Menu>
    );
    const imageUrl = this.state.imageUrl;
    return (
      <div>
        <Modal
          title="管理章节"
          visible={this.props.visible}
          onOk={this.handleOk}
          onCancel={() => this.props.changeState('addchapter', false)}
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
              onClick={() => this.props.changeState('addchapter', false)}>
              退出
            </Button>
          ]}>
          <div className="modalcontent">
            <div>
              <span className="span">
                章节名称<span className="iconstyle">*</span>
              </span>

              <input
                className="input"
                type="text"
                onChange={event => this.setState({ name: event.target.value })}
              />
            </div>

            <div>
              <span className="span">
                开始时间<span className="iconstyle">*</span>
              </span>

              <DatePicker
                defaultValue={moment('2017-10-27', dateFormat)}
                format={dateFormat}
              />

              <span className="span1">
                章节序号
                <span className="tdstyle">
                  <Select defaultValue="0" style={{ width: 100 }}>
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
                </span>
              </span>
            </div>
            <div>
              <span className="span">
                结束时间<span className="iconstyle">*</span>
              </span>

              <DatePicker
                defaultValue={moment('2020-02-11', dateFormat)}
                format={dateFormat}
                onChange={this.onChange}
              />
            </div>

            <Upload
              className="avatar-uploader"
              name="avatar"
              showUploadList={false}
              action="//jsonplaceholder.typicode.com/posts/"
              beforeUpload={beforeUpload}
              onChange={this.handleChange}>
              {imageUrl ? (
                <img src={imageUrl} alt="" className="avatar" />
              ) : (
                <div className="photo-text">上传照片</div>
              )}
            </Upload>

            <table>
              <tbody>
                <tr>
                  <td className="sp">章节介绍</td>
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

export default AddChapter;
