import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom';
import PropTypes from "prop-types"
class LatestDevices extends React.Component{

componentDidMount(){

}
render(){
    return(
        <div>LatestDevices</div>
    )
}
}
LatestDevices.propTypes = {
    history: PropTypes.object,
    match: PropTypes.object
  };
  function mapStateToProps(state) {
    return {
      ...state.user
    };
  }
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({ }, dispatch);
  }
  
  export default withRouter(connect(mapStateToProps,mapDispatchToProps,null,{ forwardRef: true }) (LatestDevices));
   