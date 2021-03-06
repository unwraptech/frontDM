import axios from "axios";
import * as config from "../../config"

const searchmobiles = params => {
  return axios.post(config.localweb_URL+config.base_PATH+"/user/mobiles/search-mobile/",params);
} 
const comparemobiledevices = params => {  
  return axios.post(config.localweb_URL+config.base_PATH+"/user/mobiles/compare-mobile", params);
}
const getMobileByBrand = params => {  
  return axios.post(config.localweb_URL+config.base_PATH+"/user/mobiles/getMobileByBrand", params);
}

export default {
    searchmobiles,
    comparemobiledevices,
    getMobileByBrand
 };
