import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { Table } from "react-bootstrap"
import { Col, Row, Input, Button, Card, Menu, Select } from "antd";
import * as MobileActions from "../../redux/actions/mobile-actions"
const { Option } = Select;
let firstselection = 0
let secondselection = 0
let thirdselection = 0
let fourthselection = 0
const addbuttonstyle = { width: "98%", height: "50px", marginTop: "2px", }
const buttonstyle = { background: "#000", color: "#fff", height: "46px", marginRight: "2%", marginTop: "4px" };
const headStyle ={width: "100%", height: "40px", backgroundColor: "#000", color: "#fff"}
const dataheadstyle = { width: "20%", fontWeight: "normal", background: "#FFFFFF" };
const datablackiststyle = { width: "20%", color: "#FFF", fontWeight: "normal", background: "#000000" }
const namer = [{
  DeviceName: "DeviceName",
  announced: "Announced Date",
  status: "Status",
  technology: "Technology",
  speed: "Speed",
  _2g_bands: "2g Bands",
  _3g_bands: "3g Bands",
  _4g_bands: "4g Bands",
  dimensions: "Dimentions",
  weight: "Weight",
  build: "Build",
  type: "Type",
  display_c: "Display",
  size: "Size",
  resolution: "Resolution",
  protection: "Protection",
  sim: "Sim",
  single: "",
  triple: "Camera",
  wlan: "WLAN",
  bluetooth: "Bluetooth",
  gps: "GPS",
  nfc: "NFC",
  radio: "Radio",
  usb: "USB",
  loudspeaker_: "Loudspeaker",
  _3_5mm_jack_: "3.5 mm Jack",
  sensors: "Sensors",
  features_c: "Feature",
  body_c: "Body",
  sound_c: "Sound",
  models: "Models",
  colors: "Colors",
  edge: "Edge",
  video: "Video",
  price: "Price",
  sar: "Sar",
  gprs: "GPRS",
  sound_c: "Sound",
  charging: "Charging",
  battery_c: "Battery",
  os: "OS",
  chipset: "Chipset",
  cpu: "CPU",
  gpu: "GPU",
  internal: "Memory",
  card_slot: "Card Slot",
  dual_:""
}]
class CompareTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchmobile_list: [],
      comparingdata: []
    }
  }
  search_mobiles = (search) => {
    console.log('inner', search);
    let search_mobiles = {
      search: search,
      type : 2
    }
    this.props.search_mobiles(search_mobiles).then(data => {
      this.setState({ searchmobile_list: data.mobilebrands })
    })
  }
  selection = (e, value) => {

    console.log(e, value);
    if (value === 1) { firstselection = e }
    if (value === 2) { secondselection = e }
    if (value === 3) { thirdselection = e }
    if (value === 4) { fourthselection = e }
    const params = {
      id1: firstselection,
      id2: secondselection,
      id3: thirdselection,
      id4: fourthselection
    }
    this.props.compare_mobiles(params).then(data => {
      if (data && data.mobilebrands) {
        this.setState({ comparingdata: data.mobilebrands })

      }
    })
  }
  componentDidMount() {
    this.selection();
  }
  render() {
    const comparingdata = namer.concat(this.state.comparingdata);
    console.log(comparingdata);

    var constel = 4;
    const menu = (
      <Menu style={{ background: "#000" }}>
        <Menu.Item><a onClick={() => this.props.history.push('/mobile/compareTabss')} style={{ color: "#FFF", borderBottom: "solid #FFF 1px" }}>Mobiles</a></Menu.Item>
        <Menu.Item><a onClick={() => this.props.history.push('/watch/comparewatches')} style={{ color: "#FFF", borderBottom: "solid #FFF 1px" }}>Watches</a></Menu.Item>
        <Menu.Item><a onClick={() => this.props.history.push('/tablet/comparetablets')} style={{ color: "#FFF" }}>Tablets</a></Menu.Item>
      </Menu>
    );
    return (
      <div style={{ marginLeft: "10%", marginRight: "10%" }}>
        <Row style={{ height: "45px" }}>
          <Col style={{ border: "solid #FFFFFF 1px" }} span={6}>
            <Select
              style={{ width: "100%", padding: "5px" }} placeholder="Please select Tab"
              // onPopupScroll={this.fetchParentOrganizations} 
              onSearch={this.search_mobiles} onSelect={(e) => this.selection(e, 1)} filterOption={false} showSearch >
              {this.state.searchmobile_list ? this.state.searchmobile_list.map(function (item) {
                return (<Option key={item.id}> {item.DeviceName} </Option>)
              }) : ""}
            </Select>
          </Col>
          <Col style={{ border: "solid #FFFFFF 1px" }} span={6}>
            <Select
              style={{ width: "100%", padding: "5px" }} placeholder="Please select Tab"
              // onPopupScroll={this.fetchParentOrganizations} 
              onSearch={this.search_mobiles} onSelect={(e) => this.selection(e, 2)} filterOption={false} showSearch >
              {this.state.searchmobile_list ? this.state.searchmobile_list.map(function (item) {
                return (<Option key={item.id}> {item.DeviceName} </Option>)
              }) : ""}
            </Select>
          </Col>
          <Col style={{ border: "solid #FFFFFF 1px" }} span={6}>
            <Select
              style={{ width: "100%", padding: "5px" }} placeholder="Please select Tab"
              // onPopupScroll={this.fetchParentOrganizations} 
              onSearch={this.search_mobiles} onSelect={(e) => this.selection(e, 3)} filterOption={false} showSearch >
              {this.state.searchmobile_list ? this.state.searchmobile_list.map(function (item) {
                return (<Option key={item.id}> {item.DeviceName} </Option>)
              }) : ""}
            </Select>
          </Col>
          <Col style={{ border: "solid #FFFFFF 1px" }} span={6}>
            <Select
              style={{ width: "100%", padding: "5px" }} placeholder="Please select Tab"
              // onPopupScroll={this.fetchParentOrganizations} 
              onSearch={this.search_mobiles} onSelect={(e) => this.selection(e, 4)} filterOption={false} showSearch >
              {this.state.searchmobile_list ? this.state.searchmobile_list.map(function (item) {
                return (<Option key={item.id}> {item.DeviceName} </Option>)
              }) : ""}
            </Select>
          </Col>
          {/* <Button style={buttonstyle}>Add More Devices</Button> */}
        </Row>
        {/* <Row style={{ height: "100px" }}>
          <Col span={6}>

          </Col>
        </Row> */}
        {this.state.comparingdata && this.state.comparingdata.length > 1 ?
          <div>
            <Table striped bordered hover>
              <thead>
                <tr>{comparingdata.map(dat =>(<th style={datablackiststyle}>{dat.DeviceName}</th>))}</tr>
              </thead>
              <tbody>
                <tr>{comparingdata.map(dat => (<th style={dataheadstyle}><img src={dat.front_image_url}
                 style={{ width: "100%", padding: "20px", background: "#FFF" }}></img></th>))}</tr>
                <tr>{comparingdata.map(dat => (<th style={dataheadstyle}>{dat.announced? dat.announced :"-"}</th>))}</tr>
                <tr>{comparingdata.map(dat => (<th style={dataheadstyle}>{dat.status? dat.status :"-"}</th>))}</tr>
              </tbody>
            </Table>
            <Button style={headStyle}>Networks:</Button>
            <Table striped bordered hover>
              <tbody>
                <tr>{comparingdata.map(dat =>(<th style={dataheadstyle}>{dat.technology? dat.technology :"-"}</th>))}</tr>
                <tr>{comparingdata.map(dat =>(<th style={dataheadstyle}>{dat.speed? dat.speed :"-"}</th>))}</tr>
                <tr>{comparingdata.map(dat =>(<th style={dataheadstyle}>{dat._2g_bands? dat._2g_bands :"-"}</th>))}</tr>
                <tr>{comparingdata.map(dat =>(<th style={dataheadstyle}>{dat._3g_bands? dat._3g_bands :"-"}</th>))}</tr>
                <tr>{comparingdata.map(dat =>(<th style={dataheadstyle}>{dat._4g_bands? dat._4g_bands :"-"}</th>))}</tr>
              </tbody>
            </Table>
            <Button style={headStyle}>General Specs:</Button>
            <Table striped bordered hover>
              <tbody>
                <tr>{comparingdata.map(dat =>(<th style={dataheadstyle}>{dat.dimensions? dat.dimensions :"-"}</th>))}</tr>
                <tr>{comparingdata.map(dat =>(<th style={dataheadstyle}>{dat.weight? dat.weight :"-"}</th>))}</tr>
                <tr>{comparingdata.map(dat =>(<th style={dataheadstyle}>{dat.build? dat.build :"-"}</th>))}</tr>
                <tr>{comparingdata.map(dat =>(<th style={dataheadstyle}>{dat.body_c? dat.body_c :"-"}</th>))}</tr>
                <tr>{comparingdata.map(dat =>(<th style={dataheadstyle}>{dat.type? dat.type :"-"}</th>))}</tr>
                <tr>{comparingdata.map(dat =>(<th style={dataheadstyle}>{dat.display_c? dat.display_c :"-"}</th>))}</tr>
                <tr>{comparingdata.map(dat =>(<th style={dataheadstyle}>{dat.size? dat.size :"-"}</th>))}</tr>
                <tr>{comparingdata.map(dat =>(<th style={dataheadstyle}>{dat.resolution? dat.resolution :"-"}</th>))}</tr>
                <tr>{comparingdata.map(dat =>(<th style={dataheadstyle}>{dat.protection? dat.protection :"-"}</th>))}</tr>
                <tr>{comparingdata.map(dat =>(<th style={dataheadstyle}>{dat.sim? dat.sim :"-"}</th>))}</tr>
              </tbody>
            </Table>
            <Button style={headStyle}>Camera:</Button>
            <Table striped bordered hover>
              <tbody>
                <tr>{comparingdata.map(dat => (<th style={dataheadstyle}><span>{dat.single}{dat.dual_}{dat.triple}</span></th>))}</tr>
                <tr>{comparingdata.map(dat => (<th style={dataheadstyle}>{dat.video? dat.video :"-"}</th>))}</tr>
              </tbody>
            </Table>
            <Button style={headStyle}>Communications</Button>
            <Table striped bordered hover>
              <tbody>
                <tr>{comparingdata.map(dat => (<th style={dataheadstyle}>{dat.wlan? dat.wlan :"-"}</th>))}</tr>
                <tr>{comparingdata.map(dat => (<th style={dataheadstyle}>{dat.bluetooth? dat.bluetooth :"-"}</th>))}</tr>
                <tr>{comparingdata.map(dat => (<th style={dataheadstyle}>{dat.gps? dat.gps :"-"}</th>))}</tr>
                <tr>{comparingdata.map(dat => (<th style={dataheadstyle}>{dat.nfc? dat.nfc :"-"}</th>))}</tr>
                <tr>{comparingdata.map(dat => (<th style={dataheadstyle}>{dat.radio? dat.radio :"-"}</th>))}</tr>
                <tr>{comparingdata.map(dat => (<th style={dataheadstyle}>{dat.usb? dat.usb :"-"}</th>))}</tr>
                <tr>{comparingdata.map(dat => (<th style={dataheadstyle}>{dat.loudspeaker_? dat.loudspeaker_ :"-"}</th>))}</tr>
                <tr>{comparingdata.map(dat => (<th style={dataheadstyle}>{dat._3_5mm_jack_? dat._3_5mm_jack_ :"-"}</th>))}</tr>
              </tbody>
            </Table>
            <Button style={headStyle}>Features and Performance</Button>
            <Table striped bordered hover>
              <tbody>
                <tr>{comparingdata.map(dat => (<th style={dataheadstyle}>{dat.sensors? dat.sensors :"-"}</th>))}</tr>
                <tr>{comparingdata.map(dat => (<th style={dataheadstyle}>{dat.features_c? dat.features_c :"-"}</th>))}</tr>
              </tbody>
            </Table>
            <Button style={headStyle}>Memory</Button>
            <Table striped bordered hover>
              <tbody>
                <tr>{comparingdata.map(dat => (<th style={dataheadstyle}>{dat.internal? dat.internal :"-"}</th>))}</tr>
                <tr>{comparingdata.map(dat => (<th style={dataheadstyle}>{dat.card_slot? dat.card_slot :"-"}</th>))}</tr>
              </tbody>
            </Table>
            <Button style={headStyle}>Platform Information</Button>
            <Table striped bordered hover>
              <tbody>
                <tr>{comparingdata.map(dat =>(<th style={dataheadstyle}>{dat.os? dat.os :"-"}</th>))}</tr>
                <tr>{comparingdata.map(dat =>(<th style={dataheadstyle}>{dat.chipset? dat.chipset :"-"}</th>))}</tr>
                <tr>{comparingdata.map(dat =>(<th style={dataheadstyle}>{dat.cpu? dat.cpu :"-"}</th>))}</tr>
                <tr>{comparingdata.map(dat =>(<th style={dataheadstyle}>{dat.gpu? dat.gpu :"-"}</th>))}</tr>
              </tbody>
            </Table>
            <Button style={headStyle}>Others</Button>
            <Table striped bordered hover>
              <tbody>
                <tr>{comparingdata.map(dat => (<th style={dataheadstyle}>{dat.sound_c? dat.sound_c :"-"}</th>))}</tr>
                <tr>{comparingdata.map(dat => (<th style={dataheadstyle}>{dat.charging? dat.charging :"-"}</th>))}</tr>
                <tr>{comparingdata.map(dat => (<th style={dataheadstyle}>{dat.battery_c? dat.battery_c :"-"}</th>))}</tr>
                <tr>{comparingdata.map(dat => (<th style={dataheadstyle}>{dat.colors? dat.colors :"-"}</th>))}</tr>
                <tr>{comparingdata.map(dat => (<th style={dataheadstyle}>{dat.gprs? dat.gprs :"-"}</th>))}</tr>
                <tr>{comparingdata.map(dat => (<th style={dataheadstyle}>{dat.edge? dat.edge :"-"}</th>))}</tr>
                <tr>{comparingdata.map(dat => (<th style={dataheadstyle}>{dat.price? dat.price :"-"}</th>))}</tr>
                <tr>{comparingdata.map(dat =>(<th style={dataheadstyle}>{dat.sar? dat.sar :"-"}</th>))}</tr>
              </tbody>
            </Table>
          </div> : ""}
      </div>
    )
  }
}
CompareTabs.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object
};
function mapStateToProps(state) {
  return {

  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...MobileActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CompareTabs);
