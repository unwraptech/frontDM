import React, { Component } from "react";
import "./index.scss";
import { Switch,  Route } from "react-router-dom";
import routeOptions from './routes/route'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom';
import PropTypes from "prop-types";
import * as AdminActions from "./redux/actions/admin-actions"
import AdminToolbar from "./components/admin/toolbar-admin"
import Toolbar from "./components/user/toolbar-user"

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
    }
  }
componentDidMount(){
  console.log(this.props);
  if (localStorage.getItem('userinfo')){
    this.setState(JSON.parse(localStorage.getItem('userinfo')));
    console.log(JSON.parse(localStorage.getItem('userinfo')));
    let _loc_str_data = JSON.parse(localStorage.getItem('userinfo'));
    console.log(_loc_str_data.role);
    if (_loc_str_data.role === "ADMIN"){
      // this.props.history.push("/admin/users");
        this.props._logout_login(true);
    }else {
      // this.props.history.push("/")
      this.props._logout_login(false);

    }
  }else {
    // this.props.history.push("/")
    this.props._logout_login(false);
  }
}

  render() {
    // const uri = window.location.pathname;
    let routes = routeOptions.routes.map(({ path, component, exact }, i) => (
      <Route
        key={Math.random() + "ROUTE_"}
        exact={exact}
        path={path}
        component={component}
      />
    ));
    return (
      <div style={{backgroundColor:"#F4F5F5"}}>
        {this.props.default_status ?
        <AdminToolbar></AdminToolbar>:
         <Toolbar></Toolbar>}
        
          <div >
            <Switch>
              {routes}
            </Switch>
          </div>
        </div>
    );
  }
}


App.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object
};
function mapStateToProps(state) {
  return {
    ...state.user
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...AdminActions }, dispatch);
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps,null,{ forwardRef: true }) (App));
 