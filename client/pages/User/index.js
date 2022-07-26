/*
 * @Date: 2022-08-05 09:22:30
 * @Author: Yao guan shou
 * @LastEditors: Yao guan shou
 * @LastEditTime: 2022-08-15 13:03:13
 * @FilePath: /react-ssr-lazy-loading/client/pages/User/index.js
 * @Description:
 */
import React, { useEffect } from "react";
import setMetaProps from "client/component/SetMetaProps";
import Nav from "client/component/Nav";
import Head from "client/component/Head";
import Table from "client/component/Table";
import { mapRedux } from "client/redux";
import "./index.less";

const Index = () => {
  useEffect(() => {}, []);

  return (
    <div>
      <Head />
      <Nav />
      <div className="center-box">
        <div>这个是user页面</div>
        <Table
          rowKey="id"
          columns={[
            {
              title: "会员id",
              dataIndex: "id",
              key: "id"
            },
            {
              title: "会员昵称",
              dataIndex: "name",
              key: "name"
            },
            {
              title: "帐号",
              dataIndex: "account",
              key: "account"
            },
            {
              title: "年龄",
              dataIndex: "age",
              key: "age"
            },
            {
              title: "等级",
              dataIndex: "level",
              key: "level"
            },
            {
              title: "积分",
              dataIndex: "integral",
              key: "integral",
              render(txt, row) {
                const { integral } = row;
                return integral;
              }
            }
          ]}
          dataSource={[
            {
              id: 1,
              name: "张山",
              account: "1233",
              age: "19",
              level: 1,
              integral: 90
            },
            {
              id: 2,
              name: "李四",
              account: "3245345",
              age: "17",
              level: 2,
              integral: 100
            },
            {
              id: 2,
              name: "王五",
              account: "567456",
              age: "20",
              level: 2,
              integral: 130
            }
          ]}
        />
      </div>
    </div>
  );
};

Index.getInitPropsState = async (props = {}) => {
  const {
    dispatch: { home: { setInitState } = {} } = {},
    match: { params: { page = 1, size = 10 } = {} } = {}
  } = props;

  await Head.getInitPropsState(props);
  await Nav.getInitPropsState(props);
};

Index.getMetaProps = () => {
  return {
    title: "用户页面",
    keywords: "用户页面网站关键词",
    description: "用户页面网站描述"
  };
};
export default mapRedux()(setMetaProps()(Index));
