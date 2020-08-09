import API from "../apis/mobiles-api";

export function search_mobiles(params) {
  return async function (dispatch, getState) {
    try {

      let resp = await API.searchmobiles(params);
      return resp.data;
    } catch (e) {
      return { "error": true };
    }
  };
}
export function compare_mobiles(params) {
  return async function (dispatch, getState) {
    try {

      let resp = await API.comparemobiledevices(params);
      return resp.data;
    } catch (e) {
      return { "error": true };
    }
  };
}
export function getMobileByBrand(params) {
  return async function (dispatch, getState) {
    try {

      let resp = await API.getMobileByBrand(params);
      return resp.data;
    } catch (e) {
      return { "error": true };
    }
  };
}
