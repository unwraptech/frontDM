import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Popover, Button } from 'antd';
import { Table, Input, Col } from "antd";
import * as AdminActions from "../../redux/actions/admin-actions"
import * as paginationActions from "../../redux/actions/pagination-actions";
import { EyeTwoTone, EditTwoTone, FileImageTwoTone } from "@ant-design/icons";
import * as config from "../../config"

const text = <span>Title</span>;



class AdminMobile extends Component {
  constructor(props) {
    super(props);
    this.module = 'tiers';
    this.state = {
      loading: false,
      data: [],
      pagination: {
        pageSize: 10,
        current: 1,
        hideOnSinglePage: true,
        showTotal: (total, range) => {
          return (
            <span>
              Displaying {range[0]}-{range[1]}{" "}
              records of  {total}{" "}
            </span>
          );
        }
      },
      filters: {}
    };
    this.viewDeviceDetails = this.viewDeviceDetails.bind(this)
  }

  getSelectedFilterValue = (index) => {
    return this.props.paginginfo[this.module] && this.props.paginginfo[this.module].filter && this.props.paginginfo[this.module].filter[index] || null;
  }
  viewDeviceDetails = (id) => {
    this.props.getdevicebyid(id).then(mob => {
      console.log(mob);
    })
  }
  onimagelinkchange= (record , e ) =>{
    console.log(record, e.target.value );
    let renamed = record.DeviceName.replace(' ','_').concat('_',record.id)
    const params = {
      id : record.id ,
      url : e.target.value,
      name : renamed
    }
    console.log(renamed);
    this.props.save_images(params).then(res=>{
      console.log(res);
      if (res.message === "user list"){
        this.handleTableChange({ current: 1, pageSize: 10 }, {}, {}, true);

      }
    })
  }
  getHeaderKeys = () => {
    let keys = [
      {
        title: 'DeviceName',
        dataIndex: 'DeviceName',
        key: 'DeviceName',
        width: "20%",
        render: (text, record) => (
          <div>
            {/* <img style={{height:"100px"}} src={config.image_URL+record.front_image_url}></img><br/> */}
           <span>{record.DeviceName}</span> </div>
        )
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        width: "20%"
      },
      {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        width: "20%",
        render: (text, record) => (
          <div>
            {record.price ? record.price : <Input placeholder="Enter price" />}
          </div>
        )
      },
      {
        title: 'Image',
        dataIndex: 'details',
        width: "20%",
        render: (text, record) => (
          <div>
            {record.front_image_url ? 
              "Updated" 
          :  
          <Input placeholder="Enter image URL" onChange={(e)=>this.onimagelinkchange(record,e )} />
          
          }
          </div>
              )      },
      {
        title: 'Details',
        dataIndex: 'details',
        width: "20%",
        render: (text, record) => (
          <a style={{ color: "#000555" }} onClick={() => this.viewDeviceDetails(record.id)}>View</a>
        )
      }
    ]
    return keys;
  };


  handleSearch = (
    selectedKeys,
    confirm,
    dataIndex,
    clearFilters,
    setSelectedKeys
  ) => {
    confirm();
    this.setState({ searchText: selectedKeys });
    let filters = this.state.filters;
    filters[dataIndex] = {
      val: selectedKeys,
      clearf: clearFilters,
      filter: true,
      setSelectedKeys: setSelectedKeys,
      confirm: confirm,
      auto: true
    };
    this.setState({ filters: filters });
    this.props.updateFilters({ module: this.module, filters: filters });
  };

  handleReset = (clearFilters, dataIndex) => {
    clearFilters();
    let filters = this.state.filters;
    if (filters[dataIndex]) {
      if (filters[dataIndex].setSelectedKeys && typeof filters[dataIndex].setSelectedKeys === 'function') {
        filters[dataIndex].setSelectedKeys("");
        //filters[dataIndex].confirm();
      }
    }
    if (filters[dataIndex] && !filters[dataIndex].auto) {
      delete this.props.paginginfo[this.module].filter[dataIndex];
      this.handleTableChange({ current: 1, pageSize: 10 }, this.props.paginginfo[this.module].filter, {});

    }
    filters[dataIndex] = { val: "", clearf: "", filter: false };
    this.setState({ filters: filters });
    this.props.updateFilters({ module: this.module, filters: filters })
    this.setState({ searchText: "" });
  };

  async componentDidMount() {
    this.props.clearPaginationExceptMe(this.module);
    if (this.props.paginginfo && this.props.paginginfo[this.module]) {
      this.handleTableChange(this.props.paginginfo[this.module].pagination, this.props.paginginfo[this.module].filter, {}, true);
      if (this.props.paginginfo[this.module].filters) {
        let filters = this.props.paginginfo[this.module].filters
        Object.keys(filters).map(k => { filters[k].auto = false });
        this.setState({ filters: filters });
      }
    } else {
      this.handleTableChange({ current: 1, pageSize: 10 }, {}, {}, true);
    }
  }

  editItem = id => {
    this.props.history.push("" + id);
  };
  handleTableChange = (pagination, filters, sorter, manual) => {
    if (filters === undefined) filters = {};
    Object.keys(filters).map(key => { if ((!filters[key]) || (Array.isArray(filters[key]) && filters[key].length === 0)) { delete filters[key] } })
    const pager = { ...this.state.pagination };
    pager.current = pagination.current;
    if (manual !== true) {
      this.props.updatePaginationRemoveOld({
        module: this.module, filter: filters,
        pagination: { current: pagination.current, pageSize: pagination.pageSize }
      })
    }
    this.setState({ loading: true });
    const params = {
      noofrecords: pagination.pageSize,
      page: pagination.current,
      type: "MOBILE",
    }
    this.props
      .getAllDevices(params)
      .then(resp => {
        console.log(resp);
        pager.total = resp.body[0].count;
        this.setState({
          loading: false,
          data: resp.body,
          pagination: pager
        });
      })
      .catch(ex => {
        this.setState({ loading: false });
      });
  };
  render() {
    console.log(this.state.data);

    return (
      <div>

        <Table
          style={{ marginLeft: "230px", marginRight: "30px", marginTop: "30px" }}
          columns={this.getHeaderKeys()}
          rowKey={record => record.id}
          dataSource={this.state.data}
          pagination={this.state.pagination}
          loading={this.state.loading}
          onChange={this.handleTableChange}
          bordered
        />
      </div>
    );
  }
}
AdminMobile.propTypes = {
  location: PropTypes.object,
  getAllDevices: PropTypes.func
};
function mapStateToProps(state) {
  return {
    ...state.tiers,
    ...state.user,
    ...state.pagination
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...AdminActions, ...paginationActions }, dispatch);
}
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps, null, { forwardRef: true })(
    AdminMobile
  )
);
