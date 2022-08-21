/*
 * @Date: 2022-08-11 09:41:40
 * @Author: Yao guan shou
 * @LastEditors: Yao guan shou
 * @LastEditTime: 2022-08-15 13:03:04
 * @FilePath: /react-ssr-lazy-loading/client/pages/marketing/pages/DiscountCoupon/index.js
 * @Description:
 */
import React from "react";
import Nav from "client/component/Nav";
import Head from "client/component/Head";
import { mapRedux } from "client/redux";
// 2234;
// 权限跳转登录页面可以在这控制
const Index = (props = {}) => {
  return (
    <div>
      <Head />
      <Nav {...props} />

      <div className="center-box">当前页面是DiscountCoupon页面</div>
    </div>
  );
};

export default mapRedux()(Index);
