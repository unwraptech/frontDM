import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import PropTypes from "prop-types";
import { Row, Col } from "antd"
import * as config from "../../config"
import * as MobileActions from "../../redux/actions/mobile-actions"
class DevicesByBrand extends React.Component {
  constructor(props){
    super(props);
    this.state={
      mobilelist : []
    }
  }
  componentDidMount() {
    console.log(this.props.match);
    if (this.props.match && this.props.match.params && this.props.match.params.brand){
      this.props.getMobileByBrand({Brand :this.props.match.params.brand}).then(data=>{
        console.log(data);
        this.setState({mobilelist: data.mobilebrands })
      })
    }
  }
  render() {

    return (
      <div style={{ marginLeft: "10%", marginRight: "10%" }}>
                <Row>
                    {this.state.mobilelist ? this.state.mobilelist.map((text, index) => (
                        <Col span={4} className="boxer" >
                            <img className="image-size2" src={config.image_URL + text.front_image_url}></img>
                            <span>{text.DeviceName}</span><br/>
                            {/* <span>{text.price}</span> */}
                        </Col>
                    )):[]}
                </Row>
            </div>

    )
  }
}
DevicesByBrand.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object
};
function mapStateToProps(state) {
  return {
    ...state.user
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...MobileActions }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps, null, { forwardRef: true })(DevicesByBrand));
