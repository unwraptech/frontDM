import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import IntlMessages from "../../../services/intlMesseges";
import { Table, Row, Col } from "antd";
import * as AdminActions from "../../redux/actions/admin-actions"
import * as paginationActions from "../../redux/actions/pagination-actions";
class AdminUsers extends Component {
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
  }

  getSelectedFilterValue = (index) => {
    return this.props.paginginfo[this.module]&& this.props.paginginfo[this.module].filter && this.props.paginginfo[this.module].filter[index] || null;
  } 
  viewDeviceDetails = (id) => {
    console.log(id);
  }
  getHeaderKeys = () => {
    let keys = [
     
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        width: "25%"
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        width: "30%"
      },
      {
        title: 'Role',
        dataIndex: 'role',
        key: 'role',
        width: "20%"
      },
    
      {
        title: 'Creation Date',
        dataIndex: 'created_at',
        width: "25%",
     
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
      auto:true
    };
    this.setState({ filters: filters });
    this.props.updateFilters({module:this.module, filters: filters});
  };

  handleReset = (clearFilters, dataIndex) => {
    clearFilters();
    let filters = this.state.filters;
    if (filters[dataIndex]) {
      if(filters[dataIndex].setSelectedKeys && typeof filters[dataIndex].setSelectedKeys === 'function'){
        filters[dataIndex].setSelectedKeys("");
        //filters[dataIndex].confirm();
      }
    }
    if(filters[dataIndex] && !filters[dataIndex].auto){
      delete this.props.paginginfo[this.module].filter[dataIndex];
      this.handleTableChange({ current: 1, pageSize: 10 }, this.props.paginginfo[this.module].filter, {});
   
    }
    filters[dataIndex] = { val: "", clearf: "", filter: false };
    this.setState({ filters: filters });
    this.props.updateFilters({module: this.module, filters:  filters})
    this.setState({ searchText: "" });
  };

  async componentDidMount() {
    this.props.clearPaginationExceptMe(this.module);
    if(this.props.paginginfo && this.props.paginginfo[this.module]){
      this.handleTableChange(this.props.paginginfo[this.module].pagination, this.props.paginginfo[this.module].filter, {},true);
      if(this.props.paginginfo[this.module].filters){
       let filters = this.props.paginginfo[this.module].filters
       Object.keys(filters).map(k=> {filters[k].auto = false});
        this.setState({filters :  filters});
      }
    } else {
      this.handleTableChange({ current: 1, pageSize: 10 }, {}, {}, true);
    }
  }
 
  editItem = id => {
    this.props.history.push("" + id);
  };
  handleTableChange = (pagination, filters, sorter, manual) => {
    if(filters === undefined) filters={};
    Object.keys(filters).map( key => { if((!filters[key]) || (Array.isArray(filters[key]) && filters[key].length===0)) { delete filters[key] }} )
    const pager = { ...this.state.pagination };
    pager.current = pagination.current;
    if(manual !== true)
    {
      this.props.updatePaginationRemoveOld({module:this.module, filter: filters,
      pagination: { current: pagination.current, pageSize: pagination.pageSize }})
    }
    this.setState({ loading: true });
    const params = {
      noofrecords: pagination.pageSize,
      page: pagination.current,
      type: "WATCH",
    }
    this.props
      .getALLusers(params)
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
            style={{  marginLeft: "230px", marginRight: "30px", marginTop: "30px" }}
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
AdminUsers.propTypes = {
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
    AdminUsers
  )
);
