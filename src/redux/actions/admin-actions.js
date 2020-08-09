import API from "../apis/admin-api";
import {Types} from "../constants/user-types" 

export function getAllMobileDevices(brand) {
  return async function (dispatch, getState) {
    try {

      let resp = await API.getAllMobileDevices(brand);
      return resp.data;
    } catch (e) {
      return { "error": true };
    }
  };
}

export function getALLusers(type) {
  return async function (dispatch, getState) {
    try {

      let resp = await API.getALLusers(type);
      return resp.data;
    } catch (e) {
      return { "error": true };
    }
  };
}

export function getAllDevices(params) {
  return async function (dispatch, getState) {
    try {
      let resp = await API.getAllDevices(params);
      return resp.data;
    } catch (e) {
      return { "error": true };
    }
  };
}
export function getdevicebyid(id){
  return async function (dispatch, getState) {
    try {
      let resp = await API.getDeviceByid(id);
      return resp.data;
    } catch (e) {
      return { "error": true };
    }
  };
}
export function _logout_login(status) {
  return async function (dispatch, getState) {
      dispatch({ type: Types.DEFAULT_STATUS,payload: status});
  };
}

export function save_images(params) {
  return async function (dispatch, getState) {
    try {

      let resp = await API.saveimages(params);
      return resp.data;
    } catch (e) {
      return { "error": true };
    }
  };
}
export function getMobilesCount(params) {
  return async function (dispatch, getState) {
    try {

      let resp = await API.getMobilesCount(params);
      return resp.data;
    } catch (e) {
      return { "error": true };
    }
  };
}


