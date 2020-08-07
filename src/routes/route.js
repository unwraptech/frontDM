import compareWatch from "../components/user/compare-watch";
import compareTabs from "../components/user/compare-tabs";
import dashboard from "../components/user/dashboard";
import addDevice from "../components/admin/add-device";
import mobile from "../components/admin/mobile";
import tabs from "../components/admin/tabs";
import users from "../components/admin/users";
import viewDevice from "../components/admin/view-device";
import watch from "../components/admin/watch";
import login from "../components/auth/login";
import register from "../components/auth/register";
import resetPassword from "../components/auth/reset-password";
import forgetPassword from "../components/auth/forget-password";
import usermobiles from "../components/user/mobiles";
import userwatches from "../components/user/watches";
import usertabs from "../components/user/tabs";
import compareMobiles from "../components/user/compare-mobiles";
import techNews from "../components/user/tech-news";
import faq from "../components/user/faq";
import latestDevices from "../components/user/latest-devices";
import advanceSearch from "../components/user/advance-search";
import adminDashboard from "../components/admin/admin-dashboard";

export default {
  
    routes: [
        // auth
      { path: "/auth/login", component: login, exact: true},
      { path: "/auth/register", component: register, exact: true },
      { path: "/auth/forgot-password", component: forgetPassword, exact: true },
      { path: "/auth/reset-password", component: resetPassword, exact: true },
        // user
      {path :"/", component :dashboard , exact: true},
      {path :"/compare/Mobiles", component :compareMobiles , exact: true},
      {path :"/compare/Watches", component :compareWatch , exact: true},
      {path :"/compare/Tabs", component :compareTabs , exact: true},
      {path :"/smartphones", component :usermobiles , exact: true},
      {path :"/tabs", component :usertabs , exact: true},
      {path :"/smartwatch", component :userwatches , exact: true},
      {path :"/latest-devices", component :latestDevices , exact: true},
      {path :"/technews", component :techNews , exact: true},
      {path :"/search", component :advanceSearch , exact: true},
      {path :"/faq", component :faq , exact: true},


      // admin
      {path :"/admin/add-devices",exact: true , component :addDevice},
      {path :"/admin/mobiles",exact: true , component :mobile},
      {path :"/admin/tabs",exact: true , component :tabs},
      {path :"/admin/users",exact: true , component :users},
      {path :"/admin/watches",exact: true , component :watch},
      {path :"/admin/watches",exact: true , component :watch},
      {path :"/admin/dashboard",exact: true , component :adminDashboard},
      {path :"/admin/viewdevice/:deviceid",exact: true , component :viewDevice},
    ],
  };
