
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom';
import PropTypes from "prop-types";
import * as AdminActions from "../../redux/actions/admin-actions"
import { Layout, Menu } from 'antd';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
  GoogleOutlined,
  FacebookOutlined,
  PictureOutlined,
} from '@ant-design/icons';
// import './index.css';
// 
const { Header, Content, Footer, Sider } = Layout;


class AdminToolbar extends Component{
constructor(props){
  super(props);
  this.state ={
    
  }
  this._logout = this._logout.bind(this)
}
    componentDidMount(){
      console.log('Admin toolbar',this.props.default_status)
    }
    _logout(){
      this.props._logout_login(false);
      localStorage.clear();
      this.props.history.push("/")
      
    }
    render(){
      console.log(this.props.default_status );
        return(<div>
          {this.props.default_status ? 
        <Layout>
        <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
            background:"#000"
          }}
        >
          <div className="logo" />
          <Menu style={{background:"#000", color:"#FFF"}} mode="inline" >
            <Menu.Item onClick={()=>this.props.history.push("/admin/users")} key="1" icon={<UserOutlined />}>
            All Users
            </Menu.Item>
            <Menu.Item onClick={()=>this.props.history.push("/admin/mobiles")} key="2" icon={<VideoCameraOutlined />}>
            All Mobiles
            </Menu.Item>
            <Menu.Item onClick={()=>this.props.history.push("/admin/tabs")} key="3" icon={<UploadOutlined />}>
            All Tabs
            </Menu.Item>
            <Menu.Item onClick={()=>this.props.history.push("/admin/watches")} key="4" icon={<BarChartOutlined />}>
            All Watches
            </Menu.Item>
          
            <Menu.Item key="11" onClick={()=>this._logout()} icon={<ShopOutlined />}>
            Logout
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          
        </Layout>
      </Layout>
              
        :<div></div>}
            
        </div>)
    }
}


AdminToolbar.propTypes = {
    history: PropTypes.object,
    match: PropTypes.object,
    _logout:PropTypes.func
  };
  function mapStateToProps(state) {
    return {
      ...state.user
    };
  }
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({ ...AdminActions }, dispatch);
  }
  
  export default withRouter(connect(mapStateToProps,mapDispatchToProps,null,{ forwardRef: true }) (AdminToolbar));
   