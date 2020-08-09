import React, { Component } from "react";
import { Row, Col } from "antd"
import { Navbar } from "react-bootstrap";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import PropTypes from "prop-types";
import * as AdminActions from "../../redux/actions/admin-actions"
import * as MobileActions from "../../redux/actions/mobile-actions"
import "./images.scss"
import * as config from "../../config"
class AllMobiles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brandlist: []
        }

    }
    componentDidMount() {
        this.props.getMobilesCount().then(apple => {
            this.setState({ brandlist: apple.devices })
        })
    }
    getMobiles = (data) => {
        console.log(data);
        this.props.history.push('/smartphones/brand/' + data.brand)
    }
    render() {
        return (
            <div style={{ marginLeft: "10%", marginRight: "10%" }}>
                <Row>
                    {this.state.brandlist.map((text, index) => (

                        <Col span={4} className="boxer" onClick={() => this.getMobiles(text)}>
                            <img className="image-size" src={config.brand_URL + text.image}></img>
                            <span>{text.brand}</span>
                        </Col>
                    ))}
                </Row>
            </div>



        )
    }

}


AllMobiles.propTypes = {
    history: PropTypes.object,
    match: PropTypes.object
};
function mapStateToProps(state) {
    return {
        ...state.user
    };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ ...MobileActions, ...AdminActions }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps, null, { forwardRef: true })(AllMobiles));
