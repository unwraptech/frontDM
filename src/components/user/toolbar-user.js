import React, { Component } from "react";
import PropTypes from "prop-types";
import { AutoComplete, Tooltip, Select, Menu, Dropdown, Space } from "antd";
import { YoutubeFilled, TwitterOutlined, FacebookFilled, LoginOutlined, MenuOutlined, LogoutOutlined } from '@ant-design/icons';
import { Navbar } from "react-bootstrap";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as DashboardActions from "../../redux/actions/dashboard-actions";
import * as AdminActions from "../../redux/actions/admin-actions";

import { withRouter } from 'react-router-dom';
import Logo from "../../images/unwrap-logo.png";

import { Modal } from 'react-bootstrap'
import Login from "../auth/login";
const { Option } = Select
const iconstyle = { fontSize: '40px', color: '#ffffff', marginRight: "5px" }

class Toolbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      options: [],
      searchcret: [{ value: 'Macbook' }, { value: 'Asus' }, { value: 'Dell' }, { value: 'HP' }],
      value: '',
      showNavbar: true,
      showmodal: false,
      watchBrandList: [],
      tabsBrandList: [],
      mobileBrandList: []
    }
  }
  componentDidMount() {
    if (localStorage.getItem('userinfo')) {
      this.setState(JSON.parse(localStorage.getItem('userinfo')))
    }
  }
  viewTab = () => { this.setState({ showNavbar: true }) }
  hideTab = () => { this.setState({ showNavbar: false }) }
  onSearch = searchText => { this.setState({ options: !searchText ? [] : this.state.searchcret }) };
  onSelect = data => { console.log('onSelect', data) };
  onChange = data => { this.setState({ value: data }) };
  handleShow = () => {
    this.setState({ showmodal: true })
  };
  handleClose = () => { this.setState({ showmodal: false }) };
  handleLogout = () => {
    localStorage.clear();
    this.props.history.push('/')
  };

  render() {
    console.log(this.state.showNavbar, this.state.showmodal);

    const menu = (
      <Menu style={{ background: "#000" }}>
        <Menu.Item><a onClick={() => this.props.history.push('/compare/Mobiles')} style={{ color: "#FFF", borderBottom: "solid #FFF 1px" }}>Mobiles</a></Menu.Item>
        <Menu.Item><a onClick={() => this.props.history.push('/compare/Watches')} style={{ color: "#FFF", borderBottom: "solid #FFF 1px" }}>Watches</a></Menu.Item>
        <Menu.Item><a onClick={() => this.props.history.push('/compare/Tabs')} style={{ color: "#FFF" }}>Tablets</a></Menu.Item>
      </Menu>
    );
    return (
      <div>
        {/* Toolbar---> */}
        <Navbar className="justify-content-between" style={{ background: "#000" }}>
          <MenuOutlined onMouseOver={() => this.viewTab()} style={{ fontSize: '30px', color: '#ffffff' }} />
          <img onClick={() => this.props.history.push('/')} style={{ height: "40px" }} src={Logo}></img>
          <div style={{ width: "40%", display: "flex", }} >
            <div style={{ flex: "80%" }} >
              <AutoComplete
                style={{ width: "100%" }}
                options={this.state.options}
                onSelect={this.onSelect}
                onSearch={this.onSearch}
                placeholder="Search here"
              >
              </AutoComplete>
            </div>
            <div style={{ flex: "20%" }} >
              <Select defaultValue={0} style={{ width: "100%" }}>
                <Option value={0}>All</Option>
                <Option value={1}>Mobile</Option>
                <Option value={2}>Tablet</Option>
                <Option value={3}>Watch</Option>

              </Select>
            </div>
          </div>

          <div inline="true">
            <Tooltip placement="top" title="Follow us on Youtube"> <YoutubeFilled style={iconstyle} /></Tooltip>
            <Tooltip placement="top" title="Follow us on Twitter"><TwitterOutlined style={iconstyle} /></Tooltip>
            <Tooltip placement="top" title="Follow us on Facebook"><FacebookFilled style={iconstyle} /></Tooltip>
          </div>
          <div inline="true">
            {this.state.role ?
              <Tooltip placement="top" title="Logout"><LogoutOutlined onClick={this.handleLogout} style={iconstyle} /></Tooltip> :
              <Tooltip placement="top" title="Login"><LoginOutlined onClick={this.handleShow} style={iconstyle} /></Tooltip>

            }
          </div>
        </Navbar>
        {/* toolbar closed */}
        {/* secondtoolbar start */}
        {this.state.showNavbar ?
          <Navbar style={{ background: "#000", marginLeft: "10%", marginRight: "10%", marginTop: "1px" }}>
            {/* <Space> */}
            <a onClick={() => this.props.history.push('/smartphones')} style={{ color: "#FFF", width: "12%" }}> Smart Phone </a>
            <a onClick={() => this.props.history.push('/tabs')} style={{ color: "#FFF", width: "12%" }}> Tabs / iPAD </a>
            <a onClick={() => this.props.history.push('/smartwatch')} style={{ color: "#FFF", width: "12%" }}> Smart Watch </a>
            <a onClick={() => this.props.history.push('search')} style={{ color: "#FFF", width: "12%" }}>Advance Search</a>

            <Dropdown overlay={menu}><a className="ant-dropdown-link" style={{ color: "#fff", width: "12%" }}>Compare Devices</a></Dropdown>
            <a onClick={() => this.props.history.push('/latest-devices')} style={{ color: "#FFF", width: "12%" }}>Latest Devices</a>
            <a onClick={() => this.props.history.push('/technews')} style={{ color: "#FFF", width: "12%" }}>Tech News</a>
            <a onClick={() => this.props.history.push('/faq')} style={{ color: "#FFF", width: "12%" }}>FAQ</a>


            {/* </Space> */}

          </Navbar>

          : ""}
        {/* </div>} */}
        {/* second toolbar end */}

        {/* modal start */}
        {/* {this.props.default_status === false ? */}
        <Modal background="#000" show={this.state.showmodal} onHide={this.handleClose} animation={true}>
          <Modal.Body>
            <Login></Login>
          </Modal.Body>
        </Modal>
        {/* :''  */}
        {/* } */}

        {/* modal ends */}



      </div>
    )
  }

}
Toolbar.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object
};
function mapStateToProps(state) {
  return {
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...DashboardActions, ...AdminActions }, dispatch);
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps, null, { forwardRef: true })(Toolbar));
