import React, { Component } from "react";
import { Form, Input, Button ,Divider, Checkbox, Row, Col} from 'antd';
import 'antd/dist/antd.css';
import * as userActions from "../../redux/actions/user-actions"
import * as adminActions from "../../redux/actions/admin-actions"
import "./auth.css"
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Blacklogo from "../../images/black-logo.png";
import LoginIcon from "../../images/login-logo.png";
import SignupIcon from "../../images/signup-logo.png";
import Proptypes from "prop-types"
const layout = { labelCol: {span: 24},wrapperCol: { span: 24}};
const headlogoStyle={width:"60%", marginLeft:"20%", marginRight:"20%", marginTop:"10%"}
const integrationIcons={width:"40%", height:"30px", marginLeft:"30%", marginRight:"30%", marginTop:"30px"}
const bottombuttons={width:"100%", background:"#000", color:"#fff", height:"45px"};
const continueFb= {width:"48%", background:"#000", color:"#fff", height:"45px",marginRight:"2%"};
const continueGoogle={width:"48%", background:"#000", color:"#fff", height:"45px",marginLeft:"2%"}

class Login extends Component {
  constructor(props) {
    super(props);
    this.state={
    viewloginForm:true
    }
    this.submit= this.submit.bind(this)
    this.gosignupForm= this.gosignupForm.bind(this)
  }

 async submit(values){
    if (values.name ){
      await this.props.register_USER(values);
    }else {
    await this.props.authenticate_USER(values);
    if (this.props.isLoggined){
      localStorage.setItem('userinfo', JSON.stringify(this.props.userinfo));
      if (this.props.userinfo && this.props.userinfo.role === 'ADMIN' ){
        this.props.history.push('/admin/dashboard');
        this.props._logout_login(true);
      }else {
        this.props._logout_login(false);
        this.props.history.push('/')
     
      }

    }else {

    }
    }
  }
  onFinishFailed = (errorInfo) => {};
  gosignupForm = () => {this.setState({viewloginForm:false})}
  goLoginForm = () => {this.setState({viewloginForm:true})}
  render() {
    return (
        <div >
          <img style={headlogoStyle} src ={Blacklogo}></img>
            {this.state.viewloginForm ?
          <img style={integrationIcons} src ={LoginIcon}></img> :
          <img style={integrationIcons} src ={SignupIcon}></img>}
                <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={this.submit}
      onFinishFailed={this.onFinishFailed}
 
    >
  <Row style={{marginTop:"20px", marginBottom:"20px"}}>
        <Button style={continueFb} >
          Continue with Facebook
        </Button>

        <Button style={continueGoogle} >
           Continue with Gmail
        </Button>

  </Row>
  {this.state.viewloginForm ?'':
     <Form.Item
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input your name!',
          },
        ]}
      >
        <Input style={{ height:"40px"}} placeholder="Please enter your name"/>
      </Form.Item>
  }
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input style={{ height:"40px"}} placeholder="Please enter Email ID"/>
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password style={{ height:"40px"}} placeholder="Please enter password"/>

      </Form.Item>
      {this.state.viewloginForm ? 
      <Checkbox style={{marginBottom:"10px"}}>Remember me</Checkbox>:''}
        {this.state.viewloginForm ? 
      <Form.Item><Button style={bottombuttons} htmlType="submit">Login</Button></Form.Item>:
     <Form.Item><Button style={bottombuttons} htmlType="submit">Sign Up</Button></Form.Item>
       }
     </Form>
     {this.state.viewloginForm ?
    <a onClick={()=>this.gosignupForm()}>Someone new ? Click here to Signup</a>:
    <a onClick={()=>this.goLoginForm()}>Already have an Account ? Login Here </a>
    
    }
    </div>
      
    );
  }
}
Login.propTypes = {
saveusermessage:Proptypes.string,
userinfo:Proptypes.object,
isLoggined:Proptypes.bool
};
function mapStateToProps(state) {
    return {
      ...state.user
    };
  }
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({ ...userActions, ...adminActions }, dispatch);
  }
  export default withRouter(connect(mapStateToProps,mapDispatchToProps,null,{ forwardRef: true }) (Login));

  