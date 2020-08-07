import axios from "axios";
import * as config from "../../config"
const getAllMobileDevices = data => {
  return axios.get(config.localweb_URL+config.base_PATH+"/mobiles/get-mobile-by-brand/"+data);
};
const getALLusers = data => {
  return axios.get(config.localweb_URL+config.base_PATH+"/admin/auth/getUsers/", data);
};
const getAllDevices = params => {
  
  return axios.post(config.localweb_URL+config.base_PATH+"/admin/devices/get-devices/",params);
};

const getDeviceByid = id => {
  
  return axios.get(config.localweb_URL+config.base_PATH+"/admin/devices/getDeviceById/"+id);
};
export default {
    getAllMobileDevices,
    getALLusers,
    getAllDevices,
    getDeviceByid
};

