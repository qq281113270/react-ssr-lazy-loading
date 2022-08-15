/*
 * @Date: 2022-08-11 09:41:40
 * @Author: Yao guan shou
 * @LastEditors: Yao guan shou
 * @LastEditTime: 2022-08-15 13:00:24
 * @FilePath: /react-ssr-lazy-loading/client/router/Routers.js
 * @Description:
 */
import React from "react";
import PropTypes from "prop-types";
import { Router, Switch as Routes, Route } from "./react-router-dom";
import initState, { InitState } from "client/redux/initComponentState";
import addRouterApi, { AddRouterApi } from "./addRouterApi";
import routesConfig from "./routesComponent";

const Routers = (props) => {
  const { history, context } = props;
  return (
    <Router history={history} context={context}>
      <Routes>
        {routesConfig.map((route) => {
          const { path, exact, Component } = route;
          return (
            <Route
              key={path}
              exact={exact}
              path={path}
              component={
                (props) => {
                  return (
                    <InitState {...props}>
                      {(props) => {
                        return (
                          <AddRouterApi {...props}>
                            {(props) => {
                              return <Component {...props} />;
                            }}
                          </AddRouterApi>
                        );
                      }}
                    </InitState>
                  );
                }
                // initState(addRouterApi(Component))
              }
              // render={(props) => {
              //     return (
              //         <InitState {...props}>
              //             {(props) => {
              //                 // const AddRouterApi =
              //                 //     addRouterApi(Component);
              //                 return <Component {...props} />;
              //             }}
              //         </InitState>
              //     );
              // }}
              // loader={async () => {
              //     console.log('loader================loader');
              // }}
            />
          );
        })}
        <Route
          path="*"
          element={
            <div style={{ padding: "1rem" }}>
              <p>There s nothing here!</p>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

Routers.propTypes = {
  history: PropTypes.object,
  dispatch: PropTypes.func,
  state: PropTypes.object,
  context: PropTypes.object
};
export default Routers;
