import API from "../apis/dashboard-apis";

export function getMobileBrands() {
  return async function (dispatch, getState) {
    try {

      let resp = await API.getMobileBrands();
      return resp.data;
    } catch (e) {
      return { "error": true };
    }
  };
}
export function getTabsBrands() {
  return async function (dispatch, getState) {
    try {
      let resp = await API.getTabsBrands();
      return resp.data;

    } catch (e) {
      return { "error": true };
    }
  };
}
export function getWatchBrands() {
  return async function (dispatch, getState) {
    try {
      let resp = await API.getWatchBrands();
      return resp.data;

    } catch (e) {
      return { "error": true };
    }
  };
}
export function getNewsList() {
  return async function (dispatch, getState) {
    try {
      let resp = await API.getNews();
      return resp.data;

    } catch (e) {
      return { "error": true };
    }
  };
}


