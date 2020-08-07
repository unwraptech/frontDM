import axios from "axios";
import * as config from "../../config"

const getMobileBrands = data => {
  return axios.get(config.localweb_URL + config.base_PATH + "/mobiles/get-mobile-brandName");
};
const getTabsBrands = data => {
  return axios.get(config.localweb_URL + config.base_PATH + "/tablets/get-tabs-brandName");
};
const getWatchBrands = data => {
  return axios.get(config.localweb_URL + config.base_PATH + "/watches/get-watches-brandName");
};
const getNews = data => {
  return axios.get(config.localweb_URL + config.base_PATH + "/files/get-news");
};
export default {
  getMobileBrands,
  getTabsBrands,
  getWatchBrands,
  getNews
};


